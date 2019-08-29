import Link from 'next/link'
import { useState } from 'react'
import { css, keyframes } from 'styled-components'
import theme, { styled } from '../../../theme'
import { NavContext } from './NavContext'

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
}

type NavAnchorProps = {
  disabled?: boolean
  href: string
  bgVideo: string
  pageColour: string
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

export const NavAnchor: React.FunctionComponent<NavAnchorProps> = ({
  href,
  bgVideo,
  pageColour,
  disabled,
  children,
}) => {
  const [active, setActive] = useState(false)
  const [positionData, setPositionData] = useState()

  const clickHandler = (e: any) => {
    if (!disabled) {
      setPositionData({
        x: e.currentTarget.offsetLeft,
        y: e.currentTarget.offsetTop,
        width: e.currentTarget.offsetWidth,
        height: e.currentTarget.offsetHeight,
      })
      setActive(true)
    }
  }

  return (
    <>
      <NavContext.Consumer>
        {({ video, setVideo, setMayPLayVideo }) => {
          const togglePlayback = (bool: boolean) => () => {
            if (video !== bgVideo) setVideo(bgVideo)
            setMayPLayVideo(bool)
          }
          return (
            <>
              <Link href={href}>
                <StyledAnchor
                  positionData={positionData}
                  onClick={clickHandler}
                  onMouseOver={togglePlayback(true)}
                  onMouseOut={togglePlayback(false)}
                  disabled={disabled}
                  active={active}
                  pageColour={pageColour}
                >
                  {children}
                </StyledAnchor>
              </Link>
            </>
          )
        }}
      </NavContext.Consumer>
    </>
  )
}
