import { NowRequest, NowResponse } from '@now/node'
import { isNullOrUndefined } from 'util'
import connectToDB, { closeDBConnection } from '../../../../components/Api/db'
import { Project } from '../../../../components/Api/Models'

export default async (req: NowRequest, res: NowResponse) => {
  if (req.method !== 'GET') res.status(405).end()
  else {
    const connectedToDB = await connectToDB()
    if (!connectedToDB) res.status(500).end('Database connection failed')
    else {
      const { service } = req.query
      let query: { service?: any } = {}

      if (service) query.service = service

      const projects = await Project.find(query)
        .populate({
          path: 'service',
          select: 'slug -_id',
        })
        .exec()
      res.status(200).end(JSON.stringify(projects))
      closeDBConnection()
    }
  }
}
