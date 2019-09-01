import { styled } from '../../../theme'
import { ItemVideo } from './Video'
import { ItemTitle } from './Title'
import { Video, VideoElement } from '../../Common'
import { useState } from 'react'
import { ItemPlaceholder } from './Placholder'
import {
  CurtainOpenHorizontal,
  CurtainOpenVertical,
  CurtainCloseHorizontal,
  CurtainCloseVertical,
} from '../../Animations'
import animationChooser from '../../../utils/animationChooser'

type StyledItemProps = {
  columns: number
  rows: number
}

type ItemProps = {
  vidSrc: string
}

const openAnimations = [CurtainOpenHorizontal, CurtainOpenVertical]

const closeAnimation = [CurtainCloseHorizontal, CurtainCloseVertical]

const StyledItem = styled.li<StyledItemProps>`
  position: relative;
  margin: 0;
  padding: 0;
  grid-column-end: span ${props => props.columns};
  grid-row-end: span ${props => props.rows};
  display: flex;
  align-items: center;
  justify-content: center;

  .page-transition-enter-active & {
    animation: ${animationChooser(openAnimations)}
      ${props =>
        `${props.theme.animation.timing[0]} ${props.theme.animation.curve}`}
      forwards;
  }
  .page-transition-exit-active & {
    animation: ${animationChooser(closeAnimation)}
      ${props =>
        `${props.theme.animation.timing[0]} ${props.theme.animation.curve}`}
      forwards;
  }
`

export const ListItem: React.FunctionComponent<ItemProps & StyledItemProps> = ({
  children,
  vidSrc,
  ...props
}) => {
  const [isHovering, setIsHovering] = useState(false)
  const updateHoverState = (bool: boolean) => () => {
    console.log('activated', bool)
    setIsHovering(bool)
  }
  return (
    <StyledItem
      {...props}
      onMouseOverCapture={updateHoverState(true)}
      onMouseOutCapture={updateHoverState(false)}
    >
      <ItemPlaceholder
        hovering={isHovering}
        src="https://miro.medium.com/fit/c/256/256/1*KOiaTWFJoDphFszMOeA78Q.jpeg"
      />
      <Video mayPlayVideo={isHovering}>
        {props => <ItemVideo muted loop src={vidSrc} {...props} />}
      </Video>
      <ItemTitle hovering={isHovering}>{children}</ItemTitle>
    </StyledItem>
  )
}
