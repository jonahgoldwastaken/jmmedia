import { css } from 'styled-components'
import styled from 'styled-components'

type SectionImageProps = {
  last?: boolean
  first?: boolean
}

export const SectionImage = styled.img<SectionImageProps>`
  display: block;
  width: ${props => props.theme.sizes.dynamic[2]};
  height: ${props => props.theme.sizes.dynamic[2]};
  object-fit: contain;
  object-position: center;

  @media screen and (max-width: ${props => props.theme.breakpoints[0]}) {
    ${props =>
      props.first &&
      css`
        margin-bottom: ${props => props.theme.space[2]};
      `}
    ${props =>
      props.last &&
      css`
        margin-top: ${props => props.theme.space[2]};
      `}
  }
`
