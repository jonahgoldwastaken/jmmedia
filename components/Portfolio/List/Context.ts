import { createContext, Dispatch, SetStateAction } from 'react'

export type ListContext = {
  currentFilter: string
  setFilter: Dispatch<SetStateAction<string>>
}

export const ListContext = createContext<ListContext>({
  currentFilter: 'all',
  setFilter: () => {},
})
