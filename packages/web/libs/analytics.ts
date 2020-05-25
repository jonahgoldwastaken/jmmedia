import Router from 'next/router'
import ReactGA from 'react-ga'

const setAnalyticsSetting = (value: string) => {
  localStorage.setItem('_analytics', value)
}

const getAnalyticsSetting = () => {
  const val = localStorage.getItem('_analytics')
  if (typeof val === 'string') {
    return JSON.parse(val)
  }
  return false
}

export const initGA = () => {
  console.log('Analytics initialised')
  setAnalyticsSetting('true')
  ReactGA.initialize('UA-152045785-1')
}

export const disableGA = () => {
  setAnalyticsSetting('false')
}

export const logPageViews = () => {
  if (typeof localStorage !== 'undefined') {
    if (getAnalyticsSetting())
      Router.events.on('routeChangeComplete', () => {
        logPageView()
      })
  }
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

export const logEvent = (category = '', action = '') => {
  if (category && action) {
    ReactGA.event({ category, action })
  }
}

export const logException = (description = '', fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal })
  }
}
