import { createContext } from 'react'

export const NavContext = createContext({
  video: '',
  setVideo: (video: string) => {},
  mayPlayVideo: false,
  setMayPLayVideo: (bool: boolean) => {},
})
