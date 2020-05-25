import styled, { css } from 'styled-components'

type ListProps = {
  maxRows?: number
}

export const List = styled.ul<ListProps>`
  list-style: none;
  margin: 0 0 ${props => props.theme.spacing[2]};
  padding: 0;
  display: grid;
  grid-auto-columns: 1fr;
  grid-gap: ${props => props.theme.spacing[0]};
  grid-auto-rows: 1fr;

  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    ${props =>
      props.maxRows
        ? css`
            grid-template-columns: repeat(${props.maxRows / 2}, 1fr);
          `
        : css`
            grid-template-columns: repeat(2, 1fr);
          `}
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    ${props =>
      props.maxRows
        ? css`
            grid-template-columns: repeat(
              ${Math.ceil(props.maxRows / 1.5)},
              1fr
            );
          `
        : css`
            grid-template-columns: repeat(3, 1fr);
          `}
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    ${props =>
      props.maxRows
        ? css`
            grid-template-columns: repeat(${props.maxRows}, 1fr);
          `
        : css`
            grid-template-columns: repeat(4, 1fr);
          `}
    grid-gap: ${props => props.theme.spacing[1]};
  }
`
