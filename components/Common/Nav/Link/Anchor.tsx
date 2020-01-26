import Link from 'next/link'
import { forwardRef, HTMLProps, useContext } from 'react'
import { css, keyframes } from 'styled-components'
import theme, { styled } from '../../../../theme'
import { BackgroundContext } from '../../Background'
import { LinkWrapperContext } from '../../Link'
import { Anchor, BaseAnchorProps } from '../../Link/Anchor'
import { RotateInDown } from '../../../Animations'

type StyledAnchorProps = BaseAnchorProps & {
  disabled?: boolean
  currentPage?: string
  current?: boolean
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
      background: ${props.theme.colours.primary};

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

const StyledAnchor = styled(Anchor)<StyledAnchorProps>`
  position: relative;
  z-index: 2;
  font-size: ${props => props.theme.fontSizes[3]};

  &:after {
    position: absolute;
    bottom: 0%;
    width: 0%;
    height: ${props => props.theme.borderWidth};
    background: ${props => props.theme.colours.lightText};
    z-index: 10000;
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
      color: ${props => props.theme.colours.disabled};
      cursor: not-allowed;

      &:after {
        bottom: 40%;
        background: ${props.theme.colours.disabled};
        box-shadow: none !important;
      }
    `}

  ${props =>
    props.current &&
    css`
      font-weight: ${props => props.theme.fontWeights[2]};
      cursor: default;
      &:after {
        width: 100%;
      }
    `}

  .page-transition-enter & {
    opacity: 0;
  }

  .page-transition-enter-active & {
    animation: ${RotateInDown}
      ${props =>
        `${props.theme.animation.timing[1]} ${props.theme.animation.curve} ${props.theme.animation.timing[1]}`}
      forwards;
  }

  ${props =>
    props.currentPage === '/' &&
    css`
      .page-transition-exit-active & {
        ${props.active
          ? css`
              &:after {
                box-shadow: none;
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
              transition: opacity ${props.theme.animation.timing[0]}
                ${props.theme.animation.curve};
            `}
      }
    `}
`

const RefAnchor = forwardRef<
  HTMLAnchorElement,
  StyledAnchorProps & HTMLProps<HTMLAnchorElement>
>(({ onClick, ...props }, ref) => {
  const { setNavOpen } = useContext(BackgroundContext)
  return (
    //@ts-ignore
    <StyledAnchor
      {...props}
      onClick={e => {
        setNavOpen(false)
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
