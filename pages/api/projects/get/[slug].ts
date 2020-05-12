import { NowRequest, NowResponse } from '@now/node'
import { isNullOrUndefined } from 'util'
import connectToDB, { closeDBConnection } from '../../../../components/Api/db'
import { Project } from '../../../../components/Api/Models'

export default async (req: NowRequest, res: NowResponse) => {
  if (req.method !== 'GET') res.status(405).end()
  else {
    const connectedToDB = await connectToDB()
    if (!connectedToDB) res.status(500).end('Database connection failed')
    else
      try {
        const { slug } = req.query as { slug: string }
        const project = await Project.findOne({ slug })
          .populate({
            path: 'service',
            select: 'slug -_id',
          })
          .exec()

        if (isNullOrUndefined(project)) res.status(404).end()
        else res.status(200).end(JSON.stringify(project.toObject()))
        closeDBConnection()
      } catch (err) {
        res.status(404).end('Project not found')
      }
  }
}
