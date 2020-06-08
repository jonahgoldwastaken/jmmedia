import { createContext } from 'react'

export interface MediaQueryContext {
  darkMode: boolean
  lightMode: boolean
  prefersReducedMotion: boolean
}

export const MediaQueryContext = createContext<MediaQueryContext>({
  darkMode: false,
  lightMode: false,
  prefersReducedMotion: false,
})
