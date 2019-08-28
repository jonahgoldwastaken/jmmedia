import theme, { styled } from '../../../theme'
import { css, keyframes } from 'styled-components'
import { NavContext } from './NavContext'
import { useRouter } from 'next/router'
import { useState, useRef, useContext } from 'react'
import { PageContext } from '../../Page'
import navigate from '../../../utils/navigate'

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
  isNavigating: boolean
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
      height: ${theme.borderWidth};
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

  ${props =>
    props.isNavigating &&
    !props.active &&
    css`
      opacity: 0;
    `}

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

    ${props =>
      props.active &&
      css`
        position: fixed;
        animation: ${clickAnimation} ${props.theme.animation.timing[2]}
          ${props.theme.animation.curve} forwards;
      `}
  }

  &:hover {
    &:after {
      width: 100%;
    }
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
  const anchorRef: React.MutableRefObject<HTMLAnchorElement> = useRef()
  const { setIsNavigating } = useContext(PageContext)
  const router = useRouter()

  const clickHandler = () => {
    if (!disabled) {
      setPositionData({
        x: anchorRef.current.offsetLeft,
        y: anchorRef.current.offsetTop,
        width: anchorRef.current.offsetWidth,
        height: anchorRef.current.offsetHeight,
      })
      setActive(true)
      setIsNavigating(true)
      navigate(`${href}`, 600)
    }
  }

  return (
    <PageContext.Consumer>
      {({ isNavigating }) => (
        <NavContext.Consumer>
          {({ video, setVideo, setMayPLayVideo }) => {
            const togglePlayback = (bool: boolean) => () => {
              if (video !== bgVideo) setVideo(bgVideo)
              setMayPLayVideo(bool)
            }
            return (
              <StyledAnchor
                ref={anchorRef}
                positionData={positionData}
                onClick={clickHandler}
                onMouseOver={togglePlayback(true)}
                onMouseOut={togglePlayback(false)}
                disabled={disabled}
                active={active}
                pageColour={pageColour}
                isNavigating={isNavigating}
              >
                {children}
              </StyledAnchor>
            )
          }}
        </NavContext.Consumer>
      )}
    </PageContext.Consumer>
  )
}
