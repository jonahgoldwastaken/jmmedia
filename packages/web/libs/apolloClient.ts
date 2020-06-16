import { useMemo } from 'react'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createUploadLink } from 'apollo-upload-client'
import { NextPageContext } from 'next'

let apolloClient: ApolloClient<any>

function createApolloClient(ctx?: NextPageContext) {
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
    uri: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:4000/api/',
    fetch: enhancedFetch,
  })
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link,
    cache: new InMemoryCache(),
  })
}

export function initializeApollo(
  ctx: NextPageContext | undefined = undefined,
  initialState: any = null
) {
  const _apolloClient = apolloClient ?? createApolloClient(ctx)

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function useApollo(ctx: NextPageContext, initialState: any) {
  const store = useMemo(() => initializeApollo(ctx, initialState), [
    initialState,
  ])
  return store
}
