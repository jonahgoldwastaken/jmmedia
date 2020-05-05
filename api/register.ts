import { NowRequest, NowResponse } from '@now/node'
import User from './models/User'
import argon2 from 'argon2'
import mongoose from 'mongoose'
const { MONGO_HOST, MAX_REGISTRATIONS } = process.env

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
    if (registrationOpen) {
      res.status(200).end()
    } else {
      res.status(403).end()
    }
    return
  }
  if (req.method !== 'POST') {
    res.status(405).end()
    return
  }
  if (MONGO_HOST) await mongoose.connect(MONGO_HOST, { useNewUrlParser: true })
  else res.status(500).end('Database connection failed')

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
  } catch (err) {}
}
