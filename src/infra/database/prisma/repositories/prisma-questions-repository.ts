import { PaginationParams } from '@/core/repositories/pagination-params'
import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'
import { Questions } from '@/domain/forum/enterprise/entities/questions'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { PrismaQuestionMapper } from '../mappers/prisma-question-mapper'
import { QuestionAttachmentsRepository } from '@/domain/forum/application/repositories/question-attachments-repository'
import { QuestionWithDetails } from '@/domain/forum/enterprise/entities/value-objects/question-with-details'
import { PrismaQuestionWithDetailsMapper } from '../mappers/prisma-question-with-details-mapper'
@Injectable()
export class PrismaQuestionsRepository implements QuestionsRepository {
  constructor(
    private prisma: PrismaService,
    private questionAttachments: QuestionAttachmentsRepository,
  ) {}

  async findById(id: string): Promise<Questions | null> {
    const question = await this.prisma.question.findUnique({
      where: {
        id,
      },
    })

    if (!question) {
      return null
    }
    return PrismaQuestionMapper.toDomain(question)
  }

  async findBySlug(slug: string): Promise<Questions | null> {
    const question = await this.prisma.question.findUnique({
      where: {
        slug,
      },
    })
    if (!question) {
      return null
    }

    return PrismaQuestionMapper.toDomain(question)
  }

  async findDetailsBySlug(slug: string): Promise<QuestionWithDetails | null> {
    const question = await this.prisma.question.findUnique({
      where: {
        slug,
      },
      include: {
        author: true,
        attachment: true,
      },
    })
    if (!question) {
      return null
    }

    return PrismaQuestionWithDetailsMapper.toDomain(question)
  }

  async findManyRecent({ page }: PaginationParams): Promise<Questions[]> {
    const questions = await this.prisma.question.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take: 20,
      skip: (page - 1) * 20,
    })

    return questions.map(PrismaQuestionMapper.toDomain)
  }

  async create(question: Questions): Promise<void> {
    const data = PrismaQuestionMapper.toPrisma(question)
    await this.prisma.question.create({
      data,
    })

    await this.questionAttachments.createMany(question.attachment.getItems())
  }

  async delete(question: Questions): Promise<void> {
    const data = PrismaQuestionMapper.toPrisma(question)
    await this.prisma.question.delete({ where: { id: data.id } })
  }

  async save(question: Questions): Promise<void> {
    const data = PrismaQuestionMapper.toPrisma(question)

    await Promise.all([
      this.prisma.question.update({
        where: { id: data.id },
        data,
      }),
      this.questionAttachments.createMany(question.attachment.getNewItems()),
      this.questionAttachments.deleteMany(
        question.attachment.getRemovedItems(),
      ),
    ])
  }
}
