import styled, { createGlobalStyle } from 'styled-components'
import Head from 'next/head'
const PlaceholderBody = styled.div`
  background: black;
  color: white !important;
  font-family: 'Red Hat Display', sans-serif;
  padding: 0 8rem;
  @media screen and (max-width: 80rem) {
    padding: 0 4rem;
  }
  @media screen and (max-width: 50rem) {
    padding: 0 2rem;
  }
  @media screen and (max-width: 20rem) {
    padding: 0 0.5rem;
  }
  padding-top: 4rem;
  @media screen and (min-height: 60rem) {
    padding-top: 10vh;
  }
  @media screen and (min-width: 50rem) {
    padding-top: 10vh;
  }
`

const PlaceholderGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 50rem) {
    grid-template-columns: 1fr;
  }
`

const PlaceholderList = styled.ul`
  list-style: none;
  padding: 0;
`

const GlobalStyle = createGlobalStyle`
  body {
    all: unset;
    background: black;
  }
  h1 {
    font-size: 4.5rem;
    margin-bottom: 1rem;
    @media screen and (max-width: 40rem) {
      font-size: 3rem;
    }
  }
  h2 {
    margin: 1rem 0;
  }
  * {
    color: white;
  }
  li {
    margin-bottom: 0.5rem;
  }
`

export default () => (
  <>
    <GlobalStyle />
    <Head>
      <title>Jonah Meijers</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Red+Hat+Display:400,500,700&display=swap"
      />
      <style />
    </Head>
    <PlaceholderBody>
      <h1>Jonah Meijers</h1>
      <p>
        <a href="https://www.cmd-amsterdam.nl">CMD</a> student omgetoverd tot
        enthousiaste filmmaker met een site in aanbouw.
      </p>
      <PlaceholderGrid>
        <section>
          <h2>Video's waar ik aan heb gewerkt</h2>
          <PlaceholderList>
            <li>
              <a href="https://youtu.be/KThjqG6xS-Y">
                [Conceptvideo] Concept om sociaal contact in de trein te
                vermeerderen (2018)
              </a>
            </li>
            <li>
              <a href="https://vimeo.com/264281094">
                [Productvideo] Case Video over PlantApp (2018)
              </a>
            </li>
            <li>
              <a href="https://vimeo.com/264280045">
                [Interview] Interview met een CMD professional (2018)
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/watch?v=nWusOohzLjA">
                [Productvideo] Awakening - The Sound of Sleep (2017)
              </a>
            </li>
            <li>
              <a href="https://youtu.be/oBqNk5x92EU">
                [Filmtrailer] Het hemelse gerecht Trailer (2015)
              </a>
            </li>
            <li>
              <a href="https://youtu.be/nbAf_VviRaE">
                [Schoolopdracht] Video over Charity:Water (2015)
              </a>
            </li>
          </PlaceholderList>
        </section>
        <section>
          <h2>Geïnteresseerd om samen te werken?</h2>
          <PlaceholderList>
            <li>
              <a href="mailto:info@jonahmeijers.nl">Stuur een mailtje</a>
            </li>
            <li>
              <a href="tel:+31623267536">Geef een belletje</a>
            </li>
            <li>
              <a href="https://www.instagram.com/jonahgold.mp4/">
                Zoek me op op Instagram
              </a>
            </li>
          </PlaceholderList>
        </section>
      </PlaceholderGrid>
    </PlaceholderBody>
  </>
)
