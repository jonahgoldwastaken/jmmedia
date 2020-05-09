import { NowRequest, NowResponse } from '@now/node'
import connectToDB, { closeDBConnection } from '../../../components/Api/db'
import { Project } from '../../../components/Api/Models'
import { isNull, isNullOrUndefined } from 'util'

export default async (req: NowRequest, res: NowResponse) => {
  if (req.method !== 'GET') {
    res.status(405).end()
    return
  }
  const connectedToDB = await connectToDB()
  if (!connectedToDB) {
    res.status(500).end('Database connection failed')
  } else if (req.query.slug) {
    try {
      const { slug } = req.query
      //@ts-ignore
      const project = await Project.findOne({ slug })
        .populate('content', '-_id')
        .populate('type', 'type service -_id')
        .exec()

      if (isNullOrUndefined(project)) res.status(404).end()
      else res.status(200).end(JSON.stringify(project))
      closeDBConnection()
    } catch (err) {
      res.status(404).end('Project not found')
    }
  } else {
    const { ownWork, type } = req.query
    let query: { ownWork?: any; type?: any } = {}

    if (ownWork) query.ownWork = ownWork
    if (type) query.type = type

    const projects = await Project.find(query)
      .populate('content', '-_id')
      .populate('type', 'type service -_id')
      .exec()
    res.status(200).end(JSON.stringify(projects))
    closeDBConnection()
  }
}
