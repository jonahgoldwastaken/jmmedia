import styled from 'styled-components'
import List, { ListItem } from '../../List'
import { HeadingOne } from '../../Text/Headings'
import { ListContext } from './Context'
import { ListFilter } from './Filter'
import { useProjects } from './useProjects'

type PortfolioListProps = {
  heading: string
}

const ListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.spacing[1]};
`

export const PortfolioList: React.FunctionComponent<PortfolioListProps> = ({
  heading,
}) => {
  const [projectItems, filter, setFilter] = useProjects({
    filter: 'all',
  })

  return (
    <ListContext.Provider value={{ currentFilter: filter, setFilter }}>
      <ListHeader>
        <HeadingOne noMargin>{heading}</HeadingOne>
        <ListFilter />
      </ListHeader>
      <List>
        {projectItems?.map(item => (
          <ListItem
            document={'/project/[slug]'}
            key={item._id}
            src={item.content[0].content[0]}
            href={`/project/${item.slug}`}
          >
            {item.title}
          </ListItem>
        ))}
      </List>
    </ListContext.Provider>
  )
}
