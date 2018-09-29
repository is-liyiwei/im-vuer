<template>
  <div class="im-previewImage">
    <span style="position: fixed;top: 80vh;left: 10vh;">{{log}}</span>
    <!-- <img v-for="(v, k) in list" :key="k" :src="v.url"> -->
    <img src="http://img15.3lian.com/2016/h1/75/d/210.jpg" alt="" :style="imgStyle">
    <img src="http://img15.3lian.com/2016/h1/75/d/211.jpg" alt="" :style="imgStyle">
    <img src="http://img15.3lian.com/2016/h1/75/d/212.jpg" alt="" :style="imgStyle">
    <img src="http://img15.3lian.com/2016/h1/75/d/213.jpg" alt="" :style="imgStyle">
  </div>
</template>

<script>
import AlloyFinger from '../../lib/AlloyFinger'
// import AlloyFingerVue from '../../lib/AlloyFingerVue'
import AlloyTransform from '../../lib/AlloyTransform'

export default {
  name: 'im-preview-image',
  data () {
    return {
      log: 'tes222t',
      initScale: 1,
      initialValue: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: 0,
        height: 0,
        x: 0,
        y: 0
      },
      imgW: '100%',
      imgH: '100%',
      imgScale: 0
    }
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  components: {

  },
  created () {

  },
  mounted () {
    this.init()
  },
  computed: {
    imgStyle () {
      return {
        width: this.imgW,
        height: this.imgH
      }
    }
  },
  methods: {
    init () {
      const dom = this.$el
      AlloyTransform(dom)
      var af = new AlloyFinger(dom, {
        touchStart: () => {
          this.initialValue = dom.getBoundingClientRect()
        },
        touchMove: () => {

        },
        touchEnd: () => {
          const {
            top,
            right,
            bottom,
            left,
            width,
            height,
            x,
            y
          } = this.initialValue

          const touchEndValue = dom.getBoundingClientRect()

          this.log = touchEndValue.left + '&' + touchEndValue.width

          if (touchEndValue.left < touchEndValue.width / 2) {
            dom.style.transition = '300ms'
            dom.translateX = 750
          }
          if (touchEndValue.top > 0) {
            dom.style.transition = '300ms'
            dom.translateY = 0
          }
          if (touchEndValue.right - touchEndValue.width < 0) {
            dom.style.transition = '300ms'
            dom.translateX = 0
          }
          if (touchEndValue.bottom < bottom) {
            dom.style.transition = '300ms'
            dom.translateY = 0
          }
          setTimeout(() => {
            dom.style.transition = '0s'
            console.log(touchEndValue)
          }, 300)
        },
        touchCancel: () => {

        },
        multipointStart: () => {
          this.initScale = dom.scaleX
        },
        multipointEnd: () => {

        },
        tap: () => {

        },
        doubleTap: (evt) => {

        },
        longTap: () => {

        },
        singleTap: () => {

        },
        rotate: (evt) => {
          // console.log(evt.angle)
          // this.log = evt.angle
        },
        pinch: (evt) => {
          // this.imgScale = this.initScale * evt.zoom
          // if (this.imgScale < 1) {
          //   this.imgScale = 1
          // }
          // if (this.imgScale > 2) {
          //   this.imgScale = 2
          // }
          // this.log = this.imgScale
          // dom.scaleX = dom.scaleY = this.imgScale
        },
        pressMove: (evt) => {
          // console.log(evt.deltaX)
          // console.log(evt.deltaY)
          // this.log = evt.deltaX
          dom.translateX += evt.deltaX
          // dom.translateY += evt.deltaY
          evt.preventDefault()
        },
        swipe: (evt) => {
          // console.log('swipe' + evt.direction)
          // this.log = evt.direction
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../../less/base.less';

.@{prefixClass} {
  &-previewImage {
    display: flex;
    flex-wrap: nowrap;
    white-space: nowrap;
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    img {
      width: 100%;
    }
  }
}
</style>
