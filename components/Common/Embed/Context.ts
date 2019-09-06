import { createContext } from 'react'
import { EmbedState } from './Container'

interface EmbedContext {
  embedState: EmbedState
}

export const EmbedContext = createContext<EmbedContext>({
  embedState: 'unopened',
})
