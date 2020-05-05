import { NowRequest, NowResponse } from '@now/node'
import jwt from 'jsonwebtoken'
import argon2 from 'argon2'
import passport from 'passport'
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt'
import { Strategy as LocalStrategy } from 'passport-local'
import User, { UserDocument } from './models/User'
import mongoose from 'mongoose'
const { SESSION_SECRET, MONGO_HOST } = process.env

passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: SESSION_SECRET,
      issuer: 'auth.jonahmeijers.nl',
      audience: 'jonahmeijers.nl',
    },
    function (payload, done) {
      User.findById(payload._id, function (err, user) {
        if (err) return done(err, null)
        if (user) return done(null, user)
        else return done(null, false)
      })
    }
  )
)

passport.use(
  new LocalStrategy(function (username, password, done) {
    User.findOne({ username }, function (err, user) {
      if (err) return done(err, null)
      if (!user) return done(null, false, { message: 'Incorrect username.' })
      else
        argon2.verify(user.password, password).then(authenticated => {
          if (!authenticated)
            return done(null, false, { message: 'Incorrect password.' })
          else return done(null, user)
        })
    })
  })
)

const sanitiseUser = (user: UserDocument) => {
  const { username, _id } = user.toObject()
  return { username, _id }
}

export default async (req: NowRequest, res: NowResponse) => {
  if (req.method !== 'POST') {
    res.status(405).end()
    return
  }

  if (MONGO_HOST) await mongoose.connect(MONGO_HOST, { useNewUrlParser: true })
  else res.status(500).end('Database connection failed')

  if (req.headers.authorization) {
    return passport.authenticate('jwt', { session: false }, (err, user) => {
      if (err || !user) res.status(401).end()
      else {
        res.status(200).end(JSON.stringify(sanitiseUser(user)))
      }
    })(req, res)
  } else {
    return passport.authenticate('local', { session: false }, (err, user) => {
      if (err) res.status(405).end()
      else if (SESSION_SECRET) {
        const token = jwt.sign(sanitiseUser(user), SESSION_SECRET, {
          audience: 'jonahmeijers.nl',
          issuer: 'auth.jonahmeijers.nl',
          expiresIn: 86400,
        })
        res.status(200).send(token)
      } else {
        res.status(500).end('Session secret not set')
      }
    })(req, res)
  }
}
