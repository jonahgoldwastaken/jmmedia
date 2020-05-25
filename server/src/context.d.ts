import { User } from 'api/User'

export interface jwtPayload {
  id: string
}

export interface Context {
  user?: jwtPayload
}
