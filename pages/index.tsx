import Head from 'next/head'
import Header from '../components/Header'
import Hero, { HeroHeading, HeroVideo } from '../components/Hero'
import List from '../components/List'
import Popup from '../components/Popup'
import { useState } from 'react'
import { VideoItem } from '../types/content'
import { videoData } from '../data/videodata'
import ListItem, { ItemVideo, ItemHeading } from '../components/List/Item'

export default () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [currentVideo, setCurrentVideo]: [
    VideoItem,
    (video: VideoItem) => void
  ] = useState()

  const handleVideoClick = (video: VideoItem) => () => {
    setCurrentVideo(video)
    setIsPopupOpen(true)
  }

  const handleClosePopupClick = () => {
    setIsPopupOpen(false)
  }

  return (
    <>
      <Head>
        <title>Jonah Meijers</title>
      </Head>
      <Header active={0} />
      <Hero>
        <HeroHeading>Gepassioneerde filmmaker.</HeroHeading>
        <HeroVideo src="https://ak0.picdn.net/shutterstock/videos/1021491520/preview/stock-footage-the-information-on-the-bills-are-fake-placeholder-name-is-use-paying-bills-using-a-laptop.mp4" />
      </Hero>
      <List>
        {videoData.map((video, i) => (
          <ListItem
            key={i}
            openHandler={handleVideoClick(video)}
            highlight={video.highlight}
            large={video.large}
          >
            <ItemVideo
              placeholder={video.placeholder.image}
              src={video.placeholder.video}
            />
            <ItemHeading>{video.title}</ItemHeading>
          </ListItem>
        ))}
      </List>
      {isPopupOpen && (
        <Popup
          closeHandler={handleClosePopupClick}
          video={currentVideo}
        ></Popup>
      )}
    </>
  )
}
