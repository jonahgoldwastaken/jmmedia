import { NowRequest, NowResponse } from '@now/node'
import fetch from 'node-fetch'
import { closeDBConnection } from '../../components/Api/db'
const { BASE_URL } = process.env

export default async (req: NowRequest, res: NowResponse) => {
  if (req.method !== 'GET') {
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
      closeDBConnection()
    } else {
      const user = await response.json()
      res.end(JSON.stringify(user))
      closeDBConnection()
    }
  }
}
