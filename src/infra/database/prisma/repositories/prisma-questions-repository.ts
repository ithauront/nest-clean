import { PaginationParams } from '@/core/repositories/pagination-params'
import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'
import { Questions } from '@/domain/forum/enterprise/entities/questions'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PrismaQuestionsRepository implements QuestionsRepository {
  findById(id: string): Promise<Questions | null> {
    throw new Error('Method not implemented.')
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
