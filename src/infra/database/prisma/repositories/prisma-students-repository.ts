import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { StudentsRepository } from '@/domain/forum/application/repositories/students-repository'
import { Student } from '@/domain/forum/enterprise/entities/student'
import { PrismaStudentsMapper } from '../mappers/prisma-students-mapper'

@Injectable()
export class PrismaStudentsRepository implements StudentsRepository {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string): Promise<Student | null> {
    const student = await this.prisma.user.findUnique({
      where: { email },
    })

    if (!student) {
      return null
    }
    return PrismaStudentsMapper.toDomain(student)
  }

  async create(student: Student): Promise<void> {
    const data = PrismaStudentsMapper.toPrisma(student)

    await this.prisma.user.create({
      data,
    })
  }
}
