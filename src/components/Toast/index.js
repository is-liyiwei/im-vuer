import Toast from './Toast.vue'
import { pageScroll } from '../../helper/pageScroll.js'

import { hashChange } from '../../helper/hashChange.js'

let ToastPlugin = {
  install: function (Vue, options) {
    const ToastConstructor = Vue.extend(Toast)

    const instance = new ToastConstructor({
      el: document.createElement('div')
    })

    const el = instance.$el

    ToastConstructor.prototype.closeToast = function (callback) {
      typeof callback === 'function' && callback()

      pageScroll.unlock()

      el.className = `im-toast ${instance.position} toast-fadeOut`

      // 200ms from Toast.vue file cssName 'fadeOut' animation time
      setTimeout(() => {
        el.parentNode && el.parentNode.removeChild(el)
        window.removeEventListener('hashchange', hashChange.bind(this, el))
      }, 200)
    }

    Vue.prototype.$toast = function (options) {
      instance.content = options.content || 'hello world'
      instance.position = options.position || 'bottom'
      instance.time = ~~options.time || 3000

      el.className = `im-toast ${instance.position} toast-fadeIn`

      window.addEventListener('hashchange', hashChange.bind(this, el))

      document.body.appendChild(el)
      pageScroll.lock()

      setTimeout(() => {
        instance.closeToast()
      }, instance.time)
    }
  }
}

export { ToastPlugin }
