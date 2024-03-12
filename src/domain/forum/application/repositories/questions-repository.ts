import { PaginationParams } from '@/core/repositories/pagination-params'
import { Questions } from '../../enterprise/entities/questions'
import { QuestionWithDetails } from '../../enterprise/entities/value-objects/question-with-details'

export abstract class QuestionsRepository {
  abstract findById(id: string): Promise<Questions | null>
  abstract findBySlug(slug: string): Promise<Questions | null>
  abstract findDetailsBySlug(slug: string): Promise<QuestionWithDetails | null>
  abstract findManyRecent(params: PaginationParams): Promise<Questions[]>
  abstract create(question: Questions): Promise<void>
  abstract delete(question: Questions): Promise<void>
  abstract save(question: Questions): Promise<void>
}
