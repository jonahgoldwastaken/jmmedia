import fetch from 'isomorphic-unfetch'
import { Dispatch, SetStateAction, useState } from 'react'
import useSWR from 'swr'
import { Project } from '../interfaces/Project'

type Props = string

type returnValue = [null | Project[], string, Dispatch<SetStateAction<string>>]

type useProjectsHook = (props: Props) => returnValue

const fetcher = (filter: Props) => (baseUrl: string) => {
  const url = `${baseUrl}${filter !== 'all' ? `?type=${filter}` : ``}`
  const flatUrl = url.split('\n').join('')
  return fetch(flatUrl)
    .then(r => r.json())
    .then(data => ({ projects: data || null }))
}

export const useProjects: useProjectsHook = (initialFilter: Props) => {
  const [filter, setFilter] = useState(initialFilter)

  const { data, error } = useSWR<{ projects: Project[] }>(
    (process?.env?.BASE_URL || window?.location?.origin) + '/api/projects/get',
    fetcher(filter)
  )
  const items = data?.projects

  return [error ? null : items, filter, setFilter]
}
