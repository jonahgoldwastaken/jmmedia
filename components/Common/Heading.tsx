import { styled } from '../../theme'

export const Heading = styled.h1`
  margin-top: 0;
  font-family: ${props => props.theme.fonts.sans};
  font-size: ${props => props.theme.fontSizes[5]};
  color: ${props => props.theme.colors.primary};
`

// `
//     animation: ${PopInLeft}
//       ${props =>
//         `${props.theme.animation.timing[1]} ${props.theme.animation.curve}`};
//   `
