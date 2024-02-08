import { UseCaseErrors } from '@/core/errors/use-case-errors'

export class ResourceNotFoundError extends Error implements UseCaseErrors {
  constructor() {
    super('Resource not found.')
  }
}
