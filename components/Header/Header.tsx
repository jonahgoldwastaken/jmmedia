import styled from 'styled-components'

export const Header = styled.header`
  background: ${props => props.theme.colours.tertiary};
  padding: ${props => props.theme.spacing[1]};
  position: relative;
  display: flex;
  align-items: center;
`
