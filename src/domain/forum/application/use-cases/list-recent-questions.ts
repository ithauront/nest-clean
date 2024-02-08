import { Either, right } from '@/core/either'
import { Questions } from '../../enterprise/entities/questions'
import { QuestionsRepository } from '../repositories/questions-repository'

interface ListRecentQuestionsUseCaseRequest {
  page: number
}
type ListRecentQuestionsUseCaseResponse = Either<
  null,
  {
    questions: Questions[]
  }
>

export class ListRecentQuestionsUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    page,
  }: ListRecentQuestionsUseCaseRequest): Promise<ListRecentQuestionsUseCaseResponse> {
    const questions = await this.questionsRepository.findManyRecent({ page })

    return right({ questions })
  }
}
