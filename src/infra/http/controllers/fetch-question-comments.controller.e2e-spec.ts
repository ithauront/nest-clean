import { AppModule } from '@/infra/app.module'
import { DatabaseModule } from '@/infra/database/prisma/database.module'
import { INestApplication } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { Test } from '@nestjs/testing'
import request from 'supertest'
import { QuestionFactory } from 'test/factories/make-question'
import { QuestionCommentFactory } from 'test/factories/make-question-comment'
import { StudentFactory } from 'test/factories/make-student'

describe('Fetch questions comments tests (e2e)', () => {
  let app: INestApplication
  let studentFactory: StudentFactory
  let questionFactory: QuestionFactory
  let questionCommentFactory: QuestionCommentFactory
  let jwt: JwtService

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule, DatabaseModule],
      providers: [StudentFactory, QuestionFactory, QuestionCommentFactory],
    }).compile()

    app = moduleRef.createNestApplication()
    studentFactory = moduleRef.get(StudentFactory)
    questionFactory = moduleRef.get(QuestionFactory)
    questionCommentFactory = moduleRef.get(QuestionCommentFactory)
    jwt = moduleRef.get(JwtService)

    await app.init()
  })

  test('[get]/questions/:questionId/comments', async () => {
    const user = await studentFactory.makePrismaStudent({
      name: 'Jhon Doe',
    })

    const accessToken = jwt.sign({ sub: user.id.toString() })

    const question = await questionFactory.makePrismaQuestion({
      authorId: user.id,
    })

    const questionId = question.id.toString()

    await Promise.all([
      questionCommentFactory.makePrismaQuestionComment({
        authorId: user.id,
        questionId: question.id,
        content: 'Comment 01',
      }),
      questionCommentFactory.makePrismaQuestionComment({
        authorId: user.id,
        questionId: question.id,
        content: 'Comment 02',
      }),
      questionCommentFactory.makePrismaQuestionComment({
        authorId: user.id,
        questionId: question.id,
        content: 'Comment 03',
      }),
      questionCommentFactory.makePrismaQuestionComment({
        authorId: user.id,
        questionId: question.id,
        content: 'Comment 04',
      }),
    ])

    const response = await request(app.getHttpServer())
      .get(`/questions/${questionId}/comments`)
      .set('Authorization', `Bearer ${accessToken}`)
      .send()

    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({
      comments: expect.arrayContaining([
        expect.objectContaining({
          content: 'Comment 01',
          authorName: 'Jhon Doe',
        }),
        expect.objectContaining({
          content: 'Comment 02',
          authorName: 'Jhon Doe',
        }),
        expect.objectContaining({
          content: 'Comment 03',
          authorName: 'Jhon Doe',
        }),
        expect.objectContaining({
          content: 'Comment 04',
          authorName: 'Jhon Doe',
        }),
      ]),
    })
  })
})
