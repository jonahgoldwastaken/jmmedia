import Link from 'next/link'
import { NextRouter, withRouter } from 'next/router'
import { Component, createRef, RefObject } from 'react'
import { css, keyframes } from 'styled-components'
import { styled } from '../../../theme'
import animationChooser from '../../../utils/animationChooser'
import {
  CurtainCloseHorizontal,
  CurtainCloseVertical,
  CurtainOpenHorizontal,
  CurtainOpenVertical,
} from '../../Animations'
import { BackgroundContext, VideoContainer } from '../../Common'
import { positionData } from '../../Hero/Nav/Link/Anchor'
import { ItemAnchor } from './Anchor'
import { ItemPlaceholder } from './Placholder'
import { ItemTitle } from './Title'
import { ItemVideo } from './Video'

type StyledItemProps = {
  columns: number
  rows: number
  active: boolean
  positionData: positionData
  href: string
}

type ItemProps = {
  columns: number
  rows: number
  vidSrc: string
  href: string
  router?: NextRouter
}

type ItemState = {
  active: boolean
  isHovering: boolean
}

const openAnimations = [CurtainOpenHorizontal, CurtainOpenVertical]
const closeAnimations = [CurtainCloseHorizontal, CurtainCloseVertical]
const clickAnimationDesktop = keyframes`
    to {
      left: 0px;
      top: 0px;
      width: 100%;
      height: 100vh;
    }
`

const StyledItem = styled.li<StyledItemProps>`
  position: relative;
  margin: 0;
  padding: 0;
  grid-column-end: span ${props => props.columns};
  grid-row-end: span ${props => props.rows};
  background: ${props => props.theme.pageColours[props.href]};

  &:after {
    content: '';
    opacity: 0;
    background: ${props => props.theme.pageColours[props.href]};
  }

  ${props =>
    props.active
      ? css`
          .page-transition-exit-active & {
            &:after {
              position: fixed;
              z-index: 99;
              opacity: 1;
              left: ${props.positionData.x}px;
              top: ${props.positionData.y}px;
              width: ${props.positionData.width}px;
              height: ${props.positionData.height}px;
              display: block;
              animation: ${clickAnimationDesktop}
                ${props.theme.animation.timing[1]}
                ${props.theme.animation.curve}
                ${props.theme.animation.timing[1]} forwards;
              transition: opacity ${props.theme.animation.timing[1]}
                ${props.theme.animation.curve};
            }
          }
        `
      : css`
          .page-transition-enter & {
            opacity: 0;
          }

          .page-transition-enter-active & {
            opacity: 1;
            animation: ${animationChooser(openAnimations)}
              ${props =>
                `${props.theme.animation.timing[0]} ${props.theme.animation.curve}`}
              forwards;
          }

          .page-transition-exit-active & {
            animation: ${animationChooser(closeAnimations)}
              ${props.theme.animation.timing[0]} ${props.theme.animation.curve}
              forwards;
          }
        `}
`

class ListItemWithoutRouter extends Component<ItemProps, ItemState> {
  static contextType = BackgroundContext
  context!: React.ContextType<typeof BackgroundContext>
  itemRef: RefObject<HTMLLIElement>

  get positionData(): positionData {
    if (this.itemRef.current) {
      const bounds = this.itemRef.current.getBoundingClientRect()

      return {
        x: bounds.left,
        y: bounds.top,
        width: bounds.width,
        height: bounds.height,
      }
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      isHovering: false,
      active: false,
    }
    this.itemRef = createRef<HTMLLIElement>()
  }

  componentDidUpdate() {
    const { router, href } = this.props
    const { active } = this.state

    if (router.route === href && !active) {
      this.setState({
        active: true,
      })
    }
  }

  updateHoverState(bool: boolean) {
    const { router } = this.props
    const { currentPage } = this.context

    if (router.route === currentPage) {
      this.setState({
        isHovering: bool,
      })
    }
  }

  render() {
    const { href, vidSrc, children } = this.props
    const { isHovering } = this.state

    return (
      <StyledItem
        ref={this.itemRef}
        onMouseOverCapture={() => this.updateHoverState(true)}
        onMouseOutCapture={() => this.updateHoverState(false)}
        positionData={this.positionData}
        {...this.props}
        {...this.state}
      >
        <Link href={href} passHref>
          <ItemAnchor>
            <ItemPlaceholder
              hovering={isHovering}
              src="https://miro.medium.com/fit/c/256/256/1*KOiaTWFJoDphFszMOeA78Q.jpeg"
            />
            <VideoContainer mayPlayVideo={isHovering}>
              {props => <ItemVideo muted loop src={vidSrc} {...props} />}
            </VideoContainer>
            <ItemTitle hovering={isHovering}>{children}</ItemTitle>
          </ItemAnchor>
        </Link>
      </StyledItem>
    )
  }
}

export const ListItem = withRouter(ListItemWithoutRouter)
