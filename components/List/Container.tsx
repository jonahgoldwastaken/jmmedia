import { styled } from '../../theme'

export const StyledContainer = styled.section`
  margin: 0 auto;
  padding-bottom: ${props => props.theme.space[3]};
  width: ${props => props.theme.sizes.dynamic[2]};
  max-width: ${props => props.theme.sizes.static[2]};
  display: flex;
  background: ${props => props.theme.colors.secondary};
`
export const BackgroundContainer = styled.div`
  width: ${props => props.theme.sizes.dynamic[2]};
  background: ${props => props.theme.colors.secondary};
`

export const ListContainer: React.FunctionComponent = ({ children }) => (
  <BackgroundContainer>
    <StyledContainer>{children}</StyledContainer>
  </BackgroundContainer>
)
