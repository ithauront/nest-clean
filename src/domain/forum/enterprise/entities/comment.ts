import { UniqueEntityId } from '../../../../core/entities/unique-entity-id'
import { AggregateRoot } from '@/core/entities/aggregate-root'

export interface CommentsProps {
  authorId: UniqueEntityId
  content: string
  createdAt: Date
  updatedAt?: Date | null
}
export abstract class Comment<
  Props extends CommentsProps,
> extends AggregateRoot<Props> {
  get content() {
    return this.props.content
  }

  set content(content: string) {
    this.props.content = content
    this.touch()
  }

  get authorId() {
    return this.props.authorId
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  private touch() {
    this.props.updatedAt = new Date()
  }
}
