import { styled } from '../../theme'

type HeroVideoProps = {
  src: string
}

const StyledVideo = styled.video`
  position: absolute;
  top: 0%;
  left: 0%;
  object-fit: cover;
  height: ${props => props.theme.sizes.dynamic[2]};
  width: ${props => props.theme.sizes.dynamic[2]};
  filter: brightness(0.5);
  z-index: 1;
`

export const HeroVideo: React.FunctionComponent<HeroVideoProps> = ({ src }) => (
  <StyledVideo autoPlay loop src={src} />
)

export const HeroImage = styled.img`
  position: absolute;
  top: 0%;
  left: 0%;
  object-fit: cover;
  height: ${props => props.theme.sizes.dynamic[2]};
  width: ${props => props.theme.sizes.dynamic[2]};
  filter: brightness(0.5);
  z-index: 1;
`
