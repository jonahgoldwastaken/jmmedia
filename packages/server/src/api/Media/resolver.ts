// import { storage } from '../../bucket'
import { S3 } from 'aws-sdk'
import { ReadStream } from 'fs'
import { FileUpload, GraphQLUpload } from 'graphql-upload'
import sharp from 'sharp'
import stream from 'stream'
import { Arg, Mutation, Resolver, Authorized } from 'type-graphql'
import URL from 'url'
import { v4 } from 'uuid'
import { storage } from '../../bucket'
import { Media } from './model'

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
    const imageName = `${name}-${uuid}.jpg`

    const pass = new stream.PassThrough()
    imageFactory
      .clone()
      .resize(size)
      .jpeg({ quality: 60, progressive: true })
      .pipe(pass)

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

  @Authorized()
  @Mutation(() => [String], { description: 'Upload a single file' })
  async uploadImage(
    @Arg('file', () => GraphQLUpload)
    file: Promise<FileUpload>
  ): Promise<string[]> {
    const { createReadStream } = await file
    const b2 = storage()
    const stream = createReadStream()

    const uuid = v4()
    const results: string[] = []

    for await (const { Location } of uploader(b2, uuid, stream))
      results.push(Location)

    return results
  }

  @Authorized()
  @Mutation(() => String, { description: 'Upload a listImage' })
  async uploadListImage(
    @Arg('file', () => GraphQLUpload) file: Promise<FileUpload>
  ): Promise<string> {
    const { createReadStream } = await file
    const b2 = storage()
    const readStream = createReadStream()

    const uuid = v4()
    const imageName = `list-${uuid}.jpg`
    const pass = new stream.PassThrough()
    readStream
      .pipe(sharp())
      .resize(500, 500, { fit: 'cover' })
      .jpeg({ quality: 60, progressive: true })
      .pipe(pass)
    const { Location } = await b2
      .upload({ Bucket: 'jmmedia', Key: imageName, Body: pass })
      .promise()
    return Location
  }

  @Authorized()
  @Mutation(() => Boolean, { description: 'Deletes files at specified URL' })
  async deleteImage(@Arg('url') url: string): Promise<boolean> {
    const { pathname } = URL.parse(url)
    if (!pathname) return false
    const Key = pathname.slice(1)
    const b2 = storage()
    await b2.deleteObject({ Bucket: 'jmmedia', Key }).promise()
    return true
  }
}
