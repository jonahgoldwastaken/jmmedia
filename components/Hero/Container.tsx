import styled from 'styled-components'

export const HeroContainer = styled.section`
  position: relative;
  z-index: 2;
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
