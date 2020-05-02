import { PageTransition } from 'next-page-transitions'
import React, { useEffect } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import styledNormalize from 'styled-normalize'
import styledSanitize from 'styled-sanitize'
import useMedia from 'use-media'
import { darkTheme, lightTheme } from '../theme'
import { logPageViews } from '../utils/analytics'
require('intersection-observer')

const CriticalCSS = createGlobalStyle`
  ${styledNormalize};
  ${styledSanitize};
  body {
    min-height: 100vh;
  }
`

const MyApp = ({ Component, pageProps, router }) => {
  const darkMode: boolean = useMedia('prefers-color-scheme: dark')

  useEffect(() => {
    if (typeof window !== 'undefined') logPageViews()
  }, [])

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
      <link
        rel="stylesheet"
        type="text/css"
        href="https://use.typekit.net/shv4sja.css"
      />
    </>
  )
}

export default MyApp
