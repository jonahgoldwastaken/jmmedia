import { PageTransition } from 'next-page-transitions'
import App from 'next/app'
import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import styledNormalize from 'styled-normalize'
import styledSanitize from 'styled-sanitize'
import useMedia from 'use-media'
import { darkTheme, lightTheme } from '../theme'
import { logPageViews } from '../utils/analytics'
require('intersection-observer')

const NonCriticalCSS = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway:400,500,700|Red+Hat+Display:400,500,700&display=swap');
`

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
    const darkMode: boolean = useMedia('prefers-color-scheme: dark')
    return (
      <>
        <CriticalCSS />
        {darkMode ? (
          <ThemeProvider theme={darkTheme}>
            {' '}
            <PageTransition
              skipInitialTransition
              timeout={400}
              classNames="page-transition"
            >
              <Component {...pageProps} key={router.route} />
            </PageTransition>
          </ThemeProvider>
        ) : (
          <ThemeProvider theme={lightTheme}>
            {' '}
            <PageTransition
              skipInitialTransition
              timeout={400}
              classNames="page-transition"
            >
              <Component {...pageProps} key={router.route} />
            </PageTransition>
          </ThemeProvider>
        )}
        <NonCriticalCSS />
      </>
    )
  }
}

export default MyApp
