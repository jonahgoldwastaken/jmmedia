import { useState } from 'react'
import { styled } from '../../../theme'
import { NavContext } from './NavContext'
import { NavAnchor } from './Anchor'
import { NavItem } from './Item'
import { NavList } from './List'
import { NavVideo } from './Video'

const StyledNav = styled.nav`
  margin: 0;
  padding: 0 ${props => props.theme.space[3]};
  width: 100%;
  max-width: 80rem;
`

export const HeroNav: React.FunctionComponent = ({ children }) => {
  const [currentVideo, setCurrentVideo] = useState('')
  const [mayPlay, setMayPlay] = useState(false)

  return (
    <NavContext.Provider
      value={{
        video: currentVideo,
        setVideo: setCurrentVideo,
        mayPlayVideo: mayPlay,
        setMayPLayVideo: setMayPlay,
      }}
    >
      <NavVideo />
      <StyledNav>
        <NavList>{children}</NavList>
      </StyledNav>
    </NavContext.Provider>
  )
}
