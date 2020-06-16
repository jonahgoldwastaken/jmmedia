const getDocumentFontSize = () =>
  typeof document !== 'undefined'
    ? parseFloat(getComputedStyle(document.documentElement).fontSize)
    : 1

export default getDocumentFontSize
