import { useRouter } from 'next/router'
import { rgba } from 'polished'
import { useState } from 'react'
import { css } from 'styled-components'
import { styled } from '../../../theme'
import { CurtainCloseHorizontal, CurtainOpenHorizontal } from '../../Animations'
import { EmbedCloseButton } from './CloseButton'
import { EmbedContext } from './Context'

export type EmbedState = 'open' | 'closed' | 'unopened'

type EmbedContainerProps = {
  embedState: EmbedState
}

export const StyledContainer = styled.div<EmbedContainerProps>`
  position: fixed;
  top: 0%;
  left: 50%;
  width: 0%;
  height: 100vh;
  z-index: 9999;
  background: ${props => rgba(props.theme.colors.secondary, 0.8)};
  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    props.embedState === 'open'
      ? css`
          animation: ${CurtainOpenHorizontal} ${props.theme.animation.timing[1]}
            ${props.theme.animation.curve} forwards;
        `
      : props.embedState === 'closed' &&
        css`
          left: 0%;
          width: 100%;
          animation: ${CurtainCloseHorizontal}
            ${props.theme.animation.timing[1]} ${props.theme.animation.curve}
            forwards;
        `}

  ${props =>
    (props.embedState === 'closed' || props.embedState === 'unopened') &&
    css`
      @media speech {
        display: none;
      }
    `}
`

export const EmbedContainer: React.FunctionComponent = ({
  children,
  ...props
}) => {
  const [embedState, setEmbedState] = useState<EmbedState>('unopened')
  if (typeof window !== 'undefined') {
    const router = useRouter()

    router.beforePopState(() => {
      if (embedState === 'open') setEmbedState('closed')
      router.beforePopState(() => true)
      return true
    })
  }

  return (
    <EmbedContext.Provider value={{ embedState: embedState }}>
      <StyledContainer embedState={embedState} {...props}>
        <EmbedCloseButton onClick={() => setEmbedState('closed')} />
        {children}
      </StyledContainer>
    </EmbedContext.Provider>
  )
}
