import { PageContext } from '../components/Page'
import { useState } from 'react'
import { Header, HeaderHeading, HeaderVideo } from '../components/Header'
import { Background } from '../components/Common/Background'

export default () => {
  const [isNavigating, setIsNavigating] = useState()
  return (
    <PageContext.Provider value={{ isNavigating, setIsNavigating }}>
      <Background background="#011638">
        <Header>
          <HeaderHeading>Films van mij</HeaderHeading>
          <HeaderVideo src="https://ak2.picdn.net/shutterstock/videos/1025003192/preview/stock-footage-indian-business-woman-team-leader-presenting-project-strategy-showing-ideas-on-whiteboard-in-office.mp4" />
        </Header>
      </Background>
    </PageContext.Provider>
  )
}
