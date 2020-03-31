import { forwardRef, HTMLProps, useContext } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { SwipeInRight } from '../../../Animations'
import { LinkWrapperContext } from '../../../Common/Link'
import { Anchor, BaseAnchorProps } from '../../../Common/Link/Anchor'

type StyledAnchorProps = BaseAnchorProps & {
  loaded: boolean
  inView?: boolean
}

type ItemAnchorProps = {
  loaded: boolean
  inView?: boolean
}

const clickAnimationDesktop = keyframes`
  to {
    left: 0px;
    top: 0px;
    width: 100vw;
    height: 100vh;
  }
`

export const StyledAnchor = styled(Anchor)<StyledAnchorProps>`
  display: grid;
  position: relative;
  min-width: 32rem;
  min-height: 18rem;
  margin-bottom: 2.5rem;
  z-index: 10;
  justify-content: center;
  align-items: center;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  font-size: ${props => props.theme.fontSizes[1]};
  opacity: 0;

  @media (pointer: fine) {
  }

  &:after {
    content: '';
    opacity: 0;
    background: ${props => props.theme.pageColours[props.href]};
  }

  ${props =>
    props.loaded &&
    props.inView &&
    css`
      opacity: 1;
      animation: ${SwipeInRight} ${props.theme.animation.timing[2]}
        ${props.theme.animation.curve} forwards;
    `}

  ${props =>
    props.active &&
    css`
      .page-transition-exit & {
        position: static;
        animation: none;
      }

      .page-transition-exit-active & {
        &:after {
          position: fixed;
          z-index: 99;
          opacity: 1;
          left: ${props.positionData.x}px;
          top: ${props.positionData.y}px;
          width: ${props.positionData.width}px;
          height: ${props.positionData.height}px;
          display: block;
          animation: ${clickAnimationDesktop} ${props.theme.animation.timing[1]}
            ${props.theme.animation.curve} ${props.theme.animation.timing[1]}
            forwards;
          transition: opacity ${props.theme.animation.timing[1]}
            ${props.theme.animation.curve};
        }
      }
    `}
`

const RefAnchor = forwardRef<
  HTMLAnchorElement,
  StyledAnchorProps & HTMLProps<HTMLAnchorElement>
  //@ts-ignore
>((props, ref) => <StyledAnchor {...props} ref={ref} />)

export const ItemAnchor: React.FunctionComponent<ItemAnchorProps> = props => {
  const { active, ref, positionData, href, setIsHovering } = useContext(
    LinkWrapperContext
  )
  const contextItems = {
    active,
    ref,
    positionData,
    href,
  }

  return (
    <RefAnchor
      onMouseOverCapture={() => setIsHovering(true)}
      onMouseOutCapture={() => setIsHovering(false)}
      {...contextItems}
      {...props}
    />
  )
}
