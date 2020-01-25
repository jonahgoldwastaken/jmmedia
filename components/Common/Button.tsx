import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styled } from '../../theme'

type NavButtonProps = {
  onClick?: () => any
  icon: IconProp
  colour?: 'white' | 'black'
  hide?: boolean
}

type StyledButtonProps = {
  colour?: 'white' | 'black'
  hide?: boolean
}

const StyledButton = styled.button<StyledButtonProps>`
  all: unset;
  position: absolute;
  top: ${props => props.theme.space[2]};
  left: ${props => props.theme.space[2]};
  z-index: 999;
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes[1]};
  color: ${props =>
    !props.colour || props.colour === 'white'
      ? props.theme.colours.lightText
      : props.theme.colours.darkText};
  cursor: pointer;
  display: ${props => (props.hide ? 'none' : 'block')};

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    font-size: ${props => props.theme.fontSizes[2]};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    top: ${props => props.theme.space[3]};
    left: ${props => props.theme.space[3]};
    font-size: ${props => props.theme.fontSizes[3]};
  }
`

export const Button: React.FunctionComponent<NavButtonProps> = ({
  icon,
  ...props
}) => (
  <StyledButton {...props}>
    <FontAwesomeIcon icon={icon} />
  </StyledButton>
)
