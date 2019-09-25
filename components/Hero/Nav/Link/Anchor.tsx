import { NextRouter, withRouter } from 'next/router'
import { Component, createRef, MouseEvent, RefObject } from 'react'
import { css, keyframes } from 'styled-components'
import theme, { styled } from '../../../../theme'

export type positionData = {
  x: number
  y: number
  width: number
  height: number
}

type StyledAnchorProps = {
  disabled?: boolean
  active?: boolean
  positionData: positionData
  ref: RefObject<HTMLAnchorElement>
  href: string
}

type NavAnchorProps = {
  disabled?: boolean
  href: string
  onClick?: (e: any) => {}
  hoverHandler: any
  router?: NextRouter
}

type NavAnchorState = {
  active: boolean
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
      opacity: 0;
      left: ${props.positionData.x}px;
      top: ${props.positionData.y}px;
      width: ${props.positionData.width}px;
      height: ${props.positionData.height}px;
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

const StyledAnchor = styled.a<StyledAnchorProps>`
  position: relative;
  z-index: 2;
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes[3]};
  font-weight: ${props => props.theme.fontWeights[1]};
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;

  &:after {
    content: '';
    display: block;
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
    &:hover {
      text-shadow: ${props => props.theme.textShadow};

      &:after {
        width: 100%;
        box-shadow: ${props => props.theme.textShadow};
      }
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

class NavAnchorWithoutRouter extends Component<NavAnchorProps, NavAnchorState> {
  anchorRef: RefObject<HTMLAnchorElement>

  get positionData(): positionData {
    if (this.anchorRef.current) {
      const bounds = this.anchorRef.current.getBoundingClientRect()

      return {
        x: bounds.left,
        y: bounds.top,
        width: bounds.width,
        height: bounds.height,
      }
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
    this.anchorRef = createRef<HTMLAnchorElement>()
  }

  componentDidUpdate() {
    const { href, router, disabled } = this.props
    const { active } = this.state
    if (!disabled && router.route === href && !active) {
      this.setState({
        active: true,
      })
    }
  }

  render() {
    const { children, hoverHandler } = this.props

    return (
      <StyledAnchor
        ref={this.anchorRef}
        onMouseOver={() => hoverHandler(true)}
        onMouseOut={() => hoverHandler(false)}
        positionData={this.positionData}
        {...this.props}
        {...this.state}
      >
        {children}
      </StyledAnchor>
    )
  }
}
export const NavAnchor = withRouter(NavAnchorWithoutRouter)
