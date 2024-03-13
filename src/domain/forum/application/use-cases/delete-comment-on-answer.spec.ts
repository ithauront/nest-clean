import { InMemoryAnswerCommentsRepository } from 'test/repositories/in-memory-answer-comments-repository'
import { makeAnswerComment } from 'test/factories/make-answer-comment'
import { DeleteCommentOnAnswerUseCase } from './delete-comment-on-answer'
import { UniqueEntityId } from '../../../../core/entities/unique-entity-id'
import { UnauthorizedError } from '../../../../core/errors/errors/unauthorized'
import { InMemoryStudentsRepository } from 'test/repositories/in-memory-students-repository'

let inMemoryAnswerCommentsRepository: InMemoryAnswerCommentsRepository
let inMemoryStudentsRepository: InMemoryStudentsRepository
let sut: DeleteCommentOnAnswerUseCase

describe('delete comment on answer', () => {
  beforeEach(() => {
    inMemoryStudentsRepository = new InMemoryStudentsRepository()
    inMemoryAnswerCommentsRepository = new InMemoryAnswerCommentsRepository(
      inMemoryStudentsRepository,
    )

    sut = new DeleteCommentOnAnswerUseCase(inMemoryAnswerCommentsRepository)
  })

  test('if can delete comment on answer', async () => {
    const commentAnswer = makeAnswerComment()

    await inMemoryAnswerCommentsRepository.create(commentAnswer)

    await sut.execute({
      commentOnAnswerId: commentAnswer.id.toString(),
      authorId: commentAnswer.authorId.toString(),
    })

    expect(inMemoryAnswerCommentsRepository.items).toHaveLength(0)
  })

  test('if cannot delete another author comment on answer', async () => {
    const commentAnswer = makeAnswerComment({
      authorId: new UniqueEntityId('author-1'),
    })

    await inMemoryAnswerCommentsRepository.create(commentAnswer)

    const result = await sut.execute({
      commentOnAnswerId: commentAnswer.id.toString(),
      authorId: 'author-2',
    })
    expect(result.isLeft()).toBe(true)
    expect(result.value).toBeInstanceOf(UnauthorizedError)
  })
})
