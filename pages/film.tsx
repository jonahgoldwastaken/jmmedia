import { PageHeading, PageBackground, PageContext } from '../components/Page'
import { useState } from 'react'

export default () => {
  const [isNavigating, setIsNavigating] = useState()
  return (
    <PageContext.Provider value={{ isNavigating, setIsNavigating }}>
      <PageBackground background="#011638">
        <PageHeading>Hoi</PageHeading>
      </PageBackground>
    </PageContext.Provider>
  )
}
