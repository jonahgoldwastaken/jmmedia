import { darken, lighten } from 'polished'
import { styled } from '../../../theme'
import { FadeIn, FadeOut, SlideInLeft, SlideInRight, SlideOutLeft, SlideOutRight } from '../../Animations'
import { BackgroundContext } from '../../Common/Background'

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
  grid-template-columns: 1fr;
  padding: ${props => props.theme.space[2]};
  grid-column-gap: ${props => props.theme.space[2]};
  background: ${props =>
    props.light
      ? lighten(0.1, props.theme.pageColours[props.currentPage])
      : props.dark
      ? darken(0.1, props.theme.pageColours[props.currentPage])
      : props.theme.pageColours[props.currentPage]};

  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    grid-template-columns: repeat(6, 1fr);
  }

  .page-transition-enter & {
    opacity: 0;
  }

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
export const ContentSection: React.FunctionComponent<ContentSectionProps> = props => (
  <BackgroundContext.Consumer>
    {({ currentPage }) => (
      <StyledSection currentPage={currentPage} {...props} />
    )}
  </BackgroundContext.Consumer>
)
