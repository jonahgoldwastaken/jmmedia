import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { NextPageContext } from 'next'
import { useCookie } from 'next-cookie'
import { ApolloLink } from 'apollo-link'
import { createUploadLink } from 'apollo-upload-client'
import { onError } from 'apollo-link-error'

export default function createApolloClient(
  initialState: any,
  ctx: NextPageContext
) {
  const cookie = useCookie()
  const authToken = cookie.get('auth-token')

  const link = createUploadLink({
    uri: 'http://127.0.0.1:4000',
    credentials: 'include',
    headers: authToken
      ? {
          Authorization: `bearer ${authToken}`,
          'keep-alive': 'true',
          'Access-Control-Allow-Credentials': 'true',
        }
      : { 'keep-alive': 'true', 'Access-Control-Allow-Credentials': 'true' },
  })
  return new ApolloClient({
    connectToDevTools: true,
    ssrMode: Boolean(ctx),
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
          graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          )
        if (networkError) console.log(`[Network error]: ${networkError}`)
      }),
      link,
    ]),
    cache: new InMemoryCache().restore(initialState),
  })
}
