import Image from '../Image'
import styled from 'styled-components'

type ListItemProps = {
  href: string
  src: string
  children: string
}

const StyledLI = styled.li`
  display: block;
  grid-column: span 1;
  grid-row: span 1;
  width: 100%;
  height: 100%;
  a:hover q {
    text-decoration: underline;
  }
`

export const ListItem: React.FunctionComponent<ListItemProps> = ({
  href,
  src,
  children,
}) => (
  <StyledLI>
    <a href={href}>
      <Image src={src} alt={children} />
    </a>
  </StyledLI>
)
