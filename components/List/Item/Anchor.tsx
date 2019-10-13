import { forwardRef, HTMLProps, Ref } from 'react'
import { css, keyframes } from 'styled-components'
import { positionData } from '../../../interfaces/positionData'
import { styled } from '../../../theme'
import animationChooser from '../../../utils/animationChooser'
import {
  CurtainCloseHorizontal,
  CurtainCloseVertical,
  CurtainOpenHorizontal,
  CurtainOpenVertical,
} from '../../Animations'
import { LinkWrapperContext } from '../../Common/LinkWrapper'
import { rgba } from 'polished'

type StyledAnchorProps = {
  active: boolean
  positionData: positionData
  href: string
  ref: Ref<HTMLAnchorElement>
  background: string
}

const openAnimations = [CurtainOpenHorizontal, CurtainOpenVertical]
const closeAnimations = [CurtainCloseHorizontal, CurtainCloseVertical]
const clickAnimationDesktop = keyframes`
    to {
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100vh;
    }
`

export const StyledAnchor = styled.a<StyledAnchorProps>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  background: linear-gradient(${rgba('black', 0.5)}, ${rgba('black', 0.5)}),
    url(${props => props.background}) no-repeat center/cover;

  &:after {
    content: '';
    opacity: 0;
    background: ${props => props.theme.pageColours[props.href]};
  }

  ${props =>
    props.active
      ? css`
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
          .page-transition-enter & {
            opacity: 0;
          }

          .page-transition-enter-active & {
            opacity: 1;
            animation: ${animationChooser(openAnimations)}
              ${props =>
                `${props.theme.animation.timing[0]} ${props.theme.animation.curve}`}
              forwards;
          }

          .page-transition-exit-active & {
            animation: ${animationChooser(closeAnimations)}
              ${props.theme.animation.timing[0]} ${props.theme.animation.curve}
              forwards;
          }
        `}
`

const RefAnchor = forwardRef<
  HTMLAnchorElement,
  StyledAnchorProps & HTMLProps<HTMLAnchorElement>
  //@ts-ignore
>((props, ref) => <StyledAnchor {...props} ref={ref} />)

export const ItemAnchor: React.FunctionComponent<{
  background: string
}> = props => {
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
