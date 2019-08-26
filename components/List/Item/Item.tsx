import styled, { css } from 'styled-components'

type ItemProps = {
  large?: boolean
  highlight?: boolean
}

export const StyledItem = styled.li<ItemProps>`
  position: relative;
  overflow: hidden;
  grid-row: span 1;
  grid-column: span 1;
  text-align: center;
  color: white;
  /* border: ${props => props.theme.borderWidth} solid white; */

  ${props =>
    props.large &&
    css`
      grid-column: span 2;
    `}
  ${props =>
    props.highlight &&
    css`
      grid-column: span 3;
      grid-row: span 2;
    `}
`
