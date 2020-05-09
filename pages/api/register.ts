import { NowRequest, NowResponse } from '@now/node'
import argon2 from 'argon2'
import connectToDB, { closeDBConnection } from '../../components/Api/db'
import { User } from '../../components/Api/Models'
const { MAX_REGISTRATIONS } = process.env

const canRegister = async () => {
  if (MAX_REGISTRATIONS) {
    const amountOfUsers = await User.find().count()
    if (amountOfUsers >= +MAX_REGISTRATIONS) return false
    else return true
  } else return true
}

export default async (req: NowRequest, res: NowResponse) => {
  if (req.method === 'GET') {
    const registrationOpen = await canRegister()
    if (registrationOpen) res.status(200).end()
    else res.status(403).end()
  } else if (req.method !== 'POST') res.status(405).end()
  else {
    const connectedToDB = await connectToDB()
    if (!connectedToDB) res.status(500).end('Database connection failed')

    const password = await argon2.hash(req.body.password)
    const userObj = {
      username: req.body.username,
      password,
    }
    try {
      const newUser = new User(userObj)
      const savedUser = await newUser.save()
      const { username, _id } = savedUser.toObject()
      res.status(200).end(
        JSON.stringify({
          username,
          _id,
        })
      )
      closeDBConnection()
    } catch (err) {}
  }
}
