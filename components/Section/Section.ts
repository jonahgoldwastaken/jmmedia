import styled from 'styled-components'

type SectionProps = {
  background: 'primary' | 'secondary'
}

export const Section = styled.div<SectionProps>`
  background: ${props =>
    props.background === 'secondary'
      ? props.theme.colours.primary
      : props.theme.colours.tertiary};
`
