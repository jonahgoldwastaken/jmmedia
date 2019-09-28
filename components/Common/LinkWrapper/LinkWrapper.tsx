import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { LinkWrapperContext } from './Context'

export type ListLinkProps = {
  href: string
  disabled?: boolean
}

export const LinkWrapper: React.FunctionComponent<ListLinkProps> = ({
  href,
  disabled,
  children,
  ...props
}) => {
  const [isHovering, setIsHovering] = useState(false)
  const [active, setActive] = useState(false)
  const router = useRouter()
  const ref = useRef<HTMLLIElement>()

  const getPositionData = () => {
    if (ref.current) {
      const bounds = ref.current.getBoundingClientRect()

      return {
        x: bounds.left,
        y: bounds.top,
        width: bounds.width,
        height: bounds.height,
      }
    }
  }

  useEffect(() => {
    if (!disabled && !active && router.route === href) setActive(true)
  })

  return (
    <LinkWrapperContext.Provider
      value={{
        active,
        isHovering,
        setIsHovering,
        ref,
        setActive,
        disabled,
        positionData: getPositionData(),
        href,
      }}
    >
      {children}
    </LinkWrapperContext.Provider>
  )
}
