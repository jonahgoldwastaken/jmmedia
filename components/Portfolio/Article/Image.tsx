import Image from '../../Image'
import styled from 'styled-components'
import { useContext } from 'react'
import { ArticleContext } from './Context'

type ImageProps = {
  noQuote?: boolean
  src: string
  alt?: string
}

const StyledImage = styled(Image)`
  margin-top: 0;
  margin-bottom: ${props => props.theme.spacing[2]};
  cursor: zoom-in;

  + div {
    margin-top: -${props => props.theme.spacing[1]};
  }

  @media screen and (max-width: ${props => props.theme.breakpoints[2]}) {
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    + div {
      margin-top: 0;
    }
  }
`

export const ArticleImage: React.FunctionComponent<ImageProps> = props => {
  const { setCurrentImage, setDarkRoomOpen } = useContext(ArticleContext)
  return (
    <StyledImage
      {...props}
      onClick={() => {
        setCurrentImage({ src: props.src, alt: props.alt })
        setDarkRoomOpen(true)
      }}
    />
  )
}

type ArticleImageRowProps = {
  amount: number
}

export const ArticleImageRow = styled.div<ArticleImageRowProps>`
  + div {
    margin-top: -${props => props.theme.spacing[1]};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    display: grid;
    grid-template-columns: repeat(${props => props.amount}, 1fr);
    grid-column-gap: ${props => props.theme.spacing[1]};
  }
`
