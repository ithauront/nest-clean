import { InMemoryQuestionCommentsRepository } from 'test/repositories/in-memory-question-comments-repository'
import { ListQuestionCommentsUseCase } from './list-question-comments'
import { UniqueEntityId } from '../../../../core/entities/unique-entity-id'
import { makeQuestionComment } from 'test/factories/make-question-comment'
import { InMemoryStudentsRepository } from 'test/repositories/in-memory-students-repository'
import { makeStudent } from 'test/factories/make-student'

let inMemoryStudentsRepository: InMemoryStudentsRepository
let inMemoryQuestionCommentsRepository: InMemoryQuestionCommentsRepository
let sut: ListQuestionCommentsUseCase

describe('list recent questioncomments test', () => {
  beforeEach(() => {
    inMemoryStudentsRepository = new InMemoryStudentsRepository()
    inMemoryQuestionCommentsRepository = new InMemoryQuestionCommentsRepository(
      inMemoryStudentsRepository,
    )
    sut = new ListQuestionCommentsUseCase(inMemoryQuestionCommentsRepository)
  })

  test('if can list the questions questioncomments', async () => {
    const student = makeStudent({ name: 'Jhon Doe' })
    await inMemoryStudentsRepository.items.push(student)
    const comment1 = makeQuestionComment({
      questionId: new UniqueEntityId('question-1'),
      authorId: student.id,
    })

    const comment2 = makeQuestionComment({
      questionId: new UniqueEntityId('question-1'),
      authorId: student.id,
    })

    const comment3 = makeQuestionComment({
      questionId: new UniqueEntityId('question-1'),
      authorId: student.id,
    })

    await inMemoryQuestionCommentsRepository.create(comment1)
    await inMemoryQuestionCommentsRepository.create(comment2)
    await inMemoryQuestionCommentsRepository.create(comment3)

    const result = await sut.execute({
      questionId: 'question-1',
      page: 1,
    })

    expect(result.value?.comments).toHaveLength(3)
    expect(result.value?.comments).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          author: 'Jhon Doe',
          commentId: comment1.id,
        }),
        expect.objectContaining({
          author: 'Jhon Doe',
          commentId: comment2.id,
        }),
        expect.objectContaining({
          author: 'Jhon Doe',
          commentId: comment3.id,
        }),
      ]),
    )
  })

  test('if can list paginated question comments', async () => {
    const student = makeStudent({ name: 'Jhon Doe' })
    await inMemoryStudentsRepository.items.push(student)
    for (let i = 1; i <= 22; i++) {
      await inMemoryQuestionCommentsRepository.create(
        makeQuestionComment({
          questionId: new UniqueEntityId('question-1'),
          authorId: student.id,
        }),
      )
    }

    const result = await sut.execute({
      questionId: 'question-1',
      page: 2,
    })

    expect(result.value?.comments).toHaveLength(2)
  })
})
