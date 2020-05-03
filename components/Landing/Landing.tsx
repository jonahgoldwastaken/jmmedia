import styled from 'styled-components'

export const Landing = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.theme.heights[2]};
  > * {
    margin: 0;
  }
`
