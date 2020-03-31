import styled from 'styled-components'

export const SectionParagraph = styled.p`
  margin: ${props => props.theme.space[2]} 0;
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes[1]};
  line-height: 1.5;
  color: ${props => props.theme.colours.lightText};

  &:last-child {
    margin-bottom: 0;
  }

  a {
    color: inherit;
  }
`
