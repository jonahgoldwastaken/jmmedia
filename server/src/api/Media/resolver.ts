// import { storage } from '../../bucket'
import { S3 } from 'aws-sdk'
import { FileUpload, GraphQLUpload } from 'graphql-upload'
import sharp from 'sharp'
import stream from 'stream'
import { Arg, Mutation, Resolver } from 'type-graphql'
import { v4 } from 'uuid'
import { storage } from '../../bucket'
import { Media } from './model'
import { ReadStream } from 'fs'

const uploadSettings = [
  { size: 500, name: 'small' },
  { size: 1000, name: 'medium' },
  { size: 2000, name: 'large' },
]

async function* uploader(s3: S3, uuid: string, readStream: ReadStream) {
  const imageFactory = sharp()
  readStream.pipe(imageFactory)

  let i = 0
  while (i < uploadSettings.length) {
    const { size, name } = uploadSettings[i]
    const imageName = `${name}-${uuid}.webp`

    const pass = new stream.PassThrough()
    imageFactory.clone().resize(size).webp().pipe(pass)

    yield await s3
      .upload({ Bucket: 'jmmedia', Key: imageName, Body: pass })
      .promise()

    i++
  }

  return
}

@Resolver(() => Media)
export class MediaResolver {
  Upload = GraphQLUpload

  @Mutation(() => [String], { description: 'Upload a single file' })
  async uploadImage(
    @Arg('file', _type => GraphQLUpload)
    file: Promise<FileUpload>
  ): Promise<string[]> {
    const { createReadStream } = await file
    const b2 = storage()
    const stream = createReadStream()

    console.log('hoi')

    const uuid = v4()
    const results: string[] = []

    for await (const { Location } of uploader(b2, uuid, stream)) {
      results.push(Location)
    }
    return results
  }

  @Mutation(() => Boolean, { description: 'Deletes files at specified URL' })
  async deleteImage(@Arg('url') url: string): Promise<boolean> {
    const { pathname } = new URL(url)
    const Key = pathname.slice(1)
    const b2 = storage()
    await b2.deleteObject({ Bucket: 'jmmedia', Key }).promise()
    return true
  }
}
