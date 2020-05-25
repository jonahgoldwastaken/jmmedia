import { createContext, Dispatch, SetStateAction } from 'react'

export type ProjectListContext = {
  currentFilter: string
  setFilter: Dispatch<SetStateAction<string>>
}

export const ProjectListContext = createContext<ProjectListContext>({
  currentFilter: 'all',
  setFilter: () => {},
})
