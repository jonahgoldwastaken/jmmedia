import { NowRequest, NowResponse } from '@now/node'
import fetch from 'node-fetch'
import connectToDB from '../components/db'
import ProjectType from '../components/models/ProjectType'
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
      } else {
        const projecTypeObj = {
          name: req.body.name,
          type: req.body.type,
        }
        try {
          const newProjectType = new ProjectType(projecTypeObj)
          const savedProjectType = await newProjectType.save()
          res.status(200).end(JSON.stringify(savedProjectType.toObject()))
        } catch (err) {
          res.status(400).end('Project Type already exists')
        }
      }
    }
  }
}
