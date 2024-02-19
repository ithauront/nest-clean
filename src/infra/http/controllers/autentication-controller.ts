import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UnauthorizedException,
  UsePipes,
} from '@nestjs/common'
import { z } from 'zod'
import { ZodValidationPipe } from '@/infra/http/pipes/zod-validation-pipe'
import { AutenticateStudentUseCase } from '@/domain/forum/application/use-cases/autenticate-student'
import { WrongCredentialsError } from '@/domain/forum/application/use-cases/errors/wrong-credentials-error'
import { Public } from '@/infra/auth/public'

const autenticateBodySchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

type AutenticateBodySchema = z.infer<typeof autenticateBodySchema>

@Controller('/sessions')
@Public()
export class AutenticateController {
  constructor(private autenticateStudent: AutenticateStudentUseCase) {}

  @Post()
  @UsePipes(new ZodValidationPipe(autenticateBodySchema))
  async handle(@Body() body: AutenticateBodySchema) {
    const { email, password } = body

    const result = await this.autenticateStudent.execute({
      email,
      password,
    })

    if (result.isLeft()) {
      const error = result.value

      switch (error.constructor) {
        case WrongCredentialsError:
          throw new UnauthorizedException(error.message)

        default:
          throw new BadRequestException(error.message)
      }
    }

    const { accessToken } = result.value

    return {
      access_token: accessToken,
    }
  }
}
