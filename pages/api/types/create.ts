import { NowRequest, NowResponse } from '@now/node'
import fetch from 'node-fetch'
import connectToDB, { closeDBConnection } from '../../../components/Api/db'
import { ProjectType } from '../../../components/Api/Models'
const { BASE_URL } = process.env

export default async (req: NowRequest, res: NowResponse) => {
  if (req.method !== 'POST') res.status(405).end()
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
      else {
        let { name, type, service } = req.body
        const projecTypeObj = {
          name,
          type,
          service,
        }
        try {
          const newProjectType = new ProjectType(projecTypeObj)
          const savedProjectType = await newProjectType.save()
          res.status(200).end(JSON.stringify(savedProjectType.toObject()))
          closeDBConnection()
        } catch (err) {
          res.status(400).end('Project Type already exists')
          closeDBConnection()
        }
      }
    }
  }
}
