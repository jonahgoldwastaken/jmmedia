import Link from 'next/link'
import { NextRouter } from 'next/router'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { styled } from '../../../../theme'
import { LoadingAnimator } from '../../../Common'
import { LinkWrapper } from '../../../Common/Link'
import { ItemAnchor } from './Anchor'
import { ItemTitle } from './Title'
import { ItemVideo } from './Video'
import useMedia from 'use-media'
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
  const [mediaLoaded, setMediaLoaded] = useState(false)
  const [inViewRef, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })
  const isMobile = useMedia({ pointer: 'coarse' })

  return (
    <LinkWrapper href={href}>
      <StyledItem ref={inViewRef} columns={columns}>
        {inView && (
          <>
            <Link href={href}>
              <ItemAnchor inView={inView} loaded={mediaLoaded}>
                {isMobile ? (
                  <ItemImage src={imgSrc} onLoad={() => setMediaLoaded(true)} />
                ) : (
                  <ItemVideo
                    video={vidSrc}
                    onLoadedData={() => setMediaLoaded(true)}
                  />
                )}
                <ItemTitle>{children}</ItemTitle>
              </ItemAnchor>
            </Link>
            <LoadingAnimator loaded={mediaLoaded} />
          </>
        )}
      </StyledItem>
    </LinkWrapper>
  )
}
