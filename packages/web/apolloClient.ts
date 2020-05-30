import { ApolloClient } from 'apollo-client'
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory'
import { NextPageContext } from 'next'
import { ApolloLink } from 'apollo-link'
import { createUploadLink } from 'apollo-upload-client'
import { onError } from 'apollo-link-error'

export default function createApolloClient(
  initialState: any,
  ctx?: NextPageContext
) {
  const enhancedFetch = (url: string, init: any) =>
    fetch(url, {
      ...init,
      headers: {
        ...init.headers,
        Authorization: ctx?.req?.headers.cookie
          ? `bearer ${ctx?.req?.headers.cookie.split(';')[0].split('=')[1]}`
          : typeof document !== 'undefined' && document.cookie
          ? `bearer ${document.cookie.split('=')[1]}`
          : '',
      },
    }).then(response => response)
  const link = createUploadLink({
    uri: process.env.NEXT_PUBLIC_SERVER_URL,
    fetch: enhancedFetch,
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
        if (networkError) console.error(`[Network error]: ${networkError}`)
      }),
      link,
    ]),
    cache: new InMemoryCache().restore(initialState),
  })
}

export type WithApolloClient<P> = P & {
  apolloClient: ApolloClient<NormalizedCacheObject>
}
