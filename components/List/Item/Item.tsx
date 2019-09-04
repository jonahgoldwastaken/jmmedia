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
import { VideoContainer } from '../../Common'
import { positionData } from '../../Hero/Nav/Link/Anchor'
import { ItemPlaceholder } from './Placholder'
import { ItemTitle } from './Title'
import { ItemVideo } from './Video'
import { ItemAnchor } from './Anchor'

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
  positionData: positionData
}

const openAnimations = [CurtainOpenHorizontal, CurtainOpenVertical]

const closeAnimation = [CurtainCloseHorizontal, CurtainCloseVertical]

const clickAnimationDesktop = (props: any) =>
  keyframes`
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

  ${props =>
    props.active
      ? css`
          .page-transition-exit-active & {
            display: block;
            position: fixed;
            left: ${props.positionData.x}px;
            top: ${props.positionData.y}px;
            width: ${props.positionData.width}px;
            height: ${props.positionData.height}px;
            z-index: 1;
            animation: ${clickAnimationDesktop}
              ${props.theme.animation.timing[1]} ${props.theme.animation.curve}
              ${props.theme.animation.timing[1]} forwards;
            background: ${props.theme.pageColours[props.href]};

            img,
            video {
              opacity: 0;
              transition: opacity ${props.theme.animation.timing[0]}
                ${props.theme.animation.curve};
            }
          }
        `
      : css`
          .page-transition-exit-active & {
            animation: ${animationChooser(closeAnimation)}
              ${props.theme.animation.timing[0]} ${props.theme.animation.curve}
              forwards;
          }
        `}
`

class ListItemWithoutRouter extends Component<ItemProps, ItemState> {
  itemRef: RefObject<HTMLLIElement>

  constructor(props) {
    super(props)
    this.state = {
      isHovering: false,
      active: false,
      positionData: undefined,
    }
    this.itemRef = createRef<HTMLLIElement>()
  }

  componentDidUpdate() {
    const { router, href } = this.props
    const { active } = this.state

    if (router.route === href && !active) {
      this.setState({
        active: true,
        positionData: {
          x: this.itemRef.current.offsetLeft,
          y: this.itemRef.current.offsetTop,
          width: this.itemRef.current.offsetWidth,
          height: this.itemRef.current.offsetHeight,
        },
      })
    }
  }

  updateHoverState(bool: boolean) {
    return () =>
      this.setState({
        isHovering: bool,
      })
  }

  render() {
    const { href, vidSrc, children } = this.props
    const { isHovering } = this.state

    return (
      <StyledItem
        ref={this.itemRef}
        onMouseOverCapture={this.updateHoverState(true)}
        onMouseOutCapture={this.updateHoverState(false)}
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
