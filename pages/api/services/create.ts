import { NowRequest, NowResponse } from '@now/node'
import fetch from 'isomorphic-unfetch'
import connectToDB, { closeDBConnection } from '../../../components/Api/db'
import { Service } from '../../../components/Api/Models'

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
        let { name, slug, description, options, callToAction } = req.body
        const serviceObj = {
          name,
          slug: slug.toLowerCase(),
          description,
          options,
          callToAction,
        }
        try {
          const newService = new Service(serviceObj)
          const savedService = await newService.save()
          res.status(200).end(JSON.stringify(savedService.toObject()))
          closeDBConnection()
        } catch (err) {
          res.status(400).end('Service already exists')
          closeDBConnection()
        }
      }
    }
  }
}
