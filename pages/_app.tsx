import { PageTransition } from 'next-page-transitions'
import App from 'next/app'
import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import styledNormalize from 'styled-normalize'
import styledSanitize from 'styled-sanitize'
import theme from '../theme'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Merriweather:400,700|Red+Hat+Display:400,500,700&display=swap');
  ${styledNormalize};
  ${styledSanitize};
  body {
    background: black;
    height: 100%;
    overflow: hidden;
  }
`

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <PageTransition timeout={600} classNames="page-transition">
            <Component {...pageProps} key={router.route} />
          </PageTransition>
        </ThemeProvider>
      </>
    )
  }
}

export default MyApp
