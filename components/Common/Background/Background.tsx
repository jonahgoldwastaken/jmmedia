import { useRouter } from 'next/router'
import { useState } from 'react'
import CookieConsent from 'react-cookie-consent'
import { css } from 'styled-components'
import theme, { styled } from '../../../theme'
import { disableGA, initGA } from '../../../utils/analytics'
import animationChooser from '../../../utils/animationChooser'
import { SwipeOutDown, SwipeOutRight } from '../../Animations'
import Nav, { NavButton } from '../Nav'
import { BackgroundContext } from './Context'

type StyledBackgroundProps = {
  currentPage: string
  route: string
  navOpen: boolean
}

type TransititonBackgroundProps = {
  route: string
  navOpen: boolean
}

type PageBackgroundProps = {
  currentPage: string
}

const closeAnimations = [SwipeOutDown, SwipeOutRight]

const StyledBackground = styled.div<StyledBackgroundProps>`
  position: fixed;
  overflow-y: scroll;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: ${props => props.theme.sizes.dynamic[2]};
  height: ${props => props.theme.sizes.dynamic[2]};
  background: ${props => props.theme.pageColours[props.currentPage]};
  z-index: 2;
  transition: height
      ${props =>
        `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`},
    top
      ${props =>
        `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`};
  will-change: height, top;

  ${props =>
    props.navOpen &&
    css`
      top: ${props.theme.sizes.static[0]};
      height: calc(
        ${props.theme.sizes.dynamic[2]} - ${props.theme.sizes.static[0]}
      );
    `}

  .page-transition-exit-active & {
    ${props =>
      (props.route === '/' ||
        (props.currentPage !== '/' && props.route === '/films') ||
        (props.currentPage !== '/' && props.route === '/fotografie') ||
        (props.currentPage !== '/' && props.route === '/over')) &&
      css`
        animation: ${animationChooser(closeAnimations)}
          ${props =>
            `${props.theme.animation.timing[1]} ${props.theme.animation.curve} ${props.theme.animation.timing[1]}`}
          forwards;
        transform-origin: center;
      `}
  }
`

const TransititonBackground = styled.div<TransititonBackgroundProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  background: ${props => props.theme.pageColours[props.route]};
`

export const Background: React.FunctionComponent<PageBackgroundProps> = props => {
  const { route } = useRouter()
  const [navOpen, setNavOpen] = useState(false)
  const [showNavButton, setShowNavButton] = useState(true)

  return (
    <BackgroundContext.Provider
      value={{
        currentPage: props.currentPage,
        setNavOpen,
        navOpen,
        setShowNavButton,
      }}
    >
      {props.currentPage !== '/' && (
        <>
          {showNavButton && <NavButton />}
          <Nav />
        </>
      )}
      <StyledBackground {...props} navOpen={navOpen} route={route} />
      <TransititonBackground navOpen={navOpen} route={route} />
      <CookieConsent
        buttonText="Jazeker!"
        declineButtonText="Nee bedankt"
        enableDeclineButton
        declineButtonStyle={{
          background: '#b53333',
          fontFamily: theme.fonts.display,
        }}
        buttonStyle={{
          color: '#fff',
          background: '#33b533',
          fontFamily: theme.fonts.display,
          fontWeight: 'bold',
        }}
        style={{
          background: '#505050',
          fontFamily: theme.fonts.sans,
          fontWeight: 'bold',
        }}
        onAccept={() => initGA()}
        onDecline={() => disableGA()}
      >
        Wij gebruiken cookies om deze website nog vetter te maken. Help je mee?
      </CookieConsent>
    </BackgroundContext.Provider>
  )
}
