import { NowRequest, NowResponse } from '@now/node'
import fetch from 'node-fetch'
import connectToDB from '../../../components/Api/db'
import ProjectContent from '../../../components/Api/Models/ProjectContent'

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
        let { content, type, alt } = req.body
        const projectContentObj = {
          content,
          type,
          alt,
        }
        try {
          const newProjectContent = new ProjectContent(projectContentObj)
          const savedProjectContent = await newProjectContent.save()
          res.status(200).end(JSON.stringify(savedProjectContent.toObject()))
        } catch (err) {
          res.status(400).end('Project Content already exists')
        }
      }
    }
  }
}
