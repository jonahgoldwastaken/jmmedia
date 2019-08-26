import styled from 'styled-components'

export const HeroHeading = styled.p`
  position: relative;
  margin: 0;
  max-width: 80rem;
  font-family: 'Red Hat Display', sans-serif;
  text-align: center;
  font-size: 3rem;
  font-weight: 500;
  text-shadow: ${props => props.theme.textShadow};
  color: white;
  z-index: 2;
`
