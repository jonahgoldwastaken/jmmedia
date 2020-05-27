import Image from 'components/Image'
import { ArticleContext } from 'components/Portfolio/Article'
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
  height: 100%;
  z-index: 99999;
  background-color: ${props => props.theme.colours.primaries.black};
  cursor: zoom-out;

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

export const DarkRoom: React.FunctionComponent = () => {
  const {
    currentImage: { src, alt },
    darkRoomOpen,
    setDarkRoomOpen,
  } = useContext(ArticleContext)
  return (
    <StyledDiv open={darkRoomOpen} onClick={() => setDarkRoomOpen(false)}>
      <Image src={src} alt={alt} />
    </StyledDiv>
  )
}
