import { Either, left, right } from '@/core/either'
import { QuestionCommentsRepository } from '../repositories/question-comments-repository'
import { ResourceNotFoundError } from '../../../../core/errors/errors/resource-not-found-error'
import { UnauthorizedError } from '../../../../core/errors/errors/unauthorized'

interface DeleteCommentOnQuestionUseCaseRequest {
  authorId: string
  commentOnQuestionId: string
}

type DeleteCommentOnQuestionUseCaseResponse = Either<
  ResourceNotFoundError | UnauthorizedError,
  null
>

export class DeleteCommentOnQuestionUseCase {
  constructor(private questionCommentsRepository: QuestionCommentsRepository) {}

  async execute({
    authorId,
    commentOnQuestionId,
  }: DeleteCommentOnQuestionUseCaseRequest): Promise<DeleteCommentOnQuestionUseCaseResponse> {
    const questionComment =
      await this.questionCommentsRepository.findById(commentOnQuestionId)
    if (!questionComment) {
      return left(new ResourceNotFoundError())
    }
    if (questionComment.authorId.toString() !== authorId) {
      return left(new UnauthorizedError())
    }
    await this.questionCommentsRepository.delete(questionComment)

    return right(null)
  }
}
