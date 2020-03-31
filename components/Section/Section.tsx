import { useContext } from 'react'
import styled from 'styled-components'
import { SwipeInLeft, SwipeInRight } from '../Animations'
import { BackgroundContext } from '../Common/Background'

type StyledSectionProps = {
  currentPage: string
}

type ContentSectionProps = {
  light?: boolean
  dark?: boolean
}

const StyledSection = styled.section<StyledSectionProps & ContentSectionProps>`
  margin: 0 auto;
  width: ${props => props.theme.sizes.static[0]};
  padding: ${props => props.theme.space[2]};
  background: ${props => props.theme.pageColours[props.currentPage]};

  .page-transition-enter & {
    opacity: 0;
  }

  .page-transition-enter-active & {
    position: relative;
    opacity: 1;
    animation: ${SwipeInRight}
      ${props =>
        `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`}
      forwards;

    &:nth-child(odd) {
      animation-name: ${SwipeInLeft};
    }
  }
`

export const ContentSection: React.FunctionComponent<ContentSectionProps> = props => {
  const { currentPage } = useContext(BackgroundContext)

  return <StyledSection currentPage={currentPage} {...props} />
}
