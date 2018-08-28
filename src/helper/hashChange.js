import { pageScroll } from './pageScroll.js'

const hashChange = function (el) {
  pageScroll.unlock()

  el.parentNode && el.parentNode.removeChild(el)
}

export { hashChange }
