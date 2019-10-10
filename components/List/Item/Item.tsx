import Link from 'next/link'
import { NextRouter } from 'next/router'
import { styled } from '../../../theme'
import LinkWrapper from '../../Common/LinkWrapper'
import { ItemAnchor } from './Anchor'
import { ItemPlaceholder } from './Placholder'
import { ItemTitle } from './Title'
import { ItemVideo } from './Video'

type StyledItemProps = {
  columns: number[]
  rows: number[]
}

type ItemProps = {
  columns: number[]
  rows: number[]
  vidSrc: string
  imgSrc: string
  imgAlt: string
  href: string
  router?: NextRouter
}

const StyledItem = styled.li<StyledItemProps>`
  position: relative;
  margin: 0;
  padding: 0;

  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    grid-column-end: span ${props => props.columns[0]};
    grid-row-end: span ${props => props.rows[0]};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    grid-column-end: span ${props => props.columns[1]};
    grid-row-end: span ${props => props.rows[1]};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    grid-column-end: span ${props => props.columns[2]};
    grid-row-end: span ${props => props.rows[2]};
  }
`

export const ListItem: React.FunctionComponent<ItemProps> = ({
  href,
  columns,
  rows,
  imgAlt,
  imgSrc,
  vidSrc,
  children,
}) => {
  return (
    <LinkWrapper href={href}>
      <StyledItem columns={columns} rows={rows}>
        <Link href={href}>
          <ItemAnchor>
            <ItemPlaceholder alt={imgAlt} src={imgSrc} />
            <ItemVideo placeholder={imgSrc} video={vidSrc} />
            <ItemTitle>{children}</ItemTitle>
          </ItemAnchor>
        </Link>
      </StyledItem>
    </LinkWrapper>
  )
}
