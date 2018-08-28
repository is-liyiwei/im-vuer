import ActionSheet from './ActionSheet.vue'
import { pageScroll } from '../../helper/pageScroll.js'

import { hashChange } from '../../helper/hashChange.js'

function noop () {

}

let ActionSheetPlugin = {
  install: function (Vue, options) {
    const ActionSheetConstructor = Vue.extend(ActionSheet)

    const instance = new ActionSheetConstructor({
      el: document.createElement('div')
    })

    let el = instance.$el

    let firstChild = el.firstChild

    ActionSheetConstructor.prototype.closeActionSheet = function (callback) {
      typeof callback === 'function' && callback()

      instance.complete()

      pageScroll.unlock()

      firstChild.className = 'im-action-sheet-box ' + instance.styleFor + ' action-sheet-fadeOut'

      // 200ms from ActionSheet.vue file cssName 'fadeOut' animation time
      setTimeout(() => {
        el.parentNode && el.parentNode.removeChild(el)
        window.removeEventListener('hashchange', hashChange.bind(this, el))
      }, 200)
    }

    Vue.prototype.$actionSheet = function (options) {
      instance.hasCancel = options.hasCancel || false
      instance.styleFor = +['ios', 'android'].indexOf(options.styleFor) !== -1 ? options.styleFor : 'android'
      instance.opts = options.opts || [{
        txt: 'Hello World',
        cb: () => {}
      }, {
        txt: 'Hello World',
        cb: () => {}
      }]
      instance.complete = options.complete || noop

      firstChild.className = 'im-action-sheet-box ' + instance.styleFor + ' action-sheet-fadeIn'

      window.addEventListener('hashchange', hashChange.bind(this, el))

      document.body.appendChild(el)
      pageScroll.lock()
    }
  }
}

export { ActionSheetPlugin }
