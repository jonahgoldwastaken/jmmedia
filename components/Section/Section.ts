import styled, { css } from 'styled-components'

type SectionProps = {
  background: 'primary' | 'secondary'
  grid?: boolean
  centreContent?: boolean
  fullHeight?: boolean
}

export const Section = styled.div<SectionProps>`
  padding: ${props => props.theme.spacing[2]};
  background: ${props =>
    props.background === 'secondary'
      ? props.theme.colours.primary
      : props.theme.colours.tertiary};

  ${props => props.fullHeight && `height: ${props.theme.heights[3]}`};

  ${props =>
    props.grid &&
    css`
      display: grid;
      align-items: start;
      grid-row-gap: ${props => props.theme.spacing[1]};

      @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
        display: grid;
        align-items: start;
        grid-template-columns: 1fr 1fr;
        grid-gap: ${props.theme.spacing[2]};
      }
    `}

  ${props =>
    props.centreContent &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `}
`
