import { BaseRunning } from 'components/Text'
import { MouseEvent } from 'react'
import styled, { useTheme, css } from 'styled-components'

type ImageProps = {
  noQuote?: boolean
  src: string[] | string
  alt?: string
  loaded: boolean
  onLoad: () => void
  onClick?: (e: MouseEvent<HTMLImageElement>) => void
}

const Container = styled.div`
  display: block;
  position: relative;
  height: 100%;
  width: ${props => props.theme.widths[3]};
`

const StyledImage = styled.img<{ loaded: boolean }>`
  display: block;
  width: ${props => props.theme.widths[3]};
  height: 100%;
  object-fit: cover;
  ${props =>
    props.loaded &&
    css`
      &:after {
        display: block;
        height: 100%;
        width: ${props => props.theme.widths[3]};
        content: '';
        background: ${props => props.theme.colours.tertiary};
      }
    `}
`

const ImageQuote = styled.q`
  ${BaseRunning};
  line-height: 1;
  padding: ${props => props.theme.spacing[0]};
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  background: ${props => props.theme.colours.primary};
  color: ${props => props.theme.colours.tertiary};

  &:before {
    content: '';
  }

  @media speech {
    display: none;
  }
`

export const Image: React.FC<ImageProps> = ({
  alt,
  src,
  noQuote,
  onLoad,
  loaded,
  ...props
}) => {
  const theme = useTheme()
  return (
    <Container {...props}>
      {typeof src !== 'string' ? (
        <StyledImage
          alt={alt}
          srcSet={`${src[0]} 500w, ${src[1]} 1000w, ${src[2]} 2000w`}
          sizes={`(max-width: ${theme.breakpoints[0]}) 500w, (max-width: ${theme.breakpoints[1]}) 1000w, (max-width: ${theme.breakpoints[2]}) 2000w`}
          loaded={loaded}
          onLoad={onLoad}
        />
      ) : (
        <StyledImage alt={alt} src={src} loaded={loaded} onLoad={onLoad} />
      )}
      {alt && !noQuote && <ImageQuote>{alt}</ImageQuote>}
    </Container>
  )
}
