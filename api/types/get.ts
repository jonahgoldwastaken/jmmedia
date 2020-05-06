import { NowRequest, NowResponse } from '@now/node'
import connectToDB from '../components/db'
import ProjectType from '../components/models/ProjectType'

export default async (req: NowRequest, res: NowResponse) => {
  if (req.method !== 'GET') {
    res.status(405).end()
    return
  }
  const connectedToDB = await connectToDB()
  if (!connectedToDB) {
    res.status(500).end('Database connection failed')
  }
  const types = await ProjectType.find()
  res.status(200).end(JSON.stringify(types))
}
