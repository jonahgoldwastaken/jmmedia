import Head from 'next/head'
import { useState } from 'react'
import { VideoItem } from '../types/content'

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
    </>
  )
}
