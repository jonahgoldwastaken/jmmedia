import styled from 'styled-components'
import { ImageQuote } from './Quote'
const StyledImage = styled.img``

export const Image: React.FunctionComponent = () => (
  <div>
    <StyledImage />
    <ImageQuote />
  </div>
)
