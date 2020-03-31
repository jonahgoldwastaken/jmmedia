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
  margin-bottom: ${props => props.theme.space[2]};
`
