import { styled } from '../../theme'

const StyledList = styled.ul`
  margin: 0 auto;
  padding: 0;
  width: ${props => props.theme.sizes.dynamic[2]};
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: ${props => props.theme.sizes.static[0]};
  grid-auto-flow: row dense;

  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    grid-template-columns: repeat(6, 1fr);
  }
`

export const List: React.FunctionComponent = props => <StyledList {...props} />
