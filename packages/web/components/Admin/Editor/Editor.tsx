import styled from 'styled-components'

export const Editor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${props => props.theme.colours.tertiary};
  display: flex;
  align-items: flex-start;
`
