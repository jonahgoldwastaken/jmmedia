import { NowRequest, NowResponse } from '@now/node'
import fetch from 'node-fetch'
import connectToDB, { closeDBConnection } from '../../../components/Api/db'
import { ProjectType } from '../../../components/Api/Models'

const { BASE_URL } = process.env

export default async (req: NowRequest, res: NowResponse) => {
  if (req.method !== 'PUT') {
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
        closeDBConnection()
      } else {
        const { name, type, service } = req.body
        const projectTypeObj = {
          name,
          type,
          service,
        }
        try {
          const updatedProjectType = await ProjectType.findByIdAndUpdate(
            req.query.id,
            projectTypeObj,
            { new: true }
          )
          if (!updatedProjectType) {
            res.status(400).end("Project Type doesn't exist")
            closeDBConnection()
          } else {
            res.status(200).end(JSON.stringify(updatedProjectType.toObject()))
            closeDBConnection()
          }
        } catch (err) {
          res.status(400).end("Project Type doesn't exist")
          closeDBConnection()
        }
      }
    }
  }
}
