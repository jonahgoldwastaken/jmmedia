import { styled } from '../../../theme'
import { CurtainOpenHorizontal, CurtainCloseHorizontal } from '../../Animations'
import { css } from 'styled-components'
import { EmbedContext } from './Context'
import { rgba } from 'polished'

type EmbedContainerProps = {
  embedState: 'unopened' | 'open' | 'closed'
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
            ${props.theme.animation.timing[1]} forwards;
        `}
`

export const EmbedContainer: React.FunctionComponent<
  EmbedContainerProps
> = props => (
  <EmbedContext.Provider value={{ embedState: props.embedState }}>
    <StyledContainer {...props} />{' '}
  </EmbedContext.Provider>
)
