import PreviewImage from './PreviewImage.vue'

import AlloyFinger from '@/lib/AlloyFinger'
import AlloyFingerVue from '@/lib/AlloyFingerVue'
import Transform from '@/lib/AlloyTransform'

function nonNegativeInteger (num) {
  return /^(0|[1-9]\d*)$/.test(String(num))
}

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
      let count = 0

      if (!nonNegativeInteger(options.currentIndex) || options.imgArr.length - 1 < options.currentIndex) {
        console.warn('currentIndex More than imgArr length')
      }

      new Promise((resolve, reject) => {
        for (let i = 0; i < options.imgArr.length; i++) {
          let imgDom = new Image()
          imgDom.src = options.imgArr[i].src
          imgDom.onload = function () {
            if (this.width >= this.height) {
              options.imgArr[i].imgDirection = 'horizontal'
            } else {
              options.imgArr[i].imgDirection = 'vertical'
            }
            imgDom.onload = null
            imgDom = null
            count++
            if (count === options.imgArr.length) {
              resolve()
            }
          }
        }
      }).then(res => {
        /* eslint-disable no-new */
        new PreviewImageConstructor({
          el: document.createElement('div'),
          data () {
            return {
              imgArr: options.imgArr || [],
              // 初始的图片index
              currentIndex: options.currentIndex || 0,
              // 缩放倍数
              currScale: options.currScale || 2,
              // 决定是否swipe触发边界值
              targetSwipeBoundaryValue: options.targetSwipeBoundaryValue || 130,
              // 动画时间
              animationTime: options.animationTime || 300
            }
          }
        })
      })
    }
  }
}

export { PreviewImagePlugin }
