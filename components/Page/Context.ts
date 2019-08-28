import { createContext } from 'react'

export const PageContext = createContext({
  isNavigating: false,
  setIsNavigating: (bool: boolean) => {},
})
