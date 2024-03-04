import { DomainEvents } from '@/core/event/domain-events'
import { PaginationParams } from '@/core/repositories/pagination-params'
import { QuestionAttachmentsRepository } from '@/domain/forum/application/repositories/question-attachments-repository'
import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'
import { Questions } from '@/domain/forum/enterprise/entities/questions'

export class InMemoryQuestionsRepository implements QuestionsRepository {
  public items: Questions[] = []

  constructor(
    private questionAttachmentsRepository: QuestionAttachmentsRepository,
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
