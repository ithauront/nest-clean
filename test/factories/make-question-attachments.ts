import {
  QuestionAttachment,
  QuestionAttachmentProps,
} from '@/domain/forum/enterprise/entities/question-attachment'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

export function makeQuestionAttachments(
  override: Partial<QuestionAttachmentProps> = {},
  id?: UniqueEntityId,
) {
  const questionAttachments = QuestionAttachment.create(
    {
      questionId: new UniqueEntityId(),
      attachmentId: new UniqueEntityId(),
      ...override,
    },
    id,
  )

  return questionAttachments
}
