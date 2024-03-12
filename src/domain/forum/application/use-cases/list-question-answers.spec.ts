import { InMemoryAnswersRepository } from 'test/repositories/in-memory-answer-repository'
import { ListQuestionsAnswersUseCase } from './list-question-answers'
import { makeAnswer } from 'test/factories/make-answer'
import { UniqueEntityId } from '../../../../core/entities/unique-entity-id'
import { InMemoryAnswerAttachmentsRepository } from 'test/repositories/in-memory-answer-attachment-repository'
import { InMemoryStudentsRepository } from 'test/repositories/in-memory-students-repository'
import { makeStudent } from 'test/factories/make-student'

let inMemoryAnswersAttachmentRepository: InMemoryAnswerAttachmentsRepository
let inMemoryAnswersRepository: InMemoryAnswersRepository
let inMemoryStudentsRepository: InMemoryStudentsRepository
let sut: ListQuestionsAnswersUseCase

describe('list recent answers test', () => {
  beforeEach(() => {
    inMemoryAnswersAttachmentRepository =
      new InMemoryAnswerAttachmentsRepository()
    inMemoryStudentsRepository = new InMemoryStudentsRepository()
    inMemoryAnswersRepository = new InMemoryAnswersRepository(
      inMemoryAnswersAttachmentRepository,
      inMemoryStudentsRepository,
    )
    sut = new ListQuestionsAnswersUseCase(inMemoryAnswersRepository)
  })

  test('if can list the questions answers', async () => {
    const student = makeStudent({ name: 'Jhon Doe' })
    await inMemoryStudentsRepository.items.push(student)

    const answer1 = makeAnswer({
      questionId: new UniqueEntityId('question-1'),
      authorId: student.id,
    })
    const answer2 = makeAnswer({
      questionId: new UniqueEntityId('question-1'),
      authorId: student.id,
    })
    const answer3 = makeAnswer({
      questionId: new UniqueEntityId('question-1'),
      authorId: student.id,
    })

    await inMemoryAnswersRepository.create(answer1)
    await inMemoryAnswersRepository.create(answer2)
    await inMemoryAnswersRepository.create(answer3)

    const result = await sut.execute({ questionId: 'question-1', page: 1 })

    expect(result.value?.answers).toHaveLength(3)
    expect(result.value?.answers).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          author: 'Jhon Doe',
          answerId: answer1.id,
        }),
        expect.objectContaining({
          author: 'Jhon Doe',
          answerId: answer2.id,
        }),
        expect.objectContaining({
          author: 'Jhon Doe',
          answerId: answer3.id,
        }),
      ]),
    )
  })

  test('if can list paginated answers', async () => {
    const student = makeStudent({ name: 'Jhon Doe' })
    await inMemoryStudentsRepository.items.push(student)
    for (let i = 1; i <= 22; i++) {
      await inMemoryAnswersRepository.create(
        makeAnswer({
          questionId: new UniqueEntityId('question-1'),
          authorId: student.id,
        }),
      )
    }

    const result = await sut.execute({ questionId: 'question-1', page: 2 })

    expect(result.value?.answers).toHaveLength(2)
  })
})
