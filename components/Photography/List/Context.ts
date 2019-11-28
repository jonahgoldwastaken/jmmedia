import { createContext } from 'react'
import Photo from '../../../interfaces/photo'

export interface ListContext {
  ref: React.RefObject<HTMLImageElement>
  currentIndex: number
  lightboxOpen: boolean
  lightboxAnimating: boolean
  photos: {
    large: Photo[]
    small: Photo[]
  }
}

export const ListContext = createContext<ListContext>({
  currentIndex: undefined,
  ref: undefined,
  lightboxOpen: false,
  lightboxAnimating: undefined,
  photos: undefined,
})
