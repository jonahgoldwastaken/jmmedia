import styled, { css } from 'styled-components'

type SectionProps = {
  grid?: boolean
  centreContent?: boolean
}

type SectionContainerProps = {
  background: 'primary' | 'secondary'
  fullHeight?: boolean
} & SectionProps

const SectionDiv = styled.section<SectionProps>`
  max-width: 64rem;
  height: 100%;
  margin: auto;
  padding: ${props => props.theme.spacing[2]};

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

        h1,
        h2,
        h3 {
          grid-column: span 2;
        }
      }
    `}

  ${props =>
    props.centreContent &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
    `}

    @media screen and (min-width: ${props => props.theme.breakpoints[3]}) {
      max-width: 96rem;
    }

`

const SectionContainer = styled.div<SectionContainerProps>`
  background: ${props =>
    props.background === 'secondary'
      ? props.theme.colours.primary
      : props.theme.colours.tertiary};

  ${props =>
    props.fullHeight &&
    css`
      @media screen and (min-height: ${props.theme.breakpoints[1]}) {
        height: ${props => props.theme.heights[5]};
      }
      @media screen and (min-height: ${props.theme.breakpoints[2]}) {
        height: ${props => props.theme.heights[3]};
      }
      @media screen and (min-height: ${props.theme.breakpoints[3]}) {
        height: ${props.theme.heights[4]};
      }
    `}
`

export const Section: React.FC<SectionContainerProps> = ({
  children,
  ...props
}) => (
  <SectionContainer {...props}>
    <SectionDiv {...props}>{children}</SectionDiv>
  </SectionContainer>
)
