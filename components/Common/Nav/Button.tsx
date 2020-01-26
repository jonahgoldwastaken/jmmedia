import { useContext } from 'react'
import { Button } from '..'
import { styled } from '../../../theme'
import { BackgroundContext } from '../Background'

const StyledButton = styled(Button)`
  .page-transition-enter-active & {
    animation: none;
    transition: none;
  }
`

export const NavButton: React.FunctionComponent = () => {
  const { setNavOpen, navOpen } = useContext(BackgroundContext)

  return (
    <StyledButton
      icon={navOpen ? 'times' : 'hamburger'}
      onClick={() => setNavOpen(!navOpen)}
    />
  )
}
