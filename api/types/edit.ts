import { NowRequest, NowResponse } from '@now/node'
import connectToDB from '../components/db'
import ProjectType from '../components/models/ProjectType'
import fetch from 'node-fetch'

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
        res.status(400).end('Please provide Project Type ID')
      } else {
        const projectTypeObj = {
          name: req.body.name,
          type: req.body.type,
        }
        try {
          const updatedProjectType = await ProjectType.findByIdAndUpdate(
            req.body.id,
            projectTypeObj,
            { new: true }
          )
          if (!updatedProjectType) {
            res.status(400).end("Project Type doesn't exist")
          } else {
            res.status(200).end(JSON.stringify(updatedProjectType.toObject()))
          }
        } catch (err) {
          res.status(400).end("Project type doesn't exist")
        }
      }
    }
  }
}
