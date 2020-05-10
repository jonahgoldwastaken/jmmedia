import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    max-width: ${props => props.theme.widths[1]};
    margin: 0 auto;
  }
`
