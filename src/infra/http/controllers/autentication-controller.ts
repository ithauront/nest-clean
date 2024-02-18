import { Body, Controller, Post, UsePipes } from '@nestjs/common'
import { z } from 'zod'
import { ZodValidationPipe } from '@/infra/http/pipes/zod-validation-pipe'
import { AutenticateStudentUseCase } from '@/domain/forum/application/use-cases/autenticate-student'

const autenticateBodySchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

type AutenticateBodySchema = z.infer<typeof autenticateBodySchema>

@Controller('/sessions')
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
      throw new Error()
    }

    const { accessToken } = result.value

    return {
      access_token: accessToken,
    }
  }
}
