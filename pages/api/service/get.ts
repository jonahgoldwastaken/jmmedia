import { NowRequest, NowResponse } from '@now/node'
import { isNullOrUndefined } from 'util'
import connectToDB, { closeDBConnection } from '../../../components/Api/db'
import { Service } from '../../../components/Api/Models'

export default async (req: NowRequest, res: NowResponse) => {
  if (req.method !== 'GET') res.status(405).end()
  else {
    const connectedToDB = await connectToDB()
    if (!connectedToDB) res.status(500).end('Database connection failed')
    else if (req.query.slug) {
      try {
        const { slug } = req.query
        //@ts-ignore
        const service = await Service.findOne({ slug })
        if (isNullOrUndefined(service)) res.status(404).end()
        else res.status(200).end(JSON.stringify(service))
        closeDBConnection()
      } catch (err) {
        res.status(404).end()
        closeDBConnection()
      }
    } else if (req.query.id) {
      try {
        const { id } = req.query
        //@ts-ignore
        const service = await Service.findOne({ id })
        if (isNullOrUndefined(service)) res.status(404).end()
        else res.status(200).end(JSON.stringify(service))
        closeDBConnection()
      } catch (err) {
        res.status(404).end()
        closeDBConnection()
      }
    } else {
      const services = await Service.find()
      res.status(200).end(JSON.stringify(services))
      closeDBConnection()
    }
  }
}
