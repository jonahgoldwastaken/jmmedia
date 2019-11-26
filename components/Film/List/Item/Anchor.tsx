import { forwardRef, HTMLProps } from 'react'
import { css, keyframes } from 'styled-components'
import { styled } from '../../../../theme'
import { SwipeInRight, SwipeOutRight } from '../../../Animations'
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
    width: 100%;
    height: 100vh;
  }
`

export const StyledAnchor = styled(Anchor)<StyledAnchorProps>`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${props => props.theme.fontSizes[1]};
  opacity: 0;

  &:after {
    opacity: 0;
    background: ${props => props.theme.pageColours[props.href]};
  }

  ${props =>
    props.loaded &&
    props.inView &&
    css`
      opacity: 1;
      animation: ${SwipeInRight}
        ${props =>
          `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`}
        forwards;
    `}

  ${props =>
    props.active
      ? css`
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
              animation: ${clickAnimationDesktop}
                ${props.theme.animation.timing[1]}
                ${props.theme.animation.curve}
                ${props.theme.animation.timing[1]} forwards;
              transition: opacity ${props.theme.animation.timing[1]}
                ${props.theme.animation.curve};
            }
          }
        `
      : css`
          .page-transition-exit-active & {
            animation: ${SwipeOutRight} ${props.theme.animation.timing[1]}
              ${props.theme.animation.curve} forwards;
          }
        `}
`

const RefAnchor = forwardRef<
  HTMLAnchorElement,
  StyledAnchorProps & HTMLProps<HTMLAnchorElement>
  //@ts-ignore
>((props, ref) => <StyledAnchor {...props} ref={ref} />)

export const ItemAnchor: React.FunctionComponent<ItemAnchorProps> = props => {
  return (
    <LinkWrapperContext.Consumer>
      {({ active, ref, positionData, href, setIsHovering }) => {
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
      }}
    </LinkWrapperContext.Consumer>
  )
}
