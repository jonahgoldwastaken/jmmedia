import { forwardRef, HTMLProps, useContext } from 'react'
import styled, { css } from 'styled-components'
import { SwipeInRight } from '../../../Animations'
import { LinkWrapperContext } from '../../../Common/Link'
import { Anchor, BaseAnchorProps } from '../../../Common/Link/Anchor'

type StyledAnchorProps = BaseAnchorProps & {
  loaded: boolean
  inView?: boolean
}

type ItemAnchorProps = {
  loaded: boolean
  inView?: boolean
}

export const StyledAnchor = styled(Anchor)<StyledAnchorProps>`
  display: grid;
  position: relative;
  min-width: 32rem;
  min-height: 18rem;
  margin-bottom: 2.5rem;
  z-index: 10;
  justify-content: center;
  align-items: center;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  font-size: ${props => props.theme.fontSizes[1]};
  opacity: 0;

  &:after {
    content: '';
    opacity: 0;
    background: ${props => props.theme.pageColours[props.href]};
  }

  ${props =>
    props.loaded &&
    props.inView &&
    css`
      opacity: 1;
      animation: ${SwipeInRight} ${props.theme.animation.timing[2]}
        ${props.theme.animation.curve} forwards;
    `}
`

const RefAnchor = forwardRef<
  HTMLAnchorElement,
  StyledAnchorProps & HTMLProps<HTMLAnchorElement>
  //@ts-ignore
>((props, ref) => <StyledAnchor {...props} ref={ref} />)

export const ItemAnchor: React.FunctionComponent<ItemAnchorProps> = props => {
  const { active, ref, positionData, href, setIsHovering } = useContext(
    LinkWrapperContext
  )
  const contextItems = {
    active,
    ref,
    positionData,
    href,
  }

  return (
    <RefAnchor
      onMouseOverCapture={() => setIsHovering(true)}
      onMouseOutCapture={() => setIsHovering(false)}
      {...contextItems}
      {...props}
    />
  )
}
