import { InMemoryQuestionCommentsRepository } from 'test/repositories/in-memory-question-comments-repository'
import { makeQuestionComment } from 'test/factories/make-question-comment'
import { DeleteCommentOnQuestionUseCase } from './delete-comment-on-question'
import { UniqueEntityId } from '../../../../core/entities/unique-entity-id'
import { UnauthorizedError } from '../../../../core/errors/errors/unauthorized'

let inMemoryQuestionCommentsRepository: InMemoryQuestionCommentsRepository
let sut: DeleteCommentOnQuestionUseCase

describe('delete comment on question', () => {
  beforeEach(() => {
    inMemoryQuestionCommentsRepository =
      new InMemoryQuestionCommentsRepository()

    sut = new DeleteCommentOnQuestionUseCase(inMemoryQuestionCommentsRepository)
  })

  test('if can delete comment on question', async () => {
    const commentQuestion = makeQuestionComment()

    await inMemoryQuestionCommentsRepository.create(commentQuestion)

    await sut.execute({
      commentOnQuestionId: commentQuestion.id.toString(),
      authorId: commentQuestion.authorId.toString(),
    })

    expect(inMemoryQuestionCommentsRepository.items).toHaveLength(0)
  })

  test('if cannot delete another author comment on question', async () => {
    const commentQuestion = makeQuestionComment({
      authorId: new UniqueEntityId('author-1'),
    })

    await inMemoryQuestionCommentsRepository.create(commentQuestion)

    const result = await sut.execute({
      commentOnQuestionId: commentQuestion.id.toString(),
      authorId: 'author-2',
    })

    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(UnauthorizedError)
  })
})
