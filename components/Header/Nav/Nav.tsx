import styled from 'styled-components'

const StyledNav = styled.nav`
  max-width: 80rem;
  width: 100%;

  ul {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  li {
    flex: 1;
    text-align: center;

    &:not(:last-child) {
      padding-right: 0.5em;
    }

    &:not(:first-child) {
      padding-left: 0.5em;
    }
  }
`

export const HeaderNav: React.FunctionComponent = ({ children }) => (
  <StyledNav>
    <ul>{children}</ul>
  </StyledNav>
)
