import { styled } from '../../../../theme'
import { LinkWrapper } from '../../Link'
import { NavAnchor } from './Anchor'
import { LinkVideo } from './Video'

type NavLinkProps = {
  bgVideo: string
  disabled?: boolean
  href: string
}

const StyledListItem = styled.li`
  margin: 0;
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;

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
`

export const NavLink: React.FunctionComponent<NavLinkProps> = ({
  href,
  disabled,
  bgVideo,
  ...props
}) => {
  return (
    <LinkWrapper disabled={disabled} href={href}>
      <StyledListItem>
        <NavAnchor {...props} />
        <LinkVideo video={bgVideo} />
      </StyledListItem>
    </LinkWrapper>
  )
}
