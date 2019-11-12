import ReactGA from 'react-ga'
import Router from 'next/router'

export const initGA = () => {
  console.log('Analytics initialised')
  ReactGA.initialize('UA-152045785-1')
}
export const logPageViews = () => {
  Router.events.on('routeChangeComplete', url => {
    logPageView()
  })
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
