import { NowRequest, NowResponse } from '@now/node'
import fetch from 'node-fetch'
import connectToDB, { closeDBConnection } from '../../../components/Api/db'
import { Service, ProjectType } from '../../../components/Api/Models'

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
        res.status(400).end('Please provide Service ID')
        closeDBConnection()
      } else {
        try {
          const deletedService = await Service.findByIdAndDelete(req.query.id)
          if (!deletedService) {
            res.status(400).end("Service doesn't exist")
            closeDBConnection()
          } else {
            res.status(200).end(JSON.stringify(deletedService.toObject()))
            const projectTypesToChange = await ProjectType.find({
              serviceName: deletedService.name,
            })
            projectTypesToChange.map(type => (type.serviceName = ''))
            projectTypesToChange.forEach(async type => await type.save())
            closeDBConnection()
          }
        } catch (err) {
          res.status(400).end("Service doesn't exist")
          closeDBConnection()
        }
      }
    }
  }
}
