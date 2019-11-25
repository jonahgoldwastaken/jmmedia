import { createContext } from 'react'

export interface ListContext {
  ref: React.RefObject<HTMLImageElement>
  currentIndex: number
  lightboxOpen: boolean
  setState: any
  lightboxAnimating: boolean
}

export const ListContext = createContext<ListContext>({
  currentIndex: undefined,
  ref: undefined,
  lightboxOpen: false,
  setState: undefined,
  lightboxAnimating: undefined,
})
