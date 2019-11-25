import {
  createContext,
  Dispatch,
  SetStateAction,
  RefObject,
  MutableRefObject,
} from 'react'
import Photo from '../../../interfaces/photo'

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
