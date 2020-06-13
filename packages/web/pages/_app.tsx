require('intersection-observer')
import MediaQueryContext from 'components/MediaQueryContext'
import { AnimatePresence } from 'framer-motion'
import { logPageViews } from 'libs/analytics'
import { NextPage } from 'next'
import { AppContext, AppInitialProps } from 'next/app'
import { useRouter } from 'next/router'
import React, { useEffect, useMemo } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import styledNormalize from 'styled-normalize'
import styledSanitize from 'styled-sanitize'
import { darkTheme, lightTheme } from 'theme'
import useMedia from 'use-media'

const CriticalCSS = createGlobalStyle`
  ${styledNormalize};
  ${styledSanitize};
`

const handleAnimationCompletion = () => {
  if (typeof window !== 'undefined') window.scrollTo({ top: 0 })
}

const MyApp: NextPage<AppContext & AppInitialProps> = ({
  Component,
  pageProps,
}) => {
  const router = useRouter()
  const lightMode: boolean = useMedia('(prefers-color-scheme: light)')
  const darkMode: boolean = useMedia('(prefers-color-scheme: dark)')
  const prefersReducedMotion: boolean = useMedia(
    'prefers-reduced-motion: reduce'
  )
  const MediaQueryContextValue = useMemo<MediaQueryContext>(
    () => ({
      darkMode,
      lightMode,
      prefersReducedMotion,
    }),
    [lightMode, darkMode, prefersReducedMotion]
  )

  useEffect(() => {
    if (typeof window !== 'undefined') logPageViews()
  }, [])

  return (
    <>
      <CriticalCSS />
      <MediaQueryContext.Provider value={MediaQueryContextValue}>
        <ThemeProvider
          theme={() => {
            if (darkMode) return darkTheme
            else return lightTheme
          }}
        >
          <AnimatePresence
            exitBeforeEnter
            onExitComplete={handleAnimationCompletion}
          >
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </ThemeProvider>
      </MediaQueryContext.Provider>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://use.typekit.net/shv4sja.css"
      />
    </>
  )
}

export default MyApp
