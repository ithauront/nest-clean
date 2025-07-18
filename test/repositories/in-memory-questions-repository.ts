import { DomainEvents } from '@/core/event/domain-events'
import { PaginationParams } from '@/core/repositories/pagination-params'
import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'
import { Questions } from '@/domain/forum/enterprise/entities/questions'
import { InMemoryAttachmentsRepository } from './in-memory-attachment-repository'
import { InMemoryStudentsRepository } from './in-memory-students-repository'
import { InMemoryQuestionAttachmentsRepository } from './in-memory-question-attachment-repository'
import { QuestionWithDetails } from '@/domain/forum/enterprise/entities/value-objects/question-with-details'

export class InMemoryQuestionsRepository implements QuestionsRepository {
  public items: Questions[] = []

  constructor(
    private questionAttachmentsRepository: InMemoryQuestionAttachmentsRepository,
    private attachmentsRepository: InMemoryAttachmentsRepository,
    private studentRepository: InMemoryStudentsRepository,
  ) {}

  async create(question: Questions) {
    this.items.push(question)

    await this.questionAttachmentsRepository.createMany(
      question.attachment.getItems(),
    )
    DomainEvents.dispatchEventsForAggregate(question.id)
  }

  async findById(id: string) {
    const question = this.items.find((item) => item.id.toString() === id)
    if (!question) {
      return null
    }
    return question
  }

  async findBySlug(slug: string): Promise<Questions | null> {
    const question = this.items.find((item) => item.slug.value === slug)
    if (!question) {
      return null
    }

    return question
  }

  async findDetailsBySlug(slug: string): Promise<QuestionWithDetails | null> {
    const question = this.items.find((item) => item.slug.value === slug)
    if (!question) {
      return null
    }
    const author = this.studentRepository.items.find((student) => {
      return student.id.equals(question.authorId)
    })
    if (!author) {
      throw new Error(
        `Author with id ${question.authorId.toString()} does not exists`,
      )
    }
    const questionAttachments = this.questionAttachmentsRepository.items.filter(
      (attachment) => {
        return attachment.questionId.equals(question.id)
      },
    )
    const attachments = questionAttachments.map((questionAttachment) => {
      const attachment = this.attachmentsRepository.items.find((attachment) => {
        return attachment.id.equals(questionAttachment.attachmentId)
      })
      if (!attachment) {
        throw new Error(
          `Attachment with id ${questionAttachment.attachmentId.toString()} does not exists`,
        )
      }
      return attachment
    })

    return QuestionWithDetails.create({
      questionId: question.id,
      authorId: author.id,
      author: author.name,
      title: question.title,
      slug: question.slug,
      content: question.content,
      bestAnswerId: question.bestAnswerId,
      attachments,
      createdAt: question.createdAt,
      updatedAt: question.updatedAt,
    })
  }

  async findManyRecent({ page }: PaginationParams) {
    const questions = this.items
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice((page - 1) * 20, page * 20)

    return questions
  }

  async delete(question: Questions) {
    const itemIndex = this.items.findIndex((item) => item.id === question.id)
    this.items.splice(itemIndex, 1)

    this.questionAttachmentsRepository.deleteManyByQuestionId(
      question.id.toString(),
    )
  }

  async save(question: Questions) {
    const itemIndex = this.items.findIndex((item) => item.id === question.id)

    this.items[itemIndex] = question

    await this.questionAttachmentsRepository.createMany(
      question.attachment.getNewItems(),
    )
    await this.questionAttachmentsRepository.deleteMany(
      question.attachment.getRemovedItems(),
    )

    DomainEvents.dispatchEventsForAggregate(question.id)
  }
}
