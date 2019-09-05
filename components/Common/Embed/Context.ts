import { createContext } from 'react'

interface EmbedContext {
  embedState: 'closed' | 'open' | 'unopened'
}

export const EmbedContext = createContext<EmbedContext>({
  embedState: 'unopened',
})
