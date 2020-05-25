import argon2 from 'argon2'
import { sign, verify } from 'jsonwebtoken'
import { Context as KoaContext } from 'koa'
import { AuthChecker } from 'type-graphql'
import { User, UserModel } from './api/User'
import { Context } from './context'

const { SESSION_SECRET } = process.env

type AuthenticationData = [Error | null, User | null, string | null]

export const issueToken = (id: User['_id']) => {
  const token = sign({ id }, SESSION_SECRET as string, {
    issuer: 'api.jmmedia.nl',
    audience: 'jmmedia.nl',
    expiresIn: 7200,
  })
  return token
}

export const authorizeToken = async ({
  headers: { authorization },
}: KoaContext): Promise<AuthenticationData> => {
  if (!authorization) return [null, null, 'No Token provided']
  const token = authorization.split(' ')[1]
  const payload = verify(token, SESSION_SECRET as string, {
    issuer: 'api.jmmedia.nl',
    audience: 'jmmedia.nl',
  }) as any
  const user = await UserModel.findById(payload.id)
  if (!user) return [null, null, 'User not found']
  else return [null, user, null]
}

export const authenticateUser = async (
  username: string,
  password: string
): Promise<AuthenticationData> => {
  try {
    const user = await UserModel.findOne({ username })
    if (!user) return [null, null, 'Invalid username.']
    const validPassword = await argon2.verify(user.password as string, password)
    if (validPassword) return [null, user, null]
    return [null, null, 'Invalid password.']
  } catch (error) {
    return [error, null, null]
  }
}

export const authChecker: AuthChecker<Context> = ({ context: { user } }) =>
  user !== undefined
