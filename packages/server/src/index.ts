import { resolve } from 'path'
require('dotenv').config({ path: resolve(process.cwd(), '..', '..', '.env') })
import cors from '@koa/cors'
import { ApolloServer } from 'apollo-server-koa'
import { graphqlUploadKoa } from 'graphql-upload'
import koa from 'koa'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { MediaResolver } from './api/Media'
import { ProjectResolver } from './api/Project'
import { ServiceResolver } from './api/Service'
import { UserResolver } from './api/User'
import { authChecker, authorizeToken } from './authentication'
import connectToDB from './db'
import { default as helmet } from 'koa-helmet'

const initialiseBootSequence = async () => {
  connectToDB()
  const schema = await buildSchema({
    resolvers: [UserResolver, ProjectResolver, ServiceResolver, MediaResolver],
    validate: false,
    authChecker,
  })
  const PORT = process.env.PORT || 4000

  const app = new koa()
  app.use(helmet())
  app.use(
    cors({
      origin:
        process.env.NODE_ENV === 'development'
          ? 'http://127.0.0.1:3000'
          : 'https://www.jmmedia.nl',
      credentials: true,
    })
  )
  app.keys = [process.env.SESSION_SECRET as string]
  app.use(async (ctx, next) => {
    const [error, user, message] = await authorizeToken(ctx)
    if (error) console.log(error)
    if (message) console.log(message)
    if (user) ctx.state.user = user
    await next()
  })
  app.use(
    graphqlUploadKoa({
      maxFieldSize: 1000000,
      maxFileSize: 40000000,
      maxFiles: 5,
    })
  )
  const server = new ApolloServer({
    schema,
    uploads: false,
    context: async ({ ctx }) => {
      const user = ctx.state.user
      delete ctx.state.user
      return { ctx: { ...ctx }, user }
    },
  })
  server.applyMiddleware({ app, cors: true, path: '/' })
  app.listen(PORT, () => {
    console.log('ready on port :' + PORT + '!')
  })
}

initialiseBootSequence()
