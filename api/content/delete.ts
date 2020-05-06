import { NowRequest, NowResponse } from '@now/node'
import fetch from 'node-fetch'
import connectToDB from '../components/db'
import ProjectContent from '../components/models/ProjectContent'

const { BASE_URL } = process.env

export default async (req: NowRequest, res: NowResponse) => {
  if (req.method !== 'POST') {
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
      } else if (!req.body.id) {
        res.status(400).end('Please provide Project Content ID')
      } else {
        try {
          const deletedProjectContent = await ProjectContent.findByIdAndDelete(
            req.body.id
          )
          if (!deletedProjectContent) {
            res.status(400).end("Project Content doesn't exist")
          } else {
            res
              .status(200)
              .end(JSON.stringify(deletedProjectContent.toObject()))
          }
        } catch (err) {
          res.status(400).end("Project Content doesn't exist")
        }
      }
    }
  }
}
