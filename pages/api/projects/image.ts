import { NowRequest, NowResponse } from '@now/node'
import Jimp from 'jimp'
import sharp from 'sharp'
import { Storage } from '@google-cloud/storage'
import btoa from 'btoa'
import detectCharacterEncoding from 'detect-character-encoding'

type keyFile = {
  type: string
  project_id: string
  private_key_id: string
  private_key: string
  client_email: string
  client_id: string
  auth_uri: string
  token_uri: string
  auth_provider_x509_cert_url: string
  client_x509_cert_url: string
}

export default (req: NowRequest, res: NowResponse) => {
  let key: keyFile
  if (!process.env.GCLOUD_CREDENTIALS) key = require('../../../key.json')
  else key = JSON.parse(btoa(process.env.GCLOUD_CREDENTIALS))
  const storage = new Storage({
    projectId: key.project_id,
    credentials: {
      private_key: key.private_key,
      client_email: key.client_email,
    },
  })
  const jmsiteStorage = storage.bucket('jmsite')
  const buf = Buffer.from(req.body, 'utf16le')
  sharp(buf)
    .png()
    .toBuffer()
    .then(async value => {
      console.log(value)
      await jmsiteStorage.create('/test.png')
      const file = jmsiteStorage.file('/test.png')
      file
        .createWriteStream({
          metadata: {
            'Content-Type': 'image/png',
          },
        })
        .end(value)
      await file.makePublic()
      res.status(200).end(JSON.stringify(file.baseUrl))
    })
    .catch(err => {
      console.log(err)
      res.status(500).end()
    })
}
