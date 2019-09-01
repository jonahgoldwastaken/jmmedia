import { Keyframes } from 'styled-components'

const animationChooser = (animations: Keyframes[]) => () =>
  animations[Math.floor(Math.random() * animations.length)]
export default animationChooser
