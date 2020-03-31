import { NextPage } from 'next'
import Head from 'next/head'
import Background from '../../components/Common/Background'
import {
  Film,
  FilmDetails,
  FilmHero,
  FilmTitle,
} from '../../components/Film/Project'

import Footer from '../../components/Footer'

const Awakening: NextPage = () => {
  return (
    <>
      <Head>
        <title>Awakening - Jonah Meijers</title>
      </Head>
      <Background currentPage="/films/voorstellen">
        <FilmHero>
          <FilmTitle>Even Voorstellen</FilmTitle>
          <FilmDetails>Korte film - 2020</FilmDetails>
          <Film
            poster="https://storage.googleapis.com/filmportfolio/film/voorstellen/placeholder.png"
            src="https://storage.googleapis.com/filmportfolio/film/voorstellen/film.mov"
          />
        </FilmHero>
        <Footer>Aangenaam kennis gemaakt?</Footer>
      </Background>
    </>
  )
}

export default Awakening
