import styled from 'styled-components'

const StyledContainer = styled.div`
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  position: relative;
  align-self: end;
  justify-self: start;
  z-index: 2;
  margin: 1.25rem 1.875rem;
  pointer-events: none;
  line-height: 1.4;
`

const StyledHeading = styled.h2`
  margin: 0;
  font-family: ${props => props.theme.fonts.display};
  font-size: ${props => props.theme.fontSizes[2]};
  font-weight: ${props => props.theme.fontWeights[3]};
  text-align: left;
`

const StyledSubheading = styled.h3`
  margin: 0;
  font-family: ${props => props.theme.fonts.display};
  font-size: ${props => props.theme.fontSizes[0]};
  font-weight: ${props => props.theme.fontWeights[1]};
  text-align: left;
`

export const ItemTitle: React.FunctionComponent = ({ children }) => {
  return (
    <StyledContainer>
      <StyledHeading>{children}</StyledHeading>
      <StyledSubheading>2019</StyledSubheading>
    </StyledContainer>
  )
}
