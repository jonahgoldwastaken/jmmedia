import styled from 'styled-components'

export interface HeadingProps {
  colour?: 'primary' | 'secondary'
  centre?: boolean
  noMargin?: boolean
}

export const BaseHeading = styled.h1<HeadingProps>`
  font-family: ${props => props.theme.fontFamilies.heading};
  letter-spacing: 0.03125em;
  line-height: 1em;
  text-transform: uppercase;
  margin: 0;
  &:not(:only-child) {
    margin: 0 0 ${props => props.theme.spacing[1]};

    @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
      margin: 0 0 ${props => props.theme.spacing[2]};
    }
  }
`
