import { ListContainer } from './Container'
import { ListHeading } from './Heading'
import { styled } from '../../theme'

type ListProps = {}

const StyledList = styled.ul`
  padding: 0;
  margin: ${props => props.theme.space[2]} 0 0;
  width: ${props => props.theme.sizes.dynamic[2]};
  flex: 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: ${props => props.theme.sizes.static[0]};
  grid-column-gap: ${props => props.theme.space[1]};
  grid-row-gap: ${props => props.theme.space[1]};
  list-style-type: none;
`

export const List: React.FunctionComponent<ListProps> = ({ children }) => (
  <ListContainer>
    {/* <ListHeading>{heading}</ListHeading> */}
    <StyledList>{children}</StyledList>
  </ListContainer>
)
