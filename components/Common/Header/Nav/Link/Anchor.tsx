import Link from 'next/link'
import { forwardRef, HTMLProps, useContext } from 'react'
import styled, { css } from 'styled-components'
import { BackgroundContext } from '../../../Background'
import { LinkWrapperContext } from '../../../Link'
import { Anchor, BaseAnchorProps } from '../../../Link/Anchor'

type StyledAnchorProps = BaseAnchorProps & {
  disabled?: boolean
  currentPage?: string
  current?: boolean
}

type NavAnchorProps = {
  disabled?: boolean
  onClick?: (e: any) => {}
}

const StyledAnchor = styled(Anchor)<StyledAnchorProps>`
  position: relative;
  margin-left: ${props => props.theme.space[5]};
  z-index: 2;
  font-family: ${props => props.theme.fonts.display};
  font-weight: ${props => props.theme.fontWeights[0]};
  font-size: ${props => props.theme.fontSizes[4]};

  @media screen and (max-width: ${props => props.theme.breakpoints[2]}) {
    font-size: ${props => props.theme.fontSizes[2]};
    margin-bottom: ${props => props.theme.space[0]};
  }

  ${props =>
    props.disabled &&
    css`
      color: ${props => props.theme.colours.disabled};
      cursor: not-allowed;
    `}

  ${props =>
    props.current &&
    css`
      font-weight: ${props => props.theme.fontWeights[2]};
      cursor: default;
    `}
`

const RefAnchor = forwardRef<
  HTMLAnchorElement,
  StyledAnchorProps & HTMLProps<HTMLAnchorElement>
>(({ onClick, ...props }, ref) => {
  return (
    //@ts-ignore
    <StyledAnchor
      {...props}
      onClick={e => {
        onClick && onClick(e)
      }}
      ref={ref}
    />
  )
})

export const NavAnchor: React.FunctionComponent<NavAnchorProps> = props => {
  const {
    ref,
    href,
    active,
    disabled,
    positionData,
    setIsHovering,
  } = useContext(LinkWrapperContext)
  const { currentPage } = useContext(BackgroundContext)
  const contextItems = {
    ref,
    active,
    positionData,
    currentPage,
  }

  return (
    <>
      {currentPage === href ? (
        <RefAnchor
          onMouseOver={() => setIsHovering(true)}
          onMouseOut={() => setIsHovering(false)}
          href={undefined}
          current
          {...contextItems}
          {...props}
          active={false}
        />
      ) : (
        <Link href={href}>
          <RefAnchor
            onMouseOver={() => setIsHovering(true)}
            onMouseOut={() => setIsHovering(false)}
            {...contextItems}
            {...props}
            href={href}
            disabled={disabled}
          />
        </Link>
      )}
    </>
  )
}
