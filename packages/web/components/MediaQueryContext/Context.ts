import { createContext } from 'react'

export interface MediaQueryContext {
  darkMode: boolean
  prefersReducedMotion: boolean
  isMobile: boolean
}

export const MediaQueryContext = createContext<MediaQueryContext>({
  darkMode: false,
  prefersReducedMotion: false,
  isMobile: false,
})
