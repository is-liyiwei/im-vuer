import PreviewImage from './PreviewImage.vue'

import Vue from 'vue'
import AlloyFinger from '@/lib/AlloyFinger'
import AlloyFingerVue from '@/lib/AlloyFingerVue'
import Transform from '@/lib/AlloyTransform'

let PreviewImagePlugin = {
  install (Vue, options) {

    Vue.directive('transform', {
      inserted: el => {
        Transform(el)
      }
    })

    Vue.use(AlloyFingerVue, {
      AlloyFinger
    })

    const PreviewImageConstructor = Vue.extend(PreviewImage)

    PreviewImageConstructor.prototype.$closePreviewImage = function (options) {
      const el = this.$el
      el.parentNode && el.parentNode.removeChild(el)
    }


    Vue.prototype.$openPreviewImage = function (options) {
      
      const instance = new PreviewImageConstructor({
        el: document.createElement('div'),
        data () {
          return {
            imgArr: options.imgArr || [],
            currentIndex: options.currentIndex || 0
          }
        }
      })

      const el = instance.$el

      document.body.appendChild(el)

      el.addEventListener('click', (e) => {
        if (e.target.tagName !== 'IMG') {
          instance.$closePreviewImage()
        }
      })
    }
  }
}

export { PreviewImagePlugin }
