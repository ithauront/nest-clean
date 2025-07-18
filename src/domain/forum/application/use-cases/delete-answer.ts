import { Either, left, right } from '@/core/either'
import { AnswersRepository } from '../repositories/answers-repository'
import { ResourceNotFoundError } from '../../../../core/errors/errors/resource-not-found-error'
import { UnauthorizedError } from '../../../../core/errors/errors/unauthorized'
import { Injectable } from '@nestjs/common'

interface DeleteAnswerUseCaseRequest {
  answerId: string
  authorId: string
}

type DeleteAnswerUseCaseResponse = Either<
  ResourceNotFoundError | UnauthorizedError,
  null
>

@Injectable()
export class DeleteAnswerUseCase {
  constructor(private answersRepository: AnswersRepository) {}

  async execute({
    answerId,
    authorId,
  }: DeleteAnswerUseCaseRequest): Promise<DeleteAnswerUseCaseResponse> {
    const answer = await this.answersRepository.findById(answerId)

    if (!answer) {
      return left(new ResourceNotFoundError())
    }

    if (authorId !== answer.authorId.toString()) {
      return left(new UnauthorizedError())
    }
    await this.answersRepository.delete(answer)

    return right(null)
  }
}
