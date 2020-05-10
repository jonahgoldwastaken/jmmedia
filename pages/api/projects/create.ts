import { NowRequest, NowResponse } from '@now/node'
import fetch from 'isomorphic-unfetch'
import connectToDB, { closeDBConnection } from '../../../components/Api/db'
import { Project } from '../../../components/Api/Models'

const { BASE_URL } = process.env

export default async (req: NowRequest, res: NowResponse) => {
  if (req.method !== 'POST') res.status(405).end()
  else if (!req.headers.authorization) res.status(401).end()
  else {
    const response = await fetch(BASE_URL + '/api/authenticate', {
      headers: { authorization: req.headers.authorization },
      method: 'POST',
    })
    if (!response.ok) res.status(401).end()
    else {
      const connectedToDB = await connectToDB()
      if (!connectedToDB) res.status(500).end('Database connection failed')
      else {
        let { title, slug, service, callToAction, content, deleted } = req.body
        const projectObj = {
          title,
          slug: slug.toLowerCase(),
          service,
          callToAction,
          content,
          deleted,
        }
        try {
          const newProject = new Project(projectObj)
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
