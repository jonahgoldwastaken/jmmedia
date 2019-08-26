import styled from 'styled-components'

export const StyledContainer = styled.section`
  margin: 0 auto;
  padding-bottom: 3rem;
  width: 100%;
  max-width: 80rem;
  display: flex;
  background: black;
`
export const BackgroundContainer = styled.div`
  width: 100%;
  background: black;
`

export const ListContainer: React.FunctionComponent = ({ children }) => (
  <BackgroundContainer>
    <StyledContainer>{children}</StyledContainer>
  </BackgroundContainer>
)
