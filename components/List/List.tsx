import styled from 'styled-components'
import { ListContainer } from './Container'
import { ListHeading } from './Heading'

type ListProps = {
  heading: string
}

const StyledList = styled.ul`
  padding: 0;
  margin: ${props => props.theme.space[2]} 0 0;
  width: 100%;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 20rem;
  grid-column-gap: ${props => props.theme.space[1]};
  grid-row-gap: ${props => props.theme.space[1]};
  list-style-type: none;
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
