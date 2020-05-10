import useSWR from 'swr'
import fetch from 'isomorphic-unfetch'
import { useCookie } from 'next-cookie'

const fetcher = (authToken: string) => (url: string) =>
  fetch(url, {
    headers: { Authorization: authToken },
  })
    .then(r => r.json())
    .then(user => ({
      user: user || null,
    }))

export const useUser = () => {
  const cookie = useCookie('auth-token')
  const authToken: string = cookie.has('auth-token')
    ? cookie.get('auth-token')
    : ''
  const { data, error } = useSWR<{ user: Object }>(
    '/api/authenticate',
    fetcher(authToken)
  )
  const user = data?.user

  return error ? null : user
}
