import {
  QuestionProps,
  Questions,
} from '@/domain/forum/enterprise/entities/questions'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { faker } from '@faker-js/faker'

export function makeQuestion(
  override: Partial<QuestionProps> = {},
  id?: UniqueEntityId,
) {
  const question = Questions.create(
    {
      title: faker.lorem.sentence(),
      authorId: new UniqueEntityId(),
      content: faker.lorem.text(),
      ...override,
    },
    id,
  )

  return question
}
