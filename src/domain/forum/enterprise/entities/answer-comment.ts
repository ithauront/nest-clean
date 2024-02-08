import { Optional } from '@/core/types/optional'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Comment, CommentsProps } from './comment'
import { CommentOnAnswerEvent } from '../events/comment-on-answer-event'

export interface AnswerCommentsProps extends CommentsProps {
  answerId: UniqueEntityId
}
export class AnswerComment extends Comment<AnswerCommentsProps> {
  get answerId() {
    return this.props.answerId
  }

  static create(
    props: Optional<AnswerCommentsProps, 'createdAt'>,
    id?: UniqueEntityId,
  ) {
    const answerComment = new AnswerComment(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )
    const isNewAnswerComment = !id
    if (isNewAnswerComment) {
      answerComment.addDomainEvent(new CommentOnAnswerEvent(answerComment))
    }
    return answerComment
  }
}
