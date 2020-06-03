import Image from 'components/Image'
import { MouseEvent } from 'react'
import styled from 'styled-components'

type ImageProps = {
  noQuote?: boolean
  src: string[] | string
  alt?: string
  onClick: (e: MouseEvent<HTMLImageElement>) => void
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

export const ArticleImage: React.FC<ImageProps> = props => (
  <StyledImage {...props} />
)

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
