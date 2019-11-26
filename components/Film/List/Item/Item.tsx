import Link from 'next/link'
import { NextRouter } from 'next/router'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { styled } from '../../../../theme'
import { LoadingAnimater } from '../../../Common'
import { LinkWrapper } from '../../../Common/Link'
import { ItemAnchor } from './Anchor'
import { ItemTitle } from './Title'
import { ItemVideo } from './Video'
import { ItemImage } from './Image'

type StyledItemProps = {
  columns: number[]
}

type ItemProps = {
  columns: number[]
  vidSrc: string
  imgSrc: string
  href: string
  router?: NextRouter
}

const StyledItem = styled.li<StyledItemProps>`
  position: relative;
  margin: 0;
  padding: 0;
  grid-row-end: span 1;

  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    grid-column-end: span ${props => props.columns[0]};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    grid-column-end: span ${props => props.columns[1]};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    grid-column-end: span ${props => props.columns[2]};
  }
`

export const ListItem: React.FunctionComponent<ItemProps> = ({
  href,
  columns,
  imgSrc,
  vidSrc,
  children,
}) => {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <LinkWrapper href={href}>
      <StyledItem ref={ref} columns={columns}>
        <Link href={href}>
          <ItemAnchor inView={inView} loaded={videoLoaded && imageLoaded}>
            <ItemImage onLoad={() => setImageLoaded(true)} src={imgSrc} />
            <ItemVideo onLoad={() => setVideoLoaded(true)} video={vidSrc} />
            <ItemTitle>{children}</ItemTitle>
          </ItemAnchor>
        </Link>
        <LoadingAnimater loaded={videoLoaded} />
      </StyledItem>
    </LinkWrapper>
  )
}
