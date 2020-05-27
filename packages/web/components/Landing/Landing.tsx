import styled from 'styled-components'

export const Landing = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.theme.heights[2]};
  padding: ${props => props.theme.spacing[1]};

  > * {
    margin: 0;
  }
`
