import { UseCaseErrors } from '@/core/errors/use-case-errors'

export class WrongCredentialsError extends Error implements UseCaseErrors {
  constructor() {
    super(`Credentials are not valid.`)
  }
}
