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

export const HeroNav = () => {
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
        <NavList>
          <NavItem>
            <NavAnchor
              bgVideo="https://ak6.picdn.net/shutterstock/videos/27590086/preview/stock-footage-attractive-young-businesswoman-working-at-night-via-computer-at-office-with-closeup-of-hipster.mp4"
              disabled
              href="/#"
              pageColour="#011638"
            >
              Fotografie
            </NavAnchor>
          </NavItem>
          <NavItem>
            <NavAnchor
              bgVideo="https://ak0.picdn.net/shutterstock/videos/1021491520/preview/stock-footage-the-information-on-the-bills-are-fake-placeholder-name-is-use-paying-bills-using-a-laptop.mp4"
              href="/film"
              pageColour="#011638"
            >
              Film
            </NavAnchor>
          </NavItem>
          <NavItem>
            <NavAnchor
              bgVideo="https://ak4.picdn.net/shutterstock/videos/1014949114/preview/stock-footage-top-view-young-diverse-marketing-research-team-brainstorming-working-on-startup-business-solution.mp4"
              disabled
              href="/#"
              pageColour="#011638"
            >
              Over mij
            </NavAnchor>
          </NavItem>
        </NavList>
      </StyledNav>
    </NavContext.Provider>
  )
}
