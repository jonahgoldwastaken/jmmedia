import { NowRequest, NowResponse } from '@now/node'
import fetch from 'node-fetch'
import connectToDB from '../components/db'
import ProjectType from '../components/models/ProjectType'
const { BASE_URL } = process.env

export default async (req: NowRequest, res: NowResponse) => {
  if (req.method !== 'DELETE') {
    res.status(405).end()
    return
  }
  if (!req.headers.authorization) {
    res.status(401).end()
    return
  } else {
    const response = await fetch(BASE_URL + '/api/authenticate', {
      headers: { authorization: req.headers.authorization },
      method: 'POST',
    })
    if (response.status !== 200) {
      res.status(401).end()
    } else {
      const connectedToDB = await connectToDB()
      if (!connectedToDB) {
        res.status(500).end('Database connection failed')
      } else if (!req.query.id) {
        res.status(400).end('Please provide Project Type ID')
      } else {
        try {
          const deletedProjectType = await ProjectType.findByIdAndDelete(
            req.query.id
          )
          if (!deletedProjectType) {
            res.status(400).end("Project Type doesn't exist")
          } else {
            res.status(200).end(JSON.stringify(deletedProjectType.toObject()))
          }
        } catch (err) {
          res.status(400).end("Project Type doesn't exist")
        }
      }
    }
  }
}
