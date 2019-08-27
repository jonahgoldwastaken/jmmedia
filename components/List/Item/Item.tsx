import { css } from 'styled-components'
import { styled } from '../../../theme'

type StyledItemProps = {
  large?: boolean
  highlight?: boolean
}

type ListItemProps = {
  values?: Object
  openHandler: () => void
}

const StyledItem = styled.li<StyledItemProps>`
  position: relative;
  overflow: hidden;
  grid-row: span 1;
  grid-column: span 1;
  text-align: center;
  color: white;
  cursor: pointer;

  ${props =>
    props.large &&
    css`
      grid-column: span 2;
    `}
  ${props =>
    props.highlight &&
    css`
      grid-column: span 3;
      grid-row: span 2;
    `}
`

export const ListItem: React.FunctionComponent<
  ListItemProps & StyledItemProps
> = ({ openHandler, children, large, highlight }) => {
  return (
    <StyledItem onClick={openHandler} large={large} highlight={highlight}>
      {children}
    </StyledItem>
  )
}
