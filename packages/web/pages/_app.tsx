require('intersection-observer')
import { PageTransition } from 'next-page-transitions'
import React, { useEffect, useMemo } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import styledNormalize from 'styled-normalize'
import styledSanitize from 'styled-sanitize'
import useMedia from 'use-media'
import MediaQueryContext from 'components/MediaQueryContext'
import { darkTheme, lightTheme } from 'theme'
import { logPageViews } from 'libs/analytics'
import { NextPage } from 'next'
import { AppContext, AppInitialProps } from 'next/app'

const CriticalCSS = createGlobalStyle`
  ${styledNormalize};
  ${styledSanitize};
`

const MyApp: NextPage<AppContext & AppInitialProps> = ({
  Component,
  pageProps,
  router,
}) => {
  const lightMode: boolean = useMedia('(prefers-color-scheme: light)')
  const prefersReducedMotion: boolean = useMedia(
    'prefers-reduced-motion: reduce'
  )
  const MediaQueryContextValue = useMemo<MediaQueryContext>(
    () => ({
      lightMode,
      prefersReducedMotion,
    }),
    [lightMode, prefersReducedMotion]
  )

  useEffect(() => {
    if (typeof window !== 'undefined') logPageViews()
  }, [])

  return (
    <MediaQueryContext.Provider value={MediaQueryContextValue}>
      <ThemeProvider
        theme={MediaQueryContextValue.lightMode ? lightTheme : darkTheme}
      >
        <CriticalCSS />{' '}
        <PageTransition
          skipInitialTransition
          timeout={400}
          classNames="page-transition"
        >
          <Component {...pageProps} key={router.route} />
        </PageTransition>
      </ThemeProvider>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://use.typekit.net/shv4sja.css"
      />
    </MediaQueryContext.Provider>
  )
}

export default MyApp
