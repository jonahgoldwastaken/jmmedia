import styled from 'styled-components'

export const Heading = styled.h1`
  margin: 0 0 ${props => props.theme.space[3]};
  font-family: ${props => props.theme.fonts.display};
  font-size: ${props => props.theme.fontSizes[3]};
  color: ${props => props.theme.colours.lightText};
  text-align: center;

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    font-size: ${props => props.theme.fontSizes[5]};
  }
`
