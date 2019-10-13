import { styled } from '../../theme'

export const FooterList = styled.ul`
  list-style: none;
  margin: ${props => props.theme.space[3]} auto 0;
  padding: 0;
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: ${props => props.theme.space[3]};
  grid-column-gap: ${props => props.theme.space[3]};
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    grid-template-columns: repeat(2, auto);
  }
`
