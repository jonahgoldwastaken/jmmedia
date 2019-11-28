import styled from 'styled-components'

type ImageContainerProps = {
  width: number
  height: number
}

export const ImageContainer = styled.div<ImageContainerProps>`
  position: relative;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`
