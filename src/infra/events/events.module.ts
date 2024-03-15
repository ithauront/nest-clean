import { OnAnswerCreated } from '@/domain/notification/application/subscribers/on-answer-created'
import { OnCommentOnAnswerCreated } from '@/domain/notification/application/subscribers/on-comment-on-answer-created'
import { OnCommentOnQuestionCreated } from '@/domain/notification/application/subscribers/on-comment-on-question-created'
import { OnQuestionBestAnswerChosen } from '@/domain/notification/application/subscribers/on-question-best-answer-chosen'
import { SendNotificationUseCase } from '@/domain/notification/application/use-cases/send-notification'
import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/prisma/database.module'

@Module({
  imports: [DatabaseModule],
  providers: [
    OnAnswerCreated,
    OnCommentOnAnswerCreated,
    OnCommentOnQuestionCreated,
    OnQuestionBestAnswerChosen,
    SendNotificationUseCase,
  ],
})
export class EventsModule {}
