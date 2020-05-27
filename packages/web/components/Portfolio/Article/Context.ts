import { createContext, Dispatch, SetStateAction } from 'react'

export type ArticleContext = {
  currentImage: {
    src: string
    alt?: string
  }
  setCurrentImage: Dispatch<SetStateAction<{ src: string; alt?: string }>>
  setDarkRoomOpen: Dispatch<SetStateAction<boolean>>
  darkRoomOpen: boolean
}

export const ArticleContext = createContext<ArticleContext>({
  currentImage: { src: '' },
  setCurrentImage: () => {},
  darkRoomOpen: false,
  setDarkRoomOpen: () => {},
})
