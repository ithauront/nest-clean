import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { QuestionWithDetails } from '@/domain/forum/enterprise/entities/value-objects/question-with-details'
import { Slug } from '@/domain/forum/enterprise/entities/value-objects/slug'
import {
  Question as PrismaQuestion,
  User as PrismaUser,
  Attachment as PrismaAttachment,
  Prisma,
} from '@prisma/client'
import { PrismaAttachmentsMapper } from './prisma-attachment-mapper'

type PrismaQuestionWithDetails = PrismaQuestion & {
  author: PrismaUser
  attachment: PrismaAttachment[]
}

export class PrismaQuestionWithDetailsMapper {
  static toDomain(raw: PrismaQuestionWithDetails): QuestionWithDetails {
    return QuestionWithDetails.create({
      questionId: new UniqueEntityId(raw.id),
      authorId: new UniqueEntityId(raw.authorId),
      content: raw.content,
      title: raw.title,
      author: raw.author.name,
      slug: Slug.create(raw.slug),
      attachments: raw.attachment.map(PrismaAttachmentsMapper.toDomain),
      bestAnswerId: raw.bestAnswerId
        ? new UniqueEntityId(raw.bestAnswerId)
        : null,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt,
    })
  }
}
