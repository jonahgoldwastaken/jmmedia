import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { createUploadLink } from 'apollo-upload-client'
import { useMemo } from 'react'

let apolloClient: ApolloClient<any>

function createApolloClient() {
  const enhancedFetch = (url: string, init: any) =>
    fetch(url, {
      ...init,
      headers: {
        ...init.headers,
      },
    }).then(response => response)

  const link = createUploadLink({
    uri: process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:4000',
    fetch: enhancedFetch,
    credentials: 'include',
  })

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link,
    cache: new InMemoryCache(),
  })
}

export function initializeApollo(initialState: any = null) {
  const _apolloClient = apolloClient ?? createApolloClient()

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

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
