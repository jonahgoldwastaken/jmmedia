import { styled } from '../../../../theme'

const StyledHeading = styled.h2`
  grid-column: 1 / span 1;
  grid-row: 1 / span 1;
  position: relative;
  z-index: 2;
  margin: 0;
  font-weight: ${props => props.theme.fontWeights[1]};
  pointer-events: none;
`

export const ItemTitle: React.FunctionComponent = ({ children }) => {
  return <StyledHeading>{children}</StyledHeading>
}
