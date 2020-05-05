import styled from 'styled-components'

export const Article = styled.article`
  padding: ${props =>
    `${props.theme.spacing[1]} ${props.theme.spacing[1]} calc(${props.theme.spacing[2]} * 1.5)`};
  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    padding: ${props =>
      `${props.theme.spacing[1]} ${props.theme.spacing[2]} 0`};
  }
`
