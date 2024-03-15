import { DomainEvents } from '@/core/event/domain-events'
import { EventHandler } from '@/core/event/event-handler'
import { SendNotificationUseCase } from '../use-cases/send-notification'
import { AnswersRepository } from '@/domain/forum/application/repositories/answers-repository'
import { CommentOnAnswerEvent } from '@/domain/forum/enterprise/events/comment-on-answer-event'
import { Injectable } from '@nestjs/common'

@Injectable()
export class OnCommentOnAnswerCreated implements EventHandler {
  constructor(
    private answersRepository: AnswersRepository,
    private sendNotification: SendNotificationUseCase,
  ) {
    this.setupSubscriptions()
  }

  setupSubscriptions(): void {
    DomainEvents.register(
      this.sendNewCommentOnAnswerNotification.bind(this),
      CommentOnAnswerEvent.name,
    )
  }

  private async sendNewCommentOnAnswerNotification({
    answerComment,
  }: CommentOnAnswerEvent) {
    const answer = await this.answersRepository.findById(
      answerComment.answerId.toString(),
    )

    if (answer) {
      await this.sendNotification.execute({
        recipientId: answer?.authorId.toString(),
        title: `Nova comentario em sua resposta "${answer.content
          .substring(0, 40)
          .concat('...')}"`,
        content: answerComment.content,
      })
    }
  }
}
