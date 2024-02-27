import { Either, left, right } from '@/core/either'
import { Questions } from '../../enterprise/entities/questions'
import { AnswersRepository } from '../repositories/answers-repository'
import { QuestionsRepository } from '../repositories/questions-repository'
import { ResourceNotFoundError } from '../../../../core/errors/errors/resource-not-found-error'
import { UnauthorizedError } from '../../../../core/errors/errors/unauthorized'
import { Injectable } from '@nestjs/common'

interface ChooseQuestionBestAnswerUseCaseRequest {
  authorId: string
  answerId: string
}
type ChooseQuestionBestAnswerUseCaseResponse = Either<
  ResourceNotFoundError | UnauthorizedError,
  {
    question: Questions
  }
>
@Injectable()
export class ChooseQuestionBestAnswerUseCase {
  constructor(
    private anwsersRepository: AnswersRepository,
    private questionsRepository: QuestionsRepository,
  ) {}

  async execute({
    answerId,
    authorId,
  }: ChooseQuestionBestAnswerUseCaseRequest): Promise<ChooseQuestionBestAnswerUseCaseResponse> {
    const answer = await this.anwsersRepository.findById(answerId)

    if (!answer) {
      return left(new ResourceNotFoundError())
    }

    const question = await this.questionsRepository.findById(
      answer.questionId.toValue(),
    )

    if (!question) {
      return left(new ResourceNotFoundError())
    }

    if (authorId !== question.authorId.toString()) {
      return left(new UnauthorizedError())
    }

    question.bestAnswerId = answer.id

    await this.questionsRepository.save(question)

    return right({ question })
  }
}
