import Toast from './Toast.vue'
import { pageScroll } from '../../helper/pageScroll.js'

let ToastPlugin = {
  install: function (Vue, options) {
    const ToastConstructor = Vue.extend(Toast);

    const instance = new ToastConstructor({
        el: document.createElement('div')
    });

    const el = instance.$el;

    ToastConstructor.prototype.closeToast = function (callback) {

      typeof callback === 'function' && callback();

      pageScroll.unlock();

      el.className = `im-toast ${instance.position} toast-fadeOut`;

      // 200ms from Toast.vue file cssName 'fadeOut' animation time
      setTimeout( () => {
        el.parentNode && el.parentNode.removeChild(el);
      }, 200)

    };

    Vue.prototype.$toast = function (options) {
      
      instance.content = options.content || 'hello world';
      instance.position = options.position || 'bottom';
      instance.time = ~~options.time || 3000;

      el.className = `im-toast ${instance.position} toast-fadeIn`;

      document.body.appendChild(el);
      pageScroll.lock();

      setTimeout( () => {
        instance.closeToast();
      }, instance.time)

    }
  }
}

export { ToastPlugin }
