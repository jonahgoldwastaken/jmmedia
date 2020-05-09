import { NowRequest, NowResponse } from '@now/node'
import fetch from 'node-fetch'
import connectToDB, { closeDBConnection } from '../../../components/Api/db'
import { Project } from '../../../components/Api/Models'

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
        let {
          title,
          slug,
          type,
          callToAction,
          content,
          ownWork,
          deleted,
        } = req.body
        const ProjectObj = {
          title,
          slug: slug.toLowerCase(),
          type,
          callToAction,
          content,
          ownWork,
          deleted,
        }
        try {
          const newProject = new Project(ProjectObj)
          const savedProject = await newProject.save()
          res.status(200).end(JSON.stringify(savedProject.toObject()))
          closeDBConnection()
        } catch (err) {
          res.status(400).end('Project Content already exists')
          closeDBConnection()
        }
      }
    }
  }
}
