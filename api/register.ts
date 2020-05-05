import { NowRequest, NowResponse } from '@now/node'
import User from './models/User'
import argon2 from 'argon2'
import mongoose from 'mongoose'
const { MONGO_HOST } = process.env

export default async (req: NowRequest, res: NowResponse) => {
  if (req.method !== 'POST') {
    res.status(405).end()
    return
  }

  await mongoose.connect(MONGO_HOST, { useNewUrlParser: true })

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
