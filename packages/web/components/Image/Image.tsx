import { BaseRunning } from 'components/Text'
import styled, { useTheme } from 'styled-components'
import { MouseEvent } from 'react'

type ImageProps = {
  noQuote?: boolean
  src: string[] | string
  alt?: string
  onClick?: (e: MouseEvent<HTMLImageElement>) => void
}

const Container = styled.div`
  display: inline-block;
  position: relative;
  width: ${props => props.theme.widths[3]};
`

const StyledImage = styled.img`
  display: block;
  width: ${props => props.theme.widths[3]};
  height: 100%;
  object-fit: cover;
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
  ...props
}) => {
  const theme = useTheme()
  if (typeof src !== 'string') {
    return (
      <Container {...props}>
        <StyledImage
          alt={alt}
          srcSet={`${src[0]} 500w, ${src[1]} 1000w, ${src[2]} 2000w`}
          sizes={`(max-width: ${theme.breakpoints[0]}) 500w, (max-width: ${theme.breakpoints[1]}) 1000w, (max-width: ${theme.breakpoints[2]}) 2000w`}
        />
        {alt && !noQuote && <ImageQuote>{alt}</ImageQuote>}
      </Container>
    )
  } else
    return (
      <Container {...props}>
        <StyledImage alt={alt} src={src} />
        {alt && !noQuote && <ImageQuote>{alt}</ImageQuote>}
      </Container>
    )
}
