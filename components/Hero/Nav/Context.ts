import { createContext } from 'react'

type NavContextType = {
  video: string
  setVideo: (video: string) => void
  mayPlayVideo: boolean
  setMayPlayVideo: (bool: boolean) => void
  activeLink: string
}

export const NavContext = createContext<NavContextType>({
  video: '',
  setVideo: (video: string) => {},
  mayPlayVideo: false,
  setMayPlayVideo: (bool: boolean) => {},
  activeLink: '',
})
