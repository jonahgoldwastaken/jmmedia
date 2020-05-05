import styled from 'styled-components'
import { useState } from 'react'
import { ListContext } from './Context'
import { ListItem } from './Item'
import { HeadingOne } from '../../Text/Headings'
import { ListFilter } from './Filter'

type PortfolioListProps = {
  heading: string
  ownWork?: boolean
}

const StyledList = styled.ul`
  list-style: none;
  margin: 0 0 ${props => props.theme.spacing[2]};
  padding: 0;
  display: grid;
  grid-auto-columns: 1fr;
  grid-gap: ${props => props.theme.spacing[0]};
  grid-auto-rows: 1fr;

  @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
    grid-template-columns: repeat(2, 1fr);
    /* grid-auto-rows: 14.28125rem; */
  }
  @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
    grid-template-columns: repeat(3, 1fr);
    /* grid-auto-rows: 14.28125rem; */
  }

  @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 14.28125rem;
    grid-gap: ${props => props.theme.spacing[1]};
  }
`

const ListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const List: React.FunctionComponent<PortfolioListProps> = ({
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
      <StyledList>
        <ListItem
          src="https://storage.googleapis.com/filmportfolio/over/profielfoto.jpg"
          alt="Jonah Meijers"
          href="jonahmeijers.nl"
        />
        <ListItem
          src="https://storage.googleapis.com/filmportfolio/over/profielfoto.jpg"
          alt="Jonah Meijers"
          href="jonahmeijers.nl"
        />
        <ListItem
          src="https://storage.googleapis.com/filmportfolio/over/profielfoto.jpg"
          alt="Jonah Meijers"
          href="jonahmeijers.nl"
        />
        <ListItem
          src="https://storage.googleapis.com/filmportfolio/over/profielfoto.jpg"
          alt="Jonah Meijers"
          href="jonahmeijers.nl"
        />
        <ListItem
          src="https://storage.googleapis.com/filmportfolio/over/profielfoto.jpg"
          alt="Jonah Meijers"
          href="jonahmeijers.nl"
        />
        <ListItem
          src="https://storage.googleapis.com/filmportfolio/over/profielfoto.jpg"
          alt="Jonah Meijers"
          href="jonahmeijers.nl"
        />
        <ListItem
          src="https://storage.googleapis.com/filmportfolio/over/profielfoto.jpg"
          alt="Jonah Meijers"
          href="jonahmeijers.nl"
        />
        <ListItem
          src="https://storage.googleapis.com/filmportfolio/over/profielfoto.jpg"
          alt="Jonah Meijers"
          href="jonahmeijers.nl"
        />
        <ListItem
          src="https://storage.googleapis.com/filmportfolio/over/profielfoto.jpg"
          alt="Jonah Meijers"
          href="jonahmeijers.nl"
        />
        <ListItem
          src="https://storage.googleapis.com/filmportfolio/over/profielfoto.jpg"
          alt="Jonah Meijers"
          href="jonahmeijers.nl"
        />
        <ListItem
          src="https://storage.googleapis.com/filmportfolio/over/profielfoto.jpg"
          alt="Jonah Meijers"
          href="jonahmeijers.nl"
        />
      </StyledList>
    </ListContext.Provider>
  )
}
