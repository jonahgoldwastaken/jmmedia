import { createContext } from 'react'

export interface MediaQueryContext {
  lightMode: boolean
  prefersReducedMotion: boolean
}

export const MediaQueryContext = createContext<MediaQueryContext>(null)
