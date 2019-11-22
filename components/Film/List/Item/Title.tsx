import { styled } from '../../../../theme'

const StyledHeading = styled.h2`
  position: relative;
  z-index: 2;
  margin: 0;
  pointer-events: none;
`

export const ItemTitle: React.FunctionComponent = ({ children }) => {
  return <StyledHeading>{children}</StyledHeading>
}
