import fetch from 'isomorphic-unfetch'
import { Dispatch, SetStateAction, useState } from 'react'
import useSWR from 'swr'
import { Project } from '../interfaces/Project'

type returnValue = [null | Project, string, Dispatch<SetStateAction<string>>]

type useProjectHook = (initialFilter: string, slug: string) => returnValue

const fetcher = (filter: string) => (baseUrl: string) => {
  const url = `${baseUrl}${filter !== 'all' ? `?type=${filter}` : ``}`
  const flatUrl = url.split('\n').join('')
  return fetch(flatUrl)
    .then(r => r.json())
    .then(data => ({ project: data || null }))
}

export const useProject: useProjectHook = (
  initialFilter: string,
  slug: string
) => {
  const [filter, setFilter] = useState(initialFilter)

  const { data, error } = useSWR<{ project: Project }>(
    `${
      process?.env?.BASE_URL || window?.location?.origin
    }/api/projects/get/${slug}`,
    fetcher(filter)
  )
  const item = data?.project

  return [error ? null : item, filter, setFilter]
}
