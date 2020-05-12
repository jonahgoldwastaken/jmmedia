import { NowRequest, NowResponse } from '@now/node'
import connectToDB, { closeDBConnection } from '../../../../components/Api/db'
import { isNullOrUndefined } from 'util'
import { Service } from '../../../../components/Api/Models'

export default async (req: NowRequest, res: NowResponse) => {
  if (req.method !== 'GET') res.status(405).end()
  else {
    const connectedToDB = await connectToDB()
    if (!connectedToDB) res.status(500).end('Database connection failed')
    else {
      const { slug } = req.query as { slug: string }

      try {
        const service = await Service.findOne({ slug })
        if (isNullOrUndefined(service)) res.status(404).end()
        else res.status(200).end(JSON.stringify(service))
        closeDBConnection()
      } catch (err) {
        res.status(404).end()
        closeDBConnection()
      }
    }
  }
}
