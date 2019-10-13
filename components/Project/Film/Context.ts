import { createContext } from 'react'
import { filmState } from '../../../interfaces/filmState'

interface FilmContext {
  state: filmState
  setState: any
}

export const FilmContext = createContext<FilmContext>({
  state: 'unopened',
  setState: () => {},
})
