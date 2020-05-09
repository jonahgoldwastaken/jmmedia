import { NowRequest, NowResponse } from '@now/node'
import connectToDB, { closeDBConnection } from '../../../components/Api/db'
import { ProjectContent } from '../../../components/Api/Models'

export default async (req: NowRequest, res: NowResponse) => {
  if (req.method !== 'GET') res.status(405).end()
  else {
    const connectedToDB = await connectToDB()
    if (!connectedToDB) res.status(500).end('Database connection failed')
    else if (!req.query.id) {
      res.status(400).end('Please provide Project Content ID')
      closeDBConnection()
    } else {
      const content = await ProjectContent.findById(req.query.id)
      if (content) {
        res.status(200).end(JSON.stringify(content))
        closeDBConnection()
      } else {
        res.status(400).end("Project Content doesn't exist")
        closeDBConnection()
      }
    }
  }
}
