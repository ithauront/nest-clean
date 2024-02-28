import {
  BadRequestException,
  Controller,
  Get,
  Param,
  Query,
} from '@nestjs/common'
import { ZodValidationPipe } from '@/infra/http/pipes/zod-validation-pipe'
import { z } from 'zod'
import { ListAnswerCommentsUseCase } from '@/domain/forum/application/use-cases/list-answer-comment'
import { CommentPresenter } from '../presenters/comment-presenter'

const pageQueryParamsSchema = z
  .string()
  .optional()
  .default('1')
  .transform(Number)
  .pipe(z.number().min(1))

const queryValidationPipe = new ZodValidationPipe(pageQueryParamsSchema)

type PageParamsTypeSchema = z.infer<typeof pageQueryParamsSchema>

@Controller('/answers/:answerId/comments')
export class FetchAnswerCommentController {
  constructor(private fetchAnswerComments: ListAnswerCommentsUseCase) {}

  @Get()
  async handle(
    @Query('page', queryValidationPipe) page: PageParamsTypeSchema,
    @Param('answerId') answerId: string,
  ) {
    const result = await this.fetchAnswerComments.execute({
      page,
      answerId,
    })
    if (result.isLeft()) {
      throw new BadRequestException()
    }
    const answerComments = result.value.answerComments

    return { comments: answerComments.map(CommentPresenter.toHTTP) }
  }
}
