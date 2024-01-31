import { Controller, Post, UseGuards } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { CurrentUser } from 'src/auth/current-user-decorator'
import { UserPayload } from 'src/auth/jtw.strategy'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'

@Controller('/questions')
@UseGuards(JwtAuthGuard)
export class CreateQuestionController {
  constructor(private jwt: JwtService) {}

  @Post()
  async handle(@CurrentUser() user: UserPayload) {
    console.log(user)
    return 'ok'
  }
}
