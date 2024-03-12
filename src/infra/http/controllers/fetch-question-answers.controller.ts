import {
  BadRequestException,
  Controller,
  Get,
  Param,
  Query,
} from '@nestjs/common'
import { ZodValidationPipe } from '@/infra/http/pipes/zod-validation-pipe'
import { z } from 'zod'
import { ListQuestionsAnswersUseCase } from '@/domain/forum/application/use-cases/list-question-answers'
import { AnswerPresenter } from '../presenters/answer-presenter'
import { AnswerWithAuthorPresenter } from '../presenters/answer-with-author-presenter'

const pageQueryParamsSchema = z
  .string()
  .optional()
  .default('1')
  .transform(Number)
  .pipe(z.number().min(1))

const queryValidationPipe = new ZodValidationPipe(pageQueryParamsSchema)

type PageParamsTypeSchema = z.infer<typeof pageQueryParamsSchema>

@Controller('/questions/:questionId/answers')
export class FetchQuestionAnswerController {
  constructor(private listRecentQuestions: ListQuestionsAnswersUseCase) {}

  @Get()
  async handle(
    @Query('page', queryValidationPipe) page: PageParamsTypeSchema,
    @Param('questionId') questionId: string,
  ) {
    const result = await this.listRecentQuestions.execute({
      page,
      questionId,
    })
    if (result.isLeft()) {
      throw new BadRequestException()
    }
    const answers = result.value.answers

    return { answers: answers.map(AnswerWithAuthorPresenter.toHTTP) }
  }
}
