import { styled } from '../../../../theme'

export const ItemImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.5);

  @media print {
    display: none;
  }
`
