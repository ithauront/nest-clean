import { Module } from '@nestjs/common'
import { AutenticateController } from './controllers/autentication.controller'
import { CreateAccountController } from './controllers/create-account.controller'
import { CreateQuestionController } from './controllers/create-question.controller'
import { FetchRecentQuestionsController } from './controllers/fetch-recent-questions.controller'
import { DatabaseModule } from '../database/prisma/database.module'
import { CreateQuestionUseCase } from '@/domain/forum/application/use-cases/create-question'
import { ListRecentQuestionsUseCase } from '@/domain/forum/application/use-cases/list-recent-questions'
import { AutenticateStudentUseCase } from '@/domain/forum/application/use-cases/autenticate-student'
import { RegisterStudentUseCase } from '@/domain/forum/application/use-cases/register-student'
import { CryptographyModule } from '../cryptography/cryptography.module'
import { GetQuestionBySlugController } from './controllers/get-question-by-slug.controller'
import { GetQuestionBySlugUseCase } from '@/domain/forum/application/use-cases/get-question-by-slug'
import { EditQuestionController } from './controllers/edit-question.controller'
import { EditQuestionUseCase } from '@/domain/forum/application/use-cases/edit-question'
import { DeleteQuestionController } from './controllers/delete-question.controller'
import { DeleteQuestionUseCase } from '@/domain/forum/application/use-cases/delete-question'
import { AnswerQuestionController } from './controllers/answer-question.controller'
import { AnswerQuestionUseCase } from '@/domain/forum/application/use-cases/answer-question'
import { EditAnswerController } from './controllers/edit-answer.controller'
import { EditAnswerUseCase } from '@/domain/forum/application/use-cases/edit-answer'
import { DeleteAnswerController } from './controllers/delete-answer.controller'
import { DeleteAnswerUseCase } from '@/domain/forum/application/use-cases/delete-answer'
import { FetchQuestionAnswerController } from './controllers/fetch-question-answers.controller'
import { ListQuestionsAnswersUseCase } from '@/domain/forum/application/use-cases/list-question-answers'
import { ChooseQuestionBestAnswerController } from './controllers/choose-question-best-answer'
import { ChooseQuestionBestAnswerUseCase } from '@/domain/forum/application/use-cases/choose-question-best-answer'
import { CommentOnQuestionController } from './controllers/comment-on-question.controller'
import { CommentOnQuestionUseCase } from '@/domain/forum/application/use-cases/comment-on-question'
import { DeleteQuestionCommentController } from './controllers/delete-question-comment'
import { DeleteCommentOnQuestionUseCase } from '@/domain/forum/application/use-cases/delete-comment-on-question'
import { CommentOnAnswerController } from './controllers/comment-on-answer.controller'
import { CommentOnAnswerUseCase } from '@/domain/forum/application/use-cases/comment-on-answer'
import { DeleteAnswerCommentController } from './controllers/delete-answer-comment.controller'
import { DeleteCommentOnAnswerUseCase } from '@/domain/forum/application/use-cases/delete-comment-on-answer'
import { ListQuestionCommentsUseCase } from '@/domain/forum/application/use-cases/list-question-comments'
import { FetchQuestionCommentController } from './controllers/fetch-question-comments.controller'
import { FetchAnswerCommentController } from './controllers/fetch-answer-comment.controller'
import { ListAnswerCommentsUseCase } from '@/domain/forum/application/use-cases/list-answer-comment'
import { UploadAttachmentController } from './controllers/upload-attachment.controller'
import { StorageModule } from '../storage/storage.module'
import { UploadAndCreateAttachmentUseCase } from '@/domain/forum/application/use-cases/upload-and-create-attachment'
import { ReadNotificationController } from './controllers/read-notification.controller'
import { ReadNotificationUseCase } from '@/domain/notification/application/use-cases/read-notification'

@Module({
  imports: [DatabaseModule, CryptographyModule, StorageModule],
  controllers: [
    CreateAccountController,
    AutenticateController,
    CreateQuestionController,
    FetchRecentQuestionsController,
    GetQuestionBySlugController,
    EditQuestionController,
    DeleteQuestionController,
    AnswerQuestionController,
    EditAnswerController,
    DeleteAnswerController,
    FetchQuestionAnswerController,
    ChooseQuestionBestAnswerController,
    CommentOnQuestionController,
    DeleteQuestionCommentController,
    CommentOnAnswerController,
    DeleteAnswerCommentController,
    FetchQuestionCommentController,
    FetchAnswerCommentController,
    UploadAttachmentController,
    ReadNotificationController,
  ],
  providers: [
    CreateQuestionUseCase,
    ListRecentQuestionsUseCase,
    AutenticateStudentUseCase,
    RegisterStudentUseCase,
    GetQuestionBySlugUseCase,
    EditQuestionUseCase,
    DeleteQuestionUseCase,
    AnswerQuestionUseCase,
    EditAnswerUseCase,
    DeleteAnswerUseCase,
    ListQuestionsAnswersUseCase,
    ChooseQuestionBestAnswerUseCase,
    CommentOnQuestionUseCase,
    DeleteCommentOnQuestionUseCase,
    CommentOnAnswerUseCase,
    DeleteCommentOnAnswerUseCase,
    ListQuestionCommentsUseCase,
    ListAnswerCommentsUseCase,
    UploadAndCreateAttachmentUseCase,
    ReadNotificationUseCase,
  ],
})
export class HttpModule {}
