import { styled } from '../../../theme'

const StyledNav = styled.nav`
  background: ${props => props.theme.colors.tertiary};
  z-index: 99;
  width: ${props => props.theme.sizes.dynamic[2]};

  ul {
    max-width: ${props => props.theme.sizes.static[2]};
    width: ${props => props.theme.sizes.dynamic[2]};
    display: flex;
    justify-content: center;
    margin: 0 auto;
    padding: 0;
    list-style-type: none;
  }

  li {
    flex: 1;
    text-align: center;
  }
`

export const HeaderNav: React.FunctionComponent = ({ children }) => {
  return (
    <StyledNav>
      <ul>{children}</ul>
    </StyledNav>
  )
}
