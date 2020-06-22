import { resolve } from 'path'
require('dotenv').config({
  path: resolve(process.cwd(), '..', '..', '.env'),
})
import { ApolloServer } from 'apollo-server-koa'
import { graphqlUploadKoa } from 'graphql-upload'
import koa from 'koa'
import { default as helmet } from 'koa-helmet'
import logger from 'koa-logger'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { MediaResolver } from './api/Media'
import { ProjectResolver } from './api/Project'
import { ServiceResolver } from './api/Service'
import { ServiceRequestResolver } from './api/ServiceRequest'
import { UserResolver } from './api/User'
import { authChecker, authorizeToken } from './authentication'
import connectToDB from './db'
const initialiseBootSequence = async () => {
  const hasDbConnection = await connectToDB()
  const schema = await buildSchema({
    resolvers: [
      UserResolver,
      ProjectResolver,
      ServiceResolver,
      MediaResolver,
      ServiceRequestResolver,
    ],
    validate: false,
    authChecker,
    emitSchemaFile: true,
  })
  const PORT = Number(process.env.PORT) || 4000

  const app = new koa()
  const server = new ApolloServer({
    schema,
    uploads: false,
    context: async ({ ctx }) => {
      const user = ctx.state.user
      delete ctx.state.user
      return { ctx: { ...ctx }, user }
    },
  })

  app
    .use(helmet())
    .use(logger())
    .use(async (ctx, next) => {
      if (hasDbConnection) await next()
      else ctx.throw(500, 'No database connection')
    })
    .use(async (ctx, next) => {
      const [error, user] = await authorizeToken(ctx)
      if (error) console.log(error)
      if (user) ctx.state.user = user
      await next()
    })
    .use(
      graphqlUploadKoa({
        maxFieldSize: 1000000,
        maxFileSize: 40000000,
        maxFiles: 5,
      })
    )
    .use(
      server.getMiddleware({
        path: '/',
        cors: {
          allowMethods: ['GET', 'POST', 'OPTIONS'],
          allowHeaders: [
            'X-Requested-With',
            'Content-Type',
            'Authorization',
            'Origin',
          ],
          credentials: true,
          origin: ({ hostname }) => {
            if (
              process.env.NODE_ENV === 'production' &&
              hostname.endsWith('jmmedia.nl')
            )
              return `https://${hostname}`
            else if (process.env.NODE_ENV === 'development')
              return 'http://localhost:3000'
            return 'https://jmmedia.nl'
          },
        },
      })
    )
    .listen(PORT, () => {
      console.log(`Ready on port ${PORT}`)
    })
}

initialiseBootSequence()
