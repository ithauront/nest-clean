import { PaginationParams } from '@/core/repositories/pagination-params'
import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'
import { Questions } from '@/domain/forum/enterprise/entities/questions'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { PrismaQuestionMapper } from '../mappers/prisma-question-mapper'

@Injectable()
export class PrismaQuestionsRepository implements QuestionsRepository {
  constructor(private prisma: PrismaService) {}
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

  findBySlug(slug: string): Promise<Questions | null> {
    throw new Error('Method not implemented.')
  }

  findManyRecent(params: PaginationParams): Promise<Questions[]> {
    throw new Error('Method not implemented.')
  }

  create(question: Questions): Promise<void> {
    throw new Error('Method not implemented.')
  }

  delete(question: Questions): Promise<void> {
    throw new Error('Method not implemented.')
  }

  save(question: Questions): Promise<void> {
    throw new Error('Method not implemented.')
  }
}
