import Image from 'components/Image'
import { ArticleContext } from 'components/Project/Article'
import { useContext } from 'react'
import styled, { css } from 'styled-components'

type StyledDivProps = {
  open: boolean
}

const StyledDiv = styled.div<StyledDivProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 99999;
  background-color: ${props => props.theme.colours.primaries.black};
  cursor: zoom-out;

  > div {
    height: 100%;
  }
  img {
    object-fit: contain;
  }

  @media screen {
    ${props =>
      !props.open &&
      css`
        display: none;
      `}
  }

  @media print, speech {
    display: none;
  }
`

export const DarkRoom: React.FC = () => {
  const {
    currentImage: { src, alt },
    darkRoomOpen,
    setDarkRoomOpen,
  } = useContext(ArticleContext)
  return (
    <StyledDiv open={darkRoomOpen} onClick={() => setDarkRoomOpen(false)}>
      <Image animation src={src} alt={alt} noQuote />
    </StyledDiv>
  )
}
