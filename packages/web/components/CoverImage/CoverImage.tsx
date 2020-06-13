//@ts-nocheck
import { BaseHeading } from 'components/Text/Headings/BaseHeading'
import styled from 'styled-components'
import { primaries } from 'types/primaries'

type CoverImageContainerProps = {
  colour: primaries
  transform: Array<{
    top?: number
    left?: number
  }>
  width?: number[]
}

type CoverImageTextProps = {
  colour: primaries
}

type CoverImageProps = {
  src: string
} & CoverImageContainerProps

const CoverImageContainer = styled.div<CoverImageContainerProps>`
  display: inline-block;
  position: relative;
  width: ${props => props.theme.widths[3]};
  vertical-align: top;

  &:not(:last-child) {
    margin-bottom: ${props => props.theme.spacing[2]};
  }

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

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    width: ${props =>
      props.width?.length ? `${props.width[0] / 16}rem` : '18.75rem'};
    ${props => {
      return `margin: ${
        props.transform[0].top ? props.transform[0].top / 16 : 0
      }rem 0 0 ${props.transform[0].left ? props.transform[0].left / 16 : 0}rem`
    }}
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[3]}) {
    width: ${props =>
      props.width?.length
        ? props.width.length > 1
          ? `${props.width[1] / 16}rem`
          : `${props.width[0] / 16}rem`
        : '28.125rem'};

    ${props => {
      if (props.transform.length > 1) {
        return `margin: ${
          props.transform[1].top
            ? props.transform[1].top / 16
            : props.transform[0].top
            ? props.transform[0].top / 16
            : 0
        }rem 0 0 ${
          props.transform[1].left
            ? props.transform[1].left / 16
            : props.transform[0].left
            ? props.transform[0].left / 16
            : 0
        }rem`
      }
    }}
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  filter: contrast(200%) opacity(0.75);

  @media speech {
    display: none;
  }
`

const Text = styled(BaseHeading).attrs({ as: 'p' })<CoverImageTextProps>`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
  margin: 0;
  padding: ${props => props.theme.spacing[0]};
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

export const CoverImage: React.FC<CoverImageProps> = ({
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
