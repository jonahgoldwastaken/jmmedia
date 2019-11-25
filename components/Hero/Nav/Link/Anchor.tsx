import Link from 'next/link'
import { forwardRef, HTMLProps } from 'react'
import { css, keyframes } from 'styled-components'
import theme, { styled } from '../../../../theme'
import { LinkWrapperContext } from '../../../Common/Link'
import { Anchor, BaseAnchorProps } from '../../../Common/Link/Anchor'

type StyledAnchorProps = BaseAnchorProps & {
  disabled?: boolean
}

type NavAnchorProps = {
  disabled?: boolean
  onClick?: (e: any) => {}
}

const clickAnimationDesktop = (props: any) =>
  keyframes`
    0% {
      left: ${props.positionData.x}px;
      top: calc(${props.positionData.y + props.positionData.height}px - ${
    theme.borderWidth
  });
      width: ${props.positionData.width}px;
      height: ${props.theme.borderWidth};
      background: ${props.theme.colors.primary};

    }
    50% {
      left: ${props.positionData.x}px;
      top: ${props.positionData.y}px;
      width: ${props.positionData.width}px;
      height: ${props.positionData.height}px;
      background: ${props.pageColour};
    }
    100% {
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100vh;
      background: ${props.theme.pageColours[props.href]};
    }
  `

const clickAnimationMobile = (props: any) => keyframes`
  0% {
    opacity: 1;
    left: ${props.positionData.x}px;
    top: ${props.positionData.y + props.positionData.height}px;
    width: ${props.positionData.width}px;
    height: 0px;
    background: ${props.pageColour};
  }
  50% {
    opacity: 1;
    left: ${props.positionData.x}px;
    top: ${props.positionData.y}px;
    width: ${props.positionData.width}px;
    height: ${props.positionData.height}px;
    background: ${props.pageColour};
  }
  100% {
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100vh;
    background: ${props.theme.pageColours[props.href]};
  }
`

const enterAnimation = keyframes`
  0% {
    color: transparent;
  }
  50% {
    color: transparent;
  }
  51% {
    color: white;
  }
  100%  {
    color: white;
  }
`

const enterAfterAnimation = keyframes`
  0% {
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
  }
  50% {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  100% {
    top: 100%;
    left: 0;
    width: 100%;
    height: 0%;
  }
`

const StyledAnchor = styled(Anchor)<StyledAnchorProps>`
  position: relative;
  z-index: 2;
  font-size: ${props => props.theme.fontSizes[3]};

  &:after {
    position: absolute;
    bottom: 0%;
    width: 0%;
    height: ${props => props.theme.borderWidth};
    background: ${props => props.theme.colors.primary};
    z-index: 100;
    transition: width
      ${props =>
        `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`};
  }

  @media screen and (max-width: ${props => props.theme.breakpoints[2]}) {
    font-size: ${props => props.theme.fontSizes[2]};
    margin-bottom: ${props => props.theme.space[0]};

    &:after {
      height: calc(${props => props.theme.borderWidth} / 1.5);
    }
  }

  @media screen and (pointer: fine) {
    &:hover:after {
      width: 100%;
      box-shadow: ${props => props.theme.textShadow};
    }
  }

  ${props =>
    props.disabled &&
    css`
      color: ${props => props.theme.colors.disabled};
      cursor: not-allowed;

      &:after {
        bottom: 40%;
        background: ${props.theme.colors.disabled};
        box-shadow: none !important;
      }
    `}

  .page-transition-enter & {
    opacity: 0;
  }

  .page-transition-enter-active & {
    color: transparent;
    opacity: 1;
    animation: ${enterAnimation}
      ${props =>
        `${props.theme.animation.timing[1]} ${props.theme.animation.curve} ${props.theme.animation.timing[1]}`}
      forwards;
    &::after {
      animation: ${enterAfterAnimation}
        ${props =>
          `${props.theme.animation.timing[1]} ${props.theme.animation.curve} ${props.theme.animation.timing[1]}`}
        forwards;
    }
  }

  .page-transition-exit-active & {
    ${props =>
      props.active
        ? css`
            &:after {
              position: fixed;
              animation: ${clickAnimationDesktop}
                ${props.theme.animation.timing[2]}
                ${props.theme.animation.curve} forwards;

              @media screen and (pointer: coarse) {
                animation-name: ${clickAnimationMobile};
              }
            }
          `
        : css`
            opacity: 0;
            transition: opacity
              ${props =>
                `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`};
          `}
  }
`

const RefAnchor = forwardRef<
  HTMLAnchorElement,
  NavAnchorProps & HTMLProps<HTMLAnchorElement>
>(
  //@ts-ignore
  (props, ref) => <StyledAnchor {...props} ref={ref} />
)

export const NavAnchor: React.FunctionComponent<NavAnchorProps> = props => {
  return (
    <LinkWrapperContext.Consumer>
      {({ ref, href, active, disabled, positionData, setIsHovering }) => {
        const contextItems = {
          ref,
          href,
          active,
          disabled,
          positionData,
        }

        return (
          <Link href={href}>
            <RefAnchor
              onMouseOver={() => setIsHovering(true)}
              onMouseOut={() => setIsHovering(false)}
              {...contextItems}
              {...props}
            />
          </Link>
        )
      }}
    </LinkWrapperContext.Consumer>
  )
}
