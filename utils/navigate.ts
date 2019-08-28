import Router from 'next/router'

const navigate = (url: string, delay: number) =>
  setTimeout(() => Router.push(url), delay)

export default navigate
