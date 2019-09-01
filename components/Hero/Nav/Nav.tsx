import { useState, useEffect } from 'react'
import { styled } from '../../../theme'
import { NavList } from './List'
import { NavContext } from './Context'
import { useRouter } from 'next/router'

const StyledNav = styled.nav`
  margin: 0;
  padding: 0 ${props => props.theme.space[3]};
  width: 100%;
  max-width: 80rem;
`

export const HeroNav: React.FunctionComponent = ({ children }) => {
  const [activeLink, setActiveLink] = useState('')
  const router = useRouter()

  if (typeof window !== 'undefined') {
    useEffect(() => {
      router.beforePopState(({ url }) => {
        if (url === activeLink) return false
        setActiveLink(url)
        return false
      })
      return function() {
        router.beforePopState(() => true)
      }
    }, [])
  }

  return (
    <NavContext.Provider
      value={{
        activeLink,
      }}
    >
      <StyledNav>
        <NavList>{children}</NavList>
      </StyledNav>
    </NavContext.Provider>
  )
}
