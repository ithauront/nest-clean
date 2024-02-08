import {
  AnswerAttachment,
  AnswerAttachmentProps,
} from '@/domain/forum/enterprise/entities/answer-attachment'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

export function makeAnswerAttachments(
  override: Partial<AnswerAttachmentProps> = {},
  id?: UniqueEntityId,
) {
  const answerAttachments = AnswerAttachment.create(
    {
      answerId: new UniqueEntityId(),
      attachmentId: new UniqueEntityId(),
      ...override,
    },
    id,
  )

  return answerAttachments
}
