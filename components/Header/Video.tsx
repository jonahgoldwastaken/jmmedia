import { PageContext } from '../Page/Context'
import { Video } from '../Common'
import { styled } from '../../theme'
import { FadeIn } from '../Animations'

type HeaderVideoProps = {
  src: string
}

const HeaderVideoElement = styled(Video)`
  opacity: 0;
  animation: ${FadeIn}
    ${props =>
      `${props.theme.animation.timing[0]} ${props.theme.animation.curve}`}
    forwards;
`

export const HeaderVideo: React.FunctionComponent<HeaderVideoProps> = props => (
  <PageContext.Consumer>
    {({ isNavigating }) => (
      <HeaderVideoElement
        autoPlay
        muted
        playsInline
        isNavigating={isNavigating}
        {...props}
      />
    )}
  </PageContext.Consumer>
)
