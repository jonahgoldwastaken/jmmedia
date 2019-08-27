import { css } from 'styled-components'
import { useState, useEffect } from 'react'
import { styled } from '../../theme'

type StyledHeadingProps = {
  scroll: boolean
}

const StyledHeading = styled.h1<StyledHeadingProps>`
  margin: 0 0 ${props => props.theme.space[3]};
  font-family: 'Red Hat Display', sans-serif;
  font-size: ${props => props.theme.fontSizes[4]};
  text-align: center;
  color: ${props => props.theme.colors.primary};
  transition: all ${props => props.theme.timing};

  ${props =>
    props.scroll &&
    css`
      font-size: ${props => props.theme.fontSizes[2]};
      margin-bottom: ${props => props.theme.space[2]};
    `}
`

const scrollHandler = (
  scroll: boolean,
  setScroll: (bool: boolean) => void
) => () => {
  if (window.scrollY > 0 && scroll !== true) setScroll(true)
  else if (window.scrollY === 0) setScroll(false)
}

const HeaderHeading: React.FunctionComponent = ({ children }) => {
  const [scroll, setScroll] = useState(false)

  const scopedHandler = scrollHandler(scroll, setScroll)

  if (typeof window !== 'undefined')
    window.addEventListener('scroll', scopedHandler, true)
  useEffect(
    () =>
      function cleanup() {
        window.removeEventListener('scroll', scopedHandler, true)
      }
  )

  return <StyledHeading scroll={scroll}>{children}</StyledHeading>
}

export default HeaderHeading
