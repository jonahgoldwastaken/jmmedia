import styled from 'styled-components'
import { BaseHeading } from '../Text/Headings/BaseHeading'
import { primaries } from '../../types/primaries'

type CoverImageContainerProps = {
  colour: primaries
  width?: number
}

type CoverImageTextProps = {
  colour: primaries
}

type CoverImageProps = {
  src: string
} & CoverImageContainerProps

const CoverImageContainer = styled.div<CoverImageContainerProps>`
  position: relative;
  width: ${props => props.width || '18.75rem'};

  &::before {
    display: block;
    content: '';
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: ${props => props.theme.colours.primaries[props.colour]};
    opacity: ${props => (props.colour === 'white' ? '60%' : '50%')};
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  filter: contrast(200%) saturate(0%);

  @media speech {
    display: none;
  }
`

const Text = styled.p<CoverImageTextProps>`
  ${BaseHeading}
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
  margin: 0;
  padding: ${props => props.theme.spacing[1]};
  z-index: 2;
  font-weight: ${props => props.theme.fontWeights[1]};
  text-align: center;
  font-size: ${props => props.theme.fontSizes[2]};
  color: ${props => {
    switch (props.colour) {
      case 'grey':
        return props.theme.colours.primaries.yellow
      case 'white':
        return props.theme.colours.primaries.orange
      case 'orange':
        return props.theme.colours.primaries.white
      case 'yellow':
        return props.theme.colours.primaries.grey
    }
  }};
`

export const CoverImage: React.FunctionComponent<CoverImageProps> = ({
  src,
  children,
  ...props
}) => {
  return (
    <CoverImageContainer {...props}>
      <Image src={src} />
      <Text colour={props.colour}>{children}</Text>
    </CoverImageContainer>
  )
}
