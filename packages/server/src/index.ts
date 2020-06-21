import { resolve } from 'path'
require('dotenv').config({ path: resolve(process.cwd(), '..', '..', '.env') })
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
import logger from 'koa-logger'

const initialiseBootSequence = async () => {
  await connectToDB()
  const schema = await buildSchema({
    resolvers: [UserResolver, ProjectResolver, ServiceResolver, MediaResolver],
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
      const [error, user] = await authorizeToken(ctx)
      if (error) console.log(error)
      if (user) ctx.state.user = user
      await next()
    })
    .use(async (ctx, next) => {
      if (process.env.NODE_ENV === 'production')
        if (ctx.hostname.endsWith('jmmedia.nl')) {
          ctx.setHeader(
            'Access-Control-Allow-Origin',
            `https://${ctx.hostname}`
          )
          ctx.setHeader(
            'Access-Control-Allow-Headers',
            'X-Requested-With,Content-Type,Authorization'
          )
          ctx.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        } else ctx.setHeader('Access-Control-Allow-Origin', '*')
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
      })
    )
    .listen(PORT, () => {
      console.log(`Ready on port ${PORT}`)
    })
}

initialiseBootSequence()
