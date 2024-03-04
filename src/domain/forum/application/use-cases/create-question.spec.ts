import { InMemoryQuestionAttachmentsRepository } from 'test/repositories/in-memory-question-attachment-repository'
import { UniqueEntityId } from '../../../../core/entities/unique-entity-id'
import { CreateQuestionUseCase } from './create-question'
import { InMemoryQuestionsRepository } from 'test/repositories/in-memory-questions-repository'

let inMemoryQuestionsRepository: InMemoryQuestionsRepository
let inMemoryQuestionsAttachmentRepository: InMemoryQuestionAttachmentsRepository
let sut: CreateQuestionUseCase

describe('create question test', () => {
  beforeEach(() => {
    inMemoryQuestionsAttachmentRepository =
      new InMemoryQuestionAttachmentsRepository()
    inMemoryQuestionsRepository = new InMemoryQuestionsRepository(
      inMemoryQuestionsAttachmentRepository,
    )
    sut = new CreateQuestionUseCase(inMemoryQuestionsRepository)
  })

  test('if can create an question', async () => {
    const result = await sut.execute({
      authorId: '1',
      title: 'question',
      content: 'this question?',
      attachmentIds: ['1', '2'],
    })

    expect(result.isRight()).toBe(true)
    expect(result.value?.question.content).toEqual('this question?')
    expect(inMemoryQuestionsRepository.items[0]).toEqual(result.value?.question)
    expect(
      inMemoryQuestionsRepository.items[0].attachment.currentItems,
    ).toHaveLength(2)
    expect(
      inMemoryQuestionsRepository.items[0].attachment.currentItems,
    ).toEqual([
      expect.objectContaining({
        attachmentId: new UniqueEntityId('1'),
      }),
      expect.objectContaining({
        attachmentId: new UniqueEntityId('2'),
      }),
    ])
  })
  test('if can create an attachment persistence when question is created', async () => {
    const result = await sut.execute({
      authorId: '1',
      title: 'question',
      content: 'this question?',
      attachmentIds: ['1', '2'],
    })

    expect(result.isRight()).toBe(true)
    
  })

})
