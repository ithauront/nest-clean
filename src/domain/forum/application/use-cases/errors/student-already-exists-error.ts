import { UseCaseErrors } from '@/core/errors/use-case-errors'

export class StudentAlreadyExistsError extends Error implements UseCaseErrors {
  constructor(identifier: string) {
    super(`student with "${identifier}" already exists`)
  }
}
