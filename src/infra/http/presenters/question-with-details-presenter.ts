import { QuestionWithDetails } from '@/domain/forum/enterprise/entities/value-objects/question-with-details'
import { AttachmentPresenter } from './attachment-presenter'

export class QuestionWithDetailsPresenter {
  static toHTTP(questionWithDetails: QuestionWithDetails) {
    return {
      questionId: questionWithDetails.questionId.toString(),
      authorId: questionWithDetails.authorId.toString(),
      author: questionWithDetails.author,
      title: questionWithDetails.title,
      slug: questionWithDetails.slug.value,
      content: questionWithDetails.content,
      attachments: questionWithDetails.attachments.map(
        AttachmentPresenter.toHTTP,
      ),
      bestAnswerId: questionWithDetails.bestAnswerId?.toString(),
      createdAt: questionWithDetails.createdAt,
      updatedAt: questionWithDetails.updatedAt,
    }
  }
}
