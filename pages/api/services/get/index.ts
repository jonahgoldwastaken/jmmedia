import { NowRequest, NowResponse } from '@now/node'
import connectToDB, { closeDBConnection } from '../../../../components/Api/db'
import { Service } from '../../../../components/Api/Models'

export default async (req: NowRequest, res: NowResponse) => {
  if (req.method !== 'GET') res.status(405).end()
  else {
    const connectedToDB = await connectToDB()
    if (!connectedToDB) res.status(500).end('Database connection failed')
    else {
      const services = await Service.find()
      res.status(200).end(JSON.stringify(services))
      closeDBConnection()
    }
  }
}
