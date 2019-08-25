import React from 'react'
import App from 'next/app'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Merriweather:400,700|Red+Hat+Display:400,500,700&display=swap');
  body {
    all: unset;
    height: 100vh;
  }
`

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp
