import styled from 'styled-components'
import List from '../../Common/List'

export const FilmList = styled(List)`
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
