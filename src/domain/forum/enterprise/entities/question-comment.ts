import { Optional } from '@/core/types/optional'
import { UniqueEntityId } from '../../../../core/entities/unique-entity-id'
import { Comment, CommentsProps } from './comment'
import { CommentOnQuestionEvent } from '../events/comment-on-question-event'

export interface QuestionCommentsProps extends CommentsProps {
  questionId: UniqueEntityId
}
export class QuestionComment extends Comment<QuestionCommentsProps> {
  get questionId() {
    return this.props.questionId
  }

  static create(
    props: Optional<QuestionCommentsProps, 'createdAt'>,
    id?: UniqueEntityId,
  ) {
    const questionComment = new QuestionComment(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id,
    )
    const isNewQuestionComment = !id

    if (isNewQuestionComment) {
      questionComment.addDomainEvent(
        new CommentOnQuestionEvent(questionComment),
      )
    }

    return questionComment
  }
}
