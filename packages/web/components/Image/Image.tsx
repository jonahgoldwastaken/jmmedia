import { BaseRunning } from 'components/Text'
import { motion, useAnimation, Variants } from 'framer-motion'
import { MouseEvent, useEffect, useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { animation } from 'theme/animation'

export type ImageProps = {
  noQuote?: boolean
  src: string[] | string
  alt?: string
  onClick?: (e: MouseEvent<HTMLImageElement>) => void
  animation?: boolean
}

const Container = motion.custom(styled.div`
  display: block;
  position: relative;
  height: 100%;
  width: ${props => props.theme.widths[3]};
  overflow: hidden;
`)

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

const imageVariants: Variants = {
  initial: {
    clipPath: 'inset(100% 0% 0% 0%)',
  },
  loaded: {
    clipPath: 'inset(0% 0% 0% 0%)',
    transition: {
      ease: animation.curve,
      duration: animation.timing[1],
    },
  },
}

export const Image: React.FC<ImageProps> = ({
  alt,
  src,
  noQuote,
  animation,
  ...props
}) => {
  const theme = useTheme()
  const controls = useAnimation()
  const [loaded, setLoaded] = useState(false)
  const [source, setSource] = useState('')

  useEffect(() => {
    if (typeof src !== 'string')
      setSource(`${src[0]} 500w, ${src[1]} 1000w, ${src[2]} 2000w`)
    else setSource(src)
  })

  useEffect(() => {
    if (animation && loaded) controls.start('loaded')
  }, [loaded, animation])

  return (
    <Container
      variants={animation ? imageVariants : {}}
      animate={controls}
      {...props}
    >
      {typeof src !== 'string' ? (
        <StyledImage
          alt={alt}
          srcSet={source}
          sizes={`(max-width: ${theme.breakpoints[0]}) 500w, (max-width: ${theme.breakpoints[1]}) 1000w, (max-width: ${theme.breakpoints[2]}) 2000w`}
          onLoad={() => setLoaded(true)}
        />
      ) : (
        <StyledImage alt={alt} src={source} onLoad={() => setLoaded(true)} />
      )}
      {alt && !noQuote && <ImageQuote>{alt}</ImageQuote>}
    </Container>
  )
}
