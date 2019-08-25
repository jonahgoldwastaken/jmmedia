import styled from 'styled-components'

const HeroContainer = styled.section`
  position: relative;
  height: 40rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  @media screen and (max-height: 60rem) {
    height: 60vh;
  }

  @media screen and (max-height: 30rem) {
    height: 20rem;
  }
`

export const HeroHeading = styled.p`
  margin: 0;
  max-width: 80rem;
  font-family: 'Red Hat Display', sans-serif;
  text-align: center;
  font-size: 2rem;
  color: white;
`

export const HeroVideo = styled.video`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  z-index: -1;
`

export const HerovImage = styled.img`
  display: block
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  z-index: -1;
`

const Hero: React.FunctionComponent<{}> = ({ children }) => (
  <HeroContainer>{children}</HeroContainer>
)

export default Hero
