import { createContext, Dispatch, SetStateAction } from 'react'

export type ListContext = {
  currentFilter: 'all' | 'photography' | 'film'
  setFilter: Dispatch<SetStateAction<'all' | 'photography' | 'film'>>
}

export const ListContext = createContext<ListContext>({
  currentFilter: 'all',
  setFilter: () => {},
})
