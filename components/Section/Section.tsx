import { darken, lighten } from 'polished'
import { styled } from '../../theme'
import { BackgroundContext } from '../Common'

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
