import { Questions } from '@/domain/forum/enterprise/entities/questions'

export class QuestionPresenter {
  static toHTTP(question: Questions) {
    return {
      id: question.id.toString(),
      title: question.title,
      slug: question.slug.value,
      bestAnswerId: question.bestAnswerId?.toString(),
      createdAt: question.createdAt,
      updatedAt: question.updatedAt,
    }
  }
}
