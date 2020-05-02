import Image from '../../Image'
import styled from 'styled-components'

type ListItemProps = {
  href: string
  src: string
  alt: string
}

const StyledLI = styled.li`
  grid-column: span 1;
  grid-row: span 1;
  a:hover q {
    text-decoration: underline;
  }
`

export const ListItem: React.FunctionComponent<ListItemProps> = ({
  href,
  src,
  alt,
}) => (
  <StyledLI>
    <a href={href}>
      <Image src={src} alt={alt} />
    </a>
  </StyledLI>
)
