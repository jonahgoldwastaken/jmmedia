import AWS from 'aws-sdk'

const { BB_KEY_ID, BB_SECRET_KEY } = process.env
AWS.config.credentials = new AWS.Credentials({
  accessKeyId: BB_KEY_ID as string,
  secretAccessKey: BB_SECRET_KEY as string,
})

export const storage = () => {
  const s3 = new AWS.S3({
    endpoint: 's3.eu-central-003.backblazeb2.com',
  })
  return s3
}
