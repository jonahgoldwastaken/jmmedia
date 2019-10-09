import { createContext } from 'react'

interface BackgroundContext {
  currentPage: string
}

export const BackgroundContext = createContext<BackgroundContext>({
  currentPage: '/',
})
