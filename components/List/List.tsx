import styled from 'styled-components'
import { ListContainer } from './Container'
import { ListHeading } from './Heading'

type ListProps = {
  heading: string
}

const StyledList = styled.ul`
  padding: 0;
  margin: 3rem auto;
  list-style-type: none;
  max-width: 80rem;
  width: 100%;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 20rem;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
  li {
    color: white;
  }
`

export const List: React.FunctionComponent<ListProps> = ({
  heading,
  children,
}) => (
  <ListContainer>
    <ListHeading>{heading}</ListHeading>
    <StyledList>{children}</StyledList>
  </ListContainer>
)
