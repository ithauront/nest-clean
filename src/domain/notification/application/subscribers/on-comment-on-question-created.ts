import { DomainEvents } from '@/core/event/domain-events'
import { EventHandler } from '@/core/event/event-handler'
import { SendNotificationUseCase } from '../use-cases/send-notification'
import { QuestionsRepository } from '@/domain/forum/application/repositories/questions-repository'
import { CommentOnQuestionEvent } from '@/domain/forum/enterprise/events/comment-on-question-event'
import { Injectable } from '@nestjs/common'

@Injectable()
export class OnCommentOnQuestionCreated implements EventHandler {
  constructor(
    private questionsRepository: QuestionsRepository,
    private sendNotification: SendNotificationUseCase,
  ) {
    this.setupSubscriptions()
  }

  setupSubscriptions(): void {
    DomainEvents.register(
      this.sendNewCommentOnQuestionNotification.bind(this),
      CommentOnQuestionEvent.name,
    )
  }

  private async sendNewCommentOnQuestionNotification({
    questionComment,
  }: CommentOnQuestionEvent) {
    const question = await this.questionsRepository.findById(
      questionComment.questionId.toString(),
    )

    if (question) {
      await this.sendNotification.execute({
        recipientId: question?.authorId.toString(),
        title: `Nova comentario em sua pergunta "${question.title
          .substring(0, 40)
          .concat('...')}"`,
        content: questionComment.content,
      })
    }
  }
}
