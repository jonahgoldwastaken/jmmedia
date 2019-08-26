import styled, { css } from 'styled-components'

type ItemProps = {
  large?: boolean
  highlight?: boolean
}

export const StyledItem = styled.li<ItemProps>`
  grid-row: span 1;
  grid-column: span 1;
  text-align: center;
  border: 5px solid white;
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
