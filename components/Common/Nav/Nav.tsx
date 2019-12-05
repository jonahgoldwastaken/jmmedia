import { useContext } from 'react'
import { css } from 'styled-components'
import { styled } from '../../../theme'
import { BackgroundContext } from '../Background'
import NavLink from './Link'
import { NavList } from './List'

type StyledNavProps = {
  currentPage: string
  open: boolean
}

const StyledNav = styled.nav<StyledNavProps>`
  margin: 0;
  padding: 0 ${props => props.theme.space[3]};
  width: 100%;

  ${props =>
    props.currentPage !== '/' &&
    css`
      position: relative;
      display: flex;
      align-items: center;
      overflow: hidden;
      height: ${props.open ? props.theme.sizes.static[0] : '0px'};
      background-color: ${props.theme.colours.darkText};
      z-index: 3;
      transition: height ${props.theme.animation.timing[1]}
        ${props.theme.animation.curve};
      will-change: height;

      ${!props.open &&
        css`
          @media print, speech {
            display: none;
          }
        `}
    `}
`

export const Nav: React.FunctionComponent = () => {
  const { currentPage, navOpen } = useContext(BackgroundContext)
  return (
    <StyledNav currentPage={currentPage} open={navOpen}>
      <NavList>
        <NavLink href="/fotografie" bgVideo="">
          Fotografie
        </NavLink>
        <NavLink
          href="/films"
          bgVideo="https://storage.googleapis.com/filmportfolio/film/background.mp4"
        >
          Films
        </NavLink>
        <NavLink
          href="/over"
          bgVideo="https://storage.googleapis.com/filmportfolio/over/background.mp4"
        >
          Over mij
        </NavLink>
      </NavList>
    </StyledNav>
  )
}
