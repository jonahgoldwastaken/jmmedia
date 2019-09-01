import { createContext } from 'react'

type NavContextType = {
  activeLink: string
}

export const NavContext = createContext<NavContextType>({
  activeLink: '',
})
