import { NextPage } from 'next'
import { createGlobalStyle, css } from 'styled-components'
import { Fragment } from 'react'

const globalStyles = []

export const withTransition = (el: any, styling: any) => {
  globalStyles.push(createGlobalStyle`
    .page-transition-exit-active {
      ${el} {
        ${css`
          ${styling}
        `}
      }
    }
  `)
  return el
}

export const registerTransitions = (Page: NextPage) => {
  console.log(
    <Fragment>
      {globalStyles.map((Style, i) => (
        <Style key={i} />
      ))}
      <Page />
    </Fragment>
  )
  return (
    <Fragment>
      {globalStyles.map((Style, i) => (
        <Style key={i} />
      ))}
      <Page />
    </Fragment>
  )
}
