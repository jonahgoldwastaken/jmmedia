import styled, { css } from 'styled-components'
import { BaseRunning } from '../Text'

type FooterLinkProps = {
  colour: 'primary' | 'secondary'
}

export const FooterLink = styled.a<FooterLinkProps>`
  ${BaseRunning};
  display: block;
  height: calc(${props => props.theme.heights[1]} / 2);
  padding: ${props => props.theme.spacing[1]};
  flex: 1;
  font-weight: ${props => props.theme.fontWeights[1]};
  font-size: ${props => props.theme.fontSizes[2]};
  text-align: center;
  line-height: calc(${props => props.theme.heights[1]} / 2 - ${props =>
  props.theme.fontSizes[2]});

  
  &:not(:hover) {
    text-decoration: none;
  }

  ${props =>
    props.colour === 'primary'
      ? css`
          background: ${props.theme.colours.primary};
          color: ${props.theme.colours.tertiary};
        `
      : css`
          background: ${props.theme.colours.tertiary};
          color: ${props.theme.colours.primary};
        `}

  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    height: ${props => props.theme.heights[1]};
    line-height: calc(${props => props.theme.heights[1]} - ${props =>
  props.theme.fontSizes[2]});
  }
`
