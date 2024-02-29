import { UseCaseErrors } from '@/core/errors/use-case-errors'

export class InvalidAttachmentTypeError extends Error implements UseCaseErrors {
  constructor(type: string) {
    super(`File type "${type}" is not supported`)
  }
}
