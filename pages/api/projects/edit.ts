import { NowRequest, NowResponse } from '@now/node'
import fetch from 'isomorphic-unfetch'
import connectToDB, { closeDBConnection } from '../../../components/Api/db'
import { Project } from '../../../components/Api/Models'

const { BASE_URL } = process.env

export default async (req: NowRequest, res: NowResponse) => {
  if (req.method !== 'PUT') res.status(405).end()
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
      else if (!req.query.id) {
        res.status(400).end('Please provide Project ID')
        closeDBConnection()
      } else {
        let { title, slug, service, callToAction, content, deleted } = req.body
        const projectObj = {
          title,
          slug,
          service,
          callToAction,
          content,
          deleted,
        }
        try {
          const updatedProject = await Project.findByIdAndUpdate(
            req.query.id,
            projectObj,
            { new: true }
          )
          if (!updatedProject) {
            res.status(400).end("Project doesn't exist")
            closeDBConnection()
          } else {
            res.status(200).end(JSON.stringify(updatedProject.toObject()))
            closeDBConnection()
          }
        } catch (err) {
          res.status(400).end("Project doesn't exist")
          closeDBConnection()
        }
      }
    }
  }
}
