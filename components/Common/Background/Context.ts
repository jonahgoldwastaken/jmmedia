import { createContext, Dispatch, SetStateAction } from 'react'

interface BackgroundContext {
  currentPage: string
  navOpen: boolean
  setNavOpen: Dispatch<SetStateAction<boolean>>
}

export const BackgroundContext = createContext<BackgroundContext>({
  currentPage: '/',
  navOpen: false,
  setNavOpen: undefined,
})
