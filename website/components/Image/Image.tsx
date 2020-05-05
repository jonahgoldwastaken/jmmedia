import styled from 'styled-components'
import { BaseRunning } from '../Text'

type ImageProps = {
  noQuote?: boolean
  src: string
  alt?: string
}

const Container = styled.div`
  display: inline-block;
  position: relative;
`

const StyledImage = styled.img`
  width: 100%;
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
  src,
  noQuote,
  ...props
}) => (
  <Container {...props}>
    <StyledImage alt={alt} src={src} />
    {alt && !noQuote && <ImageQuote>{alt}</ImageQuote>}
  </Container>
)
