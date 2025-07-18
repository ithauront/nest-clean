import { Either, right } from '@/core/either'
import { Answer } from '../../enterprise/entities/answer'
import { UniqueEntityId } from '../../../../core/entities/unique-entity-id'
import { AnswersRepository } from '../repositories/answers-repository'
import { AnswerAttachment } from '../../enterprise/entities/answer-attachment'
import { AnswerAttachmentList } from '../../enterprise/entities/answer-attachment-list'
import { Injectable } from '@nestjs/common'

interface AnswerQuestionUseCaseRequest {
  authorId: string
  questionId: string
  content: string
  attachmentIds: string[]
}
type AnswerQuestionUseCaseResponse = Either<
  null,
  {
    answer: Answer
  }
>
@Injectable()
export class AnswerQuestionUseCase {
  constructor(private anwsersRepository: AnswersRepository) {}

  async execute({
    authorId,
    questionId,
    content,
    attachmentIds,
  }: AnswerQuestionUseCaseRequest): Promise<AnswerQuestionUseCaseResponse> {
    const answer = Answer.create({
      content,
      authorId: new UniqueEntityId(authorId),
      questionId: new UniqueEntityId(questionId),
    })
    const attachment = attachmentIds.map((attachmentId) => {
      return AnswerAttachment.create({
        attachmentId: new UniqueEntityId(attachmentId),
        answerId: answer.id,
      })
    })

    answer.attachment = new AnswerAttachmentList(attachment)
    await this.anwsersRepository.create(answer)
    return right({ answer })
  }
}
