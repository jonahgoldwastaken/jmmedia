// import { PageTransition } from 'next-page-transitions'
import App from 'next/app'
import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import styledNormalize from 'styled-normalize'
import styledSanitize from 'styled-sanitize'
import theme from '../theme'
import { logPageViews } from '../utils/analytics'
require('intersection-observer')

const CriticalCSS = createGlobalStyle`
  ${styledNormalize};
  ${styledSanitize};
  body {
    min-height: 100vh;
  }
`

class MyApp extends App {
  componentDidMount() {
    if (typeof window !== 'undefined') logPageViews()
  }

  render() {
    const { Component, pageProps, router } = this.props
    return (
      <>
        <CriticalCSS />
        <ThemeProvider theme={theme}>
          {/* <PageTransition
            skipInitialTransition
            timeout={400}
            classNames="page-transition"
          > */}
          <Component {...pageProps} key={router.route} />
          {/* </PageTransition> */}
        </ThemeProvider>
        <link rel="stylesheet" href="https://use.typekit.net/qpj1zjq.css" />
      </>
    )
  }
}

export default MyApp
