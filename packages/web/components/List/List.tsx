import Image from 'components/Image'
import { motion, Variants, useAnimation } from 'framer-motion'
import Link from 'next/link'
import LazyLoad from 'react-lazyload'
import styled, { css } from 'styled-components'
import { animation } from 'theme/animation'
import { itemVariants, ListItem } from './Item'
import { useState, useEffect } from 'react'

type StyledListProps = {
  maxRows?: number
}

type ListProps = StyledListProps & {
  items: Array<{
    name: string
    slug: string
    listImage: string
  }>
  document: string
  as: string
}

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: animation.timing[0] / 2,
    },
  },
  exit: {},
}

const StyledList = motion.custom(styled.ul<StyledListProps>`
list-style: none;
  margin: 0 0 ${props => props.theme.spacing[2]};
  padding: 0;
  display: grid;
  grid-auto-columns: 1fr;
  grid-gap: ${props => props.theme.spacing[0]};
  grid-auto-rows: 1fr;

  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    ${props =>
      props.maxRows
        ? css`
            grid-template-columns: repeat(${props.maxRows / 2}, 1fr);
          `
        : css`
            grid-template-columns: repeat(2, 1fr);
          `}
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    ${props =>
      props.maxRows
        ? css`
            grid-template-columns: repeat(
              ${Math.ceil(props.maxRows / 1.5)},
              1fr
            );
          `
        : css`
            grid-template-columns: repeat(3, 1fr);
          `}
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    ${props =>
      props.maxRows
        ? css`
            grid-template-columns: repeat(${props.maxRows}, 1fr);
          `
        : css`
            grid-template-columns: repeat(4, 1fr);
          `}
    grid-gap: ${props => props.theme.spacing[1]};
  }
`)

export const List: React.FC<ListProps> = ({ items, document, as }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    if (imageLoaded) controls.start('visible')
  }, [imageLoaded])
  return (
    <StyledList
      initial="hidden"
      animate="visible"
      exit="exit"
      maxRows={3}
      variants={listVariants}
    >
      {items.map(item => (
        <LazyLoad offset={400} css={{ height: '100%', width: '100%' }} once>
          <ListItem variants={itemVariants} animate={controls} key={item.slug}>
            <Link scroll={false} href={document} as={as.concat(item.slug)}>
              <a>
                <Image
                  src={item.listImage}
                  alt={item.name}
                  onLoad={() => setImageLoaded(true)}
                  loaded={imageLoaded}
                />
              </a>
            </Link>
          </ListItem>
        </LazyLoad>
      ))}
    </StyledList>
  )
}
