import Tip from './Tip.vue'
import { pageScroll } from '../../helper/pageScroll.js'

let TipPlugin = {
  install: function (Vue, options) {
    const TipConstructor = Vue.extend(Tip);

    const instance = new TipConstructor({
        el: document.createElement('div')
    });

    const el = instance.$el;

    TipConstructor.prototype.closeTip = function (callback) {

      typeof callback === 'function' && callback();

      pageScroll.unlock();

      el.className = 'im-tip tip-fadeOut';

      // 200ms from Tip.vue file cssName 'fadeOut' animation time
      setTimeout( () => {
        el.parentNode && el.parentNode.removeChild(el);
      }, 200)

    };

    Vue.prototype.$tip = function (options) {
      
      instance.txt = options.txt || '';
      instance.icon = options.icon || 'loading';
      instance.time = ~~options.time || 1800;
      instance.tpl = options.tpl || '';

      el.className = 'im-tip tip-fadeIn';

      document.body.appendChild(el);
      pageScroll.lock();

      setTimeout( () => {
        instance.closeTip();
      }, instance.time)

    }
  }
}

export { TipPlugin }