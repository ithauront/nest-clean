import {
  Uploader,
  UploaderParams,
} from '@/domain/forum/application/storage/uploader'

import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import { EnvService } from '../env/env.service'

export class r2Uploader implements Uploader {
  private client: S3Client
  constructor(envService: EnvService) {
    const acountId = envService.get('CLOUDFLARE_ID')
    this.client = new S3Client({
      endpoint: `https://${acountId}.r2.cloudflarestorage.com`,
      region: 'auto',
      credentials: {
        accessKeyId: envService.get('AWS_ACCESS_KEY_ID'),
        secretAccessKey: envService.get('AWS_SECRET_KEY_ID'),
      },
    })
  }

  async upload({
    fileName,
    fileType,
    body,
  }: UploaderParams): Promise<{ url: string }> {
    throw new Error('Method not implemented.')
  }
}
