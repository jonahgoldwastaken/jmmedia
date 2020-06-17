//@ts-nocheck
import Image from 'components/Image'
import { BaseHeading } from 'components/Text/Headings/BaseHeading'
import { motion, Transition, useCycle, Variants } from 'framer-motion'
import styled from 'styled-components'
import { animation } from 'theme/animation'
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

const CoverImageContainer = motion.custom(styled.div<CoverImageContainerProps>`
  position: relative;
  width: ${props => props.theme.widths[3]};
  vertical-align: top;
  display: inline-grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;

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
`)

const StyledImage = styled(Image)`
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
  filter: contrast(200%) opacity(0.75);

  @media speech {
    display: none;
  }
`

const Text = motion.custom(styled(BaseHeading).attrs({ as: 'p' })<
  CoverImageTextProps
>`
  grid-row: 1 / span 1;
  grid-column: 1 / span 1;
  position: relative;
  width: 100%;
  align-self: center;
  margin: 0 !important;
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
`)

const textVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
  },
}

const containerVariants: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.1,
  },
}

const coverImageTransition: Transition = {
  ease: animation.curve,
  duration: animation.timing[1],
}

export const CoverImage: React.FC<CoverImageProps> = ({
  src,
  children,
  ...props
}) => {
  const [deg, cycleDeg] = useCycle(
    '0deg',
    '83deg',
    '180deg',
    '274deg',
    '28deg',
    '462deg',
    '261deg'
  )

  return (
    <CoverImageContainer
      variants={containerVariants}
      transition={coverImageTransition}
      initial="initial"
      whileHover="hover"
      onClick={cycleDeg}
      style={{ rotate: deg }}
      {...props}
    >
      <StyledImage animation src={src} />
      <Text variants={textVariants} colour={props.colour}>
        {children}
      </Text>
    </CoverImageContainer>
  )
}
