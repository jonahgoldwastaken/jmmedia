import Link from 'next/link'
import { useState } from 'react'
import { styled } from '../../../../theme'
import { FadeIn } from '../../../Animations'
import { NavAnchor } from './Anchor'
import { LinkVideo } from './Video'

type NavLinkProps = {
  disabled?: boolean
  bgVideo: string
  href: string
}

const StyledListItem = styled.li`
  margin: 0;
  flex: 1;
  display: inline-flex;

  @media screen and (max-width: ${props => props.theme.breakpoints[2]}) {
    &:not(:last-child) {
      margin-bottom: ${props => props.theme.space[0]};
    }
  }

  &:nth-child(1) {
    justify-content: flex-start;
  }

  &:nth-child(2) {
    justify-content: center;
  }

  &:nth-child(3) {
    justify-content: flex-end;
  }

  .page-transition-enter & {
    opacity: 0;
  }

  .page-transition-enter-active & {
    animation: ${FadeIn}
      ${props =>
        `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`}
      forwards;
    &:first-child,
    &:last-child {
      @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
        animation-delay: ${props => props.theme.animation.timing[0]};
      }
    }
  }
`

export const NavLink: React.FunctionComponent<NavLinkProps> = ({
  href,
  bgVideo,
  ...props
}) => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <StyledListItem>
      <Link href={href} passHref>
        <NavAnchor hoverHandler={setIsHovering} {...props}></NavAnchor>
      </Link>
      <LinkVideo video={bgVideo} mayPlayVideo={isHovering} />
    </StyledListItem>
  )
}
