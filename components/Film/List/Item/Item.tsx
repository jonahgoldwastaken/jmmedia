import Link from 'next/link'
import { NextRouter } from 'next/router'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import styled from 'styled-components'
import useMedia from 'use-media'
import { LoadingAnimator } from '../../../Common'
import { LinkWrapper } from '../../../Common/Link'
import { ItemAnchor } from './Anchor'
import { ItemImage } from './Image'
import { ItemTitle } from './Title'
import { ItemVideo } from './Video'

type StyledItemProps = {}

type ItemProps = {
  vidSrc: string
  imgSrc: string
  href: string
  router?: NextRouter
}

const StyledItem = styled.li<StyledItemProps>`
  position: relative;
  margin: 0;
  padding: 0;
`

export const ListItem: React.FunctionComponent<ItemProps> = ({
  href,
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
      <StyledItem ref={inViewRef}>
        {inView && (
          <>
            <Link href={href}>
              <ItemAnchor inView={inView} loaded={mediaLoaded}>
                {isMobile ? (
                  <ItemImage src={imgSrc} onLoad={() => setMediaLoaded(true)} />
                ) : (
                  <ItemVideo
                    poster={imgSrc}
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
