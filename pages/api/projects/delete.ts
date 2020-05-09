import { NowRequest, NowResponse } from '@now/node'
import fetch from 'node-fetch'
import connectToDB, { closeDBConnection } from '../../../components/Api/db'
import { Project } from '../../../components/Api/Models'

const { BASE_URL } = process.env

export default async (req: NowRequest, res: NowResponse) => {
  if (req.method !== 'DELETE') res.status(405).end()
  else if (!req.headers.authorization) res.status(401).end()
  else {
    const response = await fetch(BASE_URL + '/api/authenticate', {
      headers: { authorization: req.headers.authorization },
      method: 'POST',
    })
    if (response.status !== 200) res.status(401).end()
    else {
      const connectedToDB = await connectToDB()
      if (!connectedToDB) res.status(500).end('Database connection failed')
      else if (!req.query.id) {
        res.status(400).end('Please provide Project ID')
        closeDBConnection()
      } else {
        try {
          const deletedProject = await Project.findByIdAndUpdate(
            req.query.id,
            {
              deleted: true,
            },
            { new: true }
          )
          if (!deletedProject) {
            res.status(400).end("Project doesn't exist")
            closeDBConnection()
          } else {
            res.status(200).end(JSON.stringify(deletedProject.toObject()))
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
