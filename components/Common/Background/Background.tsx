import { useRouter } from 'next/router'
import { useState } from 'react'
import CookieConsent from 'react-cookie-consent'
import { css } from 'styled-components'
import theme, { styled } from '../../../theme'
import { disableGA, initGA } from '../../../utils/analytics'
import { SwipeInRight } from '../../Animations'
import Nav, { NavButton } from '../Nav'
import { BackgroundContext } from './Context'

type StyledBackgroundProps = {
  currentPage: string
}

type TransititonBackgroundProps = {
  currentPage: string
  route: string
  navOpen: boolean
}

type PageBackgroundProps = {
  currentPage: string
}

const StyledBackground = styled.div<StyledBackgroundProps>`
  overflow-x: hidden;
  background: ${props => props.theme.pageColours[props.currentPage]};
`

const TransititonBackground = styled.div<TransititonBackgroundProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 998;
  clip-path: inset(0 100% 0 0);
  pointer-events: none;
  background: ${props => props.theme.pageColours[props.route]};

  ${props =>
    (props.route === '/' ||
      (props.currentPage !== '/' && props.route === '/films') ||
      (props.currentPage !== '/' && props.route === '/fotografie') ||
      (props.currentPage !== '/' && props.route === '/over')) &&
    css`
      .page-transition-exit-active & {
        animation: ${SwipeInRight} ${props.theme.animation.timing[1]}
          ${props.theme.animation.curve} ${props.theme.animation.timing[1]}
          forwards;
        transform-origin: center;
      }
    `}
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
      <StyledBackground {...props} />
      <TransititonBackground
        currentPage={props.currentPage}
        navOpen={navOpen}
        route={route}
      />
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
