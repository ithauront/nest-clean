import { AppModule } from '@/infra/app.module'
import { DatabaseModule } from '@/infra/database/prisma/database.module'
import { PrismaService } from '@/infra/database/prisma/prisma.service'
import { INestApplication } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Test } from '@nestjs/testing'
import request from 'supertest'
import { QuestionFactory } from 'test/factories/make-question'
import { StudentFactory } from 'test/factories/make-student'

describe('Delete questions tests (e2e)', () => {
  let app: INestApplication
  let prisma: PrismaService
  let studentFactory: StudentFactory
  let questionFactory: QuestionFactory
  let jwt: JwtService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
      providers: [StudentFactory, QuestionFactory],
    }).compile()

    app = moduleRef.createNestApplication()
    questionFactory = moduleRef.get(QuestionFactory)
    studentFactory = moduleRef.get(StudentFactory)
    prisma = moduleRef.get(PrismaService)
    jwt = moduleRef.get(JwtService)

    await app.init()
  })

  test('[DELETE]/questions/:id', async () => {
    const user = await studentFactory.makePrismaStudent()

    const accessToken = jwt.sign({ sub: user.id.toString() })

    const question = await questionFactory.makePrismaQuestion({
      authorId: user.id,
    })

    const questionId = question.id.toString()

    const response = await request(app.getHttpServer())
      .delete(`/questions/${questionId}`)
      .set('Authorization', `Bearer ${accessToken}`)
      .send({})

    expect(response.statusCode).toBe(204)

    const QuestionOnDatabase = await prisma.question.findUnique({
      where: {
        id: questionId,
      },
    })

    expect(QuestionOnDatabase).toBeNull()
  })
})
