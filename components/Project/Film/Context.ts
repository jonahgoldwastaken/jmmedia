import { createContext } from 'react'

interface FilmContext {
  state: 'unopened' | 'open' | 'closed'
  setState: any
}

export const FilmContext = createContext<FilmContext>({
  state: 'unopened',
  setState: () => {},
})
