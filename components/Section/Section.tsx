import { darken, lighten } from 'polished'
import { styled } from '../../theme'
import {
  CurtainOpenHorizontal,
  FadeIn,
  SlideOutRight,
  SlideOutLeft,
  FadeOut,
} from '../Animations'
import { BackgroundContext } from '../Common'
import { SlideInLeft, SlideInRight } from '../Animations/SlideIn'

type StyledSectionProps = {
  currentPage: string
}

type ContentSectionProps = {
  light?: boolean
  dark?: boolean
}

const StyledSection = styled.section<StyledSectionProps & ContentSectionProps>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  background: ${props =>
    props.light
      ? lighten(0.1, props.theme.pageColours[props.currentPage])
      : props.dark
      ? darken(0.1, props.theme.pageColours[props.currentPage])
      : props.theme.pageColours[props.currentPage]};

  .page-transition-enter-active & {
    position: relative;
    opacity: 1;
    animation: ${SlideInLeft}
      ${props =>
        `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`}
      forwards;

    &:nth-child(odd) {
      animation-name: ${SlideInRight};
    }

    * {
      opacity: 0;
      animation: ${FadeIn}
        ${props =>
          `${props.theme.animation.timing[1]} ${props.theme.animation.curve} ${props.theme.animation.timing[0]}`}
        forwards;
    }
  }

  .page-transition-exit-active & {
    position: relative;
    animation: ${SlideOutRight}
      ${props =>
        `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`}
      forwards;

    &:nth-child(odd) {
      animation-name: ${SlideOutLeft};
    }

    * {
      animation: ${FadeOut}
        ${props =>
          `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`}
        forwards;
    }
  }
`
export const ContentSection: React.FunctionComponent<
  ContentSectionProps
> = props => (
  <BackgroundContext.Consumer>
    {({ currentPage }) => (
      <StyledSection currentPage={currentPage} {...props} />
    )}
  </BackgroundContext.Consumer>
)
