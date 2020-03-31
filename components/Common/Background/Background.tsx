import { useRouter } from 'next/router'
import CookieConsent from 'react-cookie-consent'
import styled from 'styled-components'
import theme from '../../../theme'
import { disableGA, initGA } from '../../../utils/analytics'
import Header from '../Header'
import { BackgroundContext } from './Context'

type StyledBackgroundProps = {
  currentPage: string
}

type TransititonBackgroundProps = {
  currentPage: string
  route: string
}

type PageBackgroundProps = {
  currentPage: string
}

const StyledBackground = styled.div<StyledBackgroundProps>`
  background: ${props => props.theme.pageColours[props.currentPage]};
  min-height: 100vh;
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
`

export const Background: React.FunctionComponent<PageBackgroundProps> = props => {
  const { route } = useRouter()

  return (
    <BackgroundContext.Provider
      value={{
        currentPage: props.currentPage,
      }}
    >
      <Header />
      <StyledBackground {...props} />
      <TransititonBackground currentPage={props.currentPage} route={route} />
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
