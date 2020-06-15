import MediaQueryContext from 'components/MediaQueryContext'
import { useContext } from 'react'
import DesktopFooter from './DesktopFooter'
import MobileFooter from './MobileFooter'

export const Footer: React.FC = () => {
  const { isMobile } = useContext(MediaQueryContext)

  return isMobile ? <MobileFooter /> : <DesktopFooter />
}
