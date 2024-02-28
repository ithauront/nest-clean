import {
  BadRequestException,
  Controller,
  Delete,
  HttpCode,
  Param,
} from '@nestjs/common'
import { CurrentUser } from '@/infra/auth/current-user-decorator'
import { UserPayload } from '@/infra/auth/jtw.strategy'
import { DeleteCommentOnAnswerUseCase } from '@/domain/forum/application/use-cases/delete-comment-on-answer'

@Controller('/answers/comments/:id')
export class DeleteAnswerCommentController {
  constructor(private deleteAnswerComment: DeleteCommentOnAnswerUseCase) {}

  @Delete()
  @HttpCode(204)
  async handle(
    @CurrentUser() user: UserPayload,
    @Param('id') answerCommentId: string,
  ) {
    const userId = user.sub

    const result = await this.deleteAnswerComment.execute({
      authorId: userId,
      commentOnAnswerId: answerCommentId,
    })
    if (result.isLeft()) {
      throw new BadRequestException()
    }
  }
}
