import { Component, createRef, MouseEvent, RefObject } from 'react'
import { css, keyframes } from 'styled-components'
import theme, { styled } from '../../../theme'
import { NavContext } from './Context'

type positionData = {
  x: number
  y: number
  width: number
  height: number
}

type StyledAnchorProps = {
  disabled?: boolean
  active?: boolean
  positionData: positionData
  pageColour: string
  ref: RefObject<HTMLAnchorElement>
  href?: string
}

type NavAnchorProps = {
  disabled?: boolean
  href?: string
  bgVideo: string
  pageColour: string
  onClick?: (e: MouseEvent<HTMLAnchorElement, MouseEvent>) => {}
}

type NavAnchorState = {
  active: boolean
  positionData: positionData
}

const clickAnimation = (props: any) => {
  return keyframes`
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
      background: ${props.pageColour};
    }
  `
}

const StyledAnchor = styled.a<StyledAnchorProps>`
  position: relative;
  display: inline-block;
  text-decoration: none;
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes[3]};
  font-weight: ${props => props.theme.fontWeights[1]};
  text-transform: uppercase;
  color: ${props =>
    props.disabled ? props.theme.colors.disabled : props.theme.colors.primary};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  text-align: center;
  z-index: 0;
  transition: all
    ${props =>
      `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`};

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0%;
    width: 0%;
    height: ${props => props.theme.borderWidth};
    background: ${props => props.theme.colors.primary};
    z-index: 9999;
    transition: all
      ${props =>
        `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`};

    ${props =>
      props.disabled &&
      css`
        bottom: 40%;
        background: ${props.theme.colors.disabled};
      `}
  }

  &:hover {
    &:after {
      width: 100%;
    }
  }

  .page-transition-exit & {
    opacity: 1;
  }

  .page-transition-exit-active & {
    ${props =>
      props.active
        ? css`
            &:after {
              position: fixed;
              animation: ${() => clickAnimation(props)}
                ${props.theme.animation.timing[2]}
                ${props.theme.animation.curve} forwards;
            }
          `
        : css`
            opacity: 0;
          `}
  }
`

export class NavAnchor extends Component<NavAnchorProps, NavAnchorState> {
  static contextType = NavContext
  anchorRef: RefObject<HTMLAnchorElement>

  constructor(props) {
    super(props)
    this.state = {
      active: false,
      positionData: undefined,
    }
    this.anchorRef = createRef<HTMLAnchorElement>()
  }

  clickHandler = (event: any) => {
    const { disabled, onClick: nextLinkClick } = this.props
    nextLinkClick(event)

    if (!disabled) {
      this.setState({
        positionData: {
          x: this.anchorRef.current.offsetLeft,
          y: this.anchorRef.current.offsetTop,
          width: this.anchorRef.current.offsetWidth,
          height: this.anchorRef.current.offsetHeight,
        },
        active: true,
      })
    }
  }

  togglePlayback = (bool: boolean) => () => {
    const { video, setMayPlayVideo, setVideo } = this.context
    const { bgVideo } = this.props

    if (video !== bgVideo) setVideo(bgVideo)
    setMayPlayVideo(bool)
  }

  componentDidUpdate() {
    const { href } = this.props
    const { active } = this.state
    const { activeLink } = this.context
    if (activeLink === href && !active) {
      this.anchorRef.current.click()
    }
  }

  render() {
    const { disabled, pageColour, children } = this.props
    const { positionData, active } = this.state

    return (
      <StyledAnchor
        ref={this.anchorRef}
        positionData={positionData}
        onClick={this.clickHandler}
        onMouseOver={this.togglePlayback(true)}
        onMouseOut={this.togglePlayback(false)}
        disabled={disabled}
        active={active}
        pageColour={pageColour}
      >
        {children}
      </StyledAnchor>
    )
  }
}
