import { left, right, Either } from '@/core/either'
import { AnswerCommentsRepository } from '../repositories/answer-comments-repository'
import { ResourceNotFoundError } from '../../../../core/errors/errors/resource-not-found-error'
import { UnauthorizedError } from '../../../../core/errors/errors/unauthorized'

interface DeleteCommentOnAnswerUseCaseRequest {
  authorId: string
  commentOnAnswerId: string
}

type DeleteCommentOnAnswerUseCaseResponse = Either<
  ResourceNotFoundError | UnauthorizedError,
  null
>

export class DeleteCommentOnAnswerUseCase {
  constructor(private answerCommentsRepository: AnswerCommentsRepository) {}

  async execute({
    authorId,
    commentOnAnswerId,
  }: DeleteCommentOnAnswerUseCaseRequest): Promise<DeleteCommentOnAnswerUseCaseResponse> {
    const answerComment =
      await this.answerCommentsRepository.findById(commentOnAnswerId)
    if (!answerComment) {
      return left(new ResourceNotFoundError())
    }
    if (answerComment.authorId.toString() !== authorId) {
      return left(new UnauthorizedError())
    }
    await this.answerCommentsRepository.delete(answerComment)

    return right(null)
  }
}
