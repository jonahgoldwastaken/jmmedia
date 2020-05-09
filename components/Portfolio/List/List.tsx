import { useState } from 'react'
import styled from 'styled-components'
import List, { ListItem } from '../../List'
import { HeadingOne } from '../../Text/Headings'
import { ListContext } from './Context'
import { ListFilter } from './Filter'

type PortfolioListProps = {
  heading: string
  ownWork?: boolean
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
  const [currentFilter, setFilter] = useState<ListContext['currentFilter']>(
    'all'
  )
  //TODO: logica voor projecten ophalen komt hier

  return (
    <ListContext.Provider value={{ currentFilter, setFilter }}>
      <ListHeader>
        <HeadingOne noMargin>{heading}</HeadingOne>
        <ListFilter />
      </ListHeader>
      <List>
        <ListItem
          src="https://storage.googleapis.com/filmportfolio/over/profielfoto.jpg"
          href="jonahmeijers.nl"
        >
          Jonah Meijers
        </ListItem>
        <ListItem
          src="https://storage.googleapis.com/filmportfolio/over/profielfoto.jpg"
          href="jonahmeijers.nl"
        >
          Jonah Meijers
        </ListItem>
        <ListItem
          src="https://storage.googleapis.com/filmportfolio/over/profielfoto.jpg"
          href="jonahmeijers.nl"
        >
          Jonah Meijers
        </ListItem>
        <ListItem
          src="https://storage.googleapis.com/filmportfolio/over/profielfoto.jpg"
          href="jonahmeijers.nl"
        >
          Jonah Meijers
        </ListItem>
        <ListItem
          src="https://storage.googleapis.com/filmportfolio/over/profielfoto.jpg"
          href="jonahmeijers.nl"
        >
          Jonah Meijers
        </ListItem>
        <ListItem
          src="https://storage.googleapis.com/filmportfolio/over/profielfoto.jpg"
          href="jonahmeijers.nl"
        >
          Jonah Meijers
        </ListItem>
        <ListItem
          src="https://storage.googleapis.com/filmportfolio/over/profielfoto.jpg"
          href="jonahmeijers.nl"
        >
          Jonah Meijers
        </ListItem>
        <ListItem
          src="https://storage.googleapis.com/filmportfolio/over/profielfoto.jpg"
          href="jonahmeijers.nl"
        >
          Jonah Meijers
        </ListItem>
        <ListItem
          src="https://storage.googleapis.com/filmportfolio/over/profielfoto.jpg"
          href="jonahmeijers.nl"
        >
          Jonah Meijers
        </ListItem>
        <ListItem
          src="https://storage.googleapis.com/filmportfolio/over/profielfoto.jpg"
          href="jonahmeijers.nl"
        >
          Jonah Meijers
        </ListItem>
        <ListItem
          src="https://storage.googleapis.com/filmportfolio/over/profielfoto.jpg"
          href="jonahmeijers.nl"
        >
          Jonah Meijers
        </ListItem>
      </List>
    </ListContext.Provider>
  )
}
