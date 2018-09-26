const getDocumentDpr = () => {
  return document && document.documentElement.getAttribute('data-dpr')
}

export default getDocumentDpr
