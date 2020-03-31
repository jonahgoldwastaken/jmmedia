import styled from 'styled-components'
import { HeaderHeading } from './Heading'
import Nav from './Nav'

const StyledHeader = styled.header`
  position: relative;
  padding: ${props => props.theme.space[3]} ${props => props.theme.space[5]};
  width: ${props => props.theme.sizes.dynamic[2]};
  background: ${props => props.theme.colours.primary};
  display: flex;
  justify-content: space-between;
`

export const Header: React.FunctionComponent = () => {
  return (
    <StyledHeader>
      <HeaderHeading>JM</HeaderHeading>
      <Nav />
    </StyledHeader>
  )
}
