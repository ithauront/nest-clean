import { Module } from '@nestjs/common'
import { AutenticateController } from './controllers/autentication-controller'
import { CreateAccountController } from './controllers/create-account.controller'
import { CreateQuestionController } from './controllers/create-question.controller'
import { FetchRecentQuestionsController } from './controllers/fetch-recent-questions.controller'
import { DatabaseModule } from '../database/prisma/database.module'

@Module({
  imports: [DatabaseModule],
  controllers: [
    CreateAccountController,
    AutenticateController,
    CreateQuestionController,
    FetchRecentQuestionsController,
  ],
})
export class HttpModule {}
