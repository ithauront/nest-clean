import {
  Body,
  Controller,
  Post,
  UnauthorizedException,
  UsePipes,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { z } from 'zod'
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe'
import { PrismaService } from 'src/prisma/prisma.service'
import { compare } from 'bcryptjs'

const autenticateBodySchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

type AutenticateBodySchema = z.infer<typeof autenticateBodySchema>

@Controller('/sessions')
export class AutenticateController {
  constructor(
    private jwt: JwtService,
    private prisma: PrismaService,
  ) {}

  @Post()
  @UsePipes(new ZodValidationPipe(autenticateBodySchema))
  async handle(@Body() body: AutenticateBodySchema) {
    const { email, password } = body

    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (!user) {
      throw new UnauthorizedException('User credentials do not match')
    }

    const isPasswordValid = await compare(password, user.password)

    if (!isPasswordValid) {
      throw new UnauthorizedException('User credentials do not match')
    }

    const acessToken = this.jwt.sign({
      sub: user.id,
    })
    return {
      access_token: acessToken,
    }
  }
}
