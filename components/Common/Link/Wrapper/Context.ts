import {
  createContext,
  Dispatch,
  MutableRefObject,
  SetStateAction,
} from 'react'
import { positionData } from '../../../../interfaces/positionData'

interface LinkWrapperContext {
  isHovering: boolean
  setIsHovering: Dispatch<SetStateAction<boolean>>
  active: boolean
  setActive: Dispatch<SetStateAction<boolean>>
  disabled: boolean
  positionData: positionData | undefined
  ref: MutableRefObject<any> | undefined
  href: string
}

export const LinkWrapperContext = createContext<LinkWrapperContext>({
  isHovering: false,
  setIsHovering: () => {},
  active: false,
  setActive: () => {},
  disabled: false,
  positionData: undefined,
  ref: undefined,
  href: '',
})
