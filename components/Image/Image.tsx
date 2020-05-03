import styled from 'styled-components'
import { BaseRunning } from '../Text'

type ImageProps = {
  noQuote?: boolean
  src: string
  alt?: string
  width?: 'third' | 'half' | 'full'
}

type StyledImageProps = {
  width?: 'third' | 'half' | 'full'
}

const Container = styled.div`
  position: relative;
`

const StyledImage = styled.img<StyledImageProps>`
  width: ${props =>
    props.width
      ? props.width === 'third'
        ? props.theme.widths[1]
        : props.width === 'half'
        ? props.theme.widths[2]
        : props.theme.widths[3]
      : props.theme.widths[3]};
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

export const Image: React.FunctionComponent<ImageProps> = ({
  alt,
  noQuote,
  ...props
}) => (
  <Container>
    <StyledImage alt={alt} {...props} />
    {alt && !noQuote && <ImageQuote>{alt}</ImageQuote>}
  </Container>
)
