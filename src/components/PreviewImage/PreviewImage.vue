<template>
  <transition name="vuer-fade-in">
    <div class="im-previewImage">
      <template v-for="(v, k) in imgArr">
        <div id="container-horizontal" v-if="v.imgDirection === 'horizontal'">
          <img
            v-transform
            v-finger:pinch="handlePinch"
            v-finger:multipoint-start="handleMultipointStart"
            v-finger:press-move="handlePressMove"
            v-finger:touch-start="handleTouchStart"
            v-finger:touch-end="handleTouchEnd"
            v-finger:double-tap="handleDoubleTap"
            v-finger:rotate="handleRotate"
            id="box-horizontal"
            :src="v.src">
        </div>

        <div id="container-vertical" v-else>
          <img
            v-transform
            v-finger:pinch="handlePinch"
            v-finger:multipoint-start="handleMultipointStart"
            v-finger:press-move="handlePressMove"
            v-finger:touch-start="handleTouchStart"
            v-finger:touch-end="handleTouchEnd"
            v-finger:double-tap="handleDoubleTap"
            v-finger:rotate="handleRotate"
            id="box-vertical"
            :src="v.src">
        </div>
      </template>
    </div>
  </transition>
</template>

<script>
import To from '@/lib/AlloyTo'

export default {
  name: 'im-preview-image',
  data () {
    return {
      pressMoveStatus: false
    }
  },
  props: {
    // 拖动边界触发值
    targetNum: {
      type: Number,
      default: 30
    },
    // 放大的系数
    currScale: {
      type: Number,
      default: 2
    },
    // 动画时间
    animationTime: {
      type: Number,
      default: 300
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {
    getCriticalX (target, container) {
      return (target.getBoundingClientRect().width - container.getBoundingClientRect().width) / 2
    },
    getCriticalY (target, container) {
      return (target.getBoundingClientRect().height - container.getBoundingClientRect().height) / 2
    },
    handleMultipointStart (e) {
      // this.imgEl = e.target
      // this.currentScale = this.imgEl.scaleX
    },
    handlePressMove (e) {
      e.preventDefault()
      this.pressMoveStatus = true
      this.imgEl = e.target
      let el = this.imgEl
      let container = this.imgEl.parentElement

      // 这个3是因为css布局采用全屏幕，3等分了，有这样一段calc(100% / 3)
      let elMargin = window.innerWidth / 3 / this.currScale

      this.criticalX = this.getCriticalX(el, container)
      this.criticalY = this.getCriticalY(el, container)

      if (el.translateX - this.criticalX - elMargin > this.targetNum * el.scaleX) {
        console.log('左边拉动')
        console.log(e.deltaX)
      }
      if (el.translateX - (-this.criticalX) - (-elMargin) < -this.targetNum * el.scaleX) {
        console.log('右边拉动')
        console.log(e.deltaX)
      }

      el.translateX += e.deltaX
      el.translateY += e.deltaY
    },
    handleDoubleTap (e) {
      this.imgEl = e.target
      let el = this.imgEl
      if (el.scaleX === this.currScale) {
        new To(el, 'scaleX', 1, this.animationTime)
        new To(el, 'scaleY', 1, this.animationTime)
        setTimeout(() => {
          new To(el, 'translateX', 0, this.animationTime)
          new To(el, 'translateY', 0, this.animationTime)
        }, 0)
      } else {
        let clickPointXDistanceSelfLeft = e.changedTouches['0'].clientX - el.getBoundingClientRect().x
        let clickPointYDistanceSelfTop = e.changedTouches['0'].clientY - el.getBoundingClientRect().y

        let diffX = (clickPointXDistanceSelfLeft - el.getBoundingClientRect().width / 2) * (this.currScale - 1)

        let diffY = (clickPointYDistanceSelfTop - el.getBoundingClientRect().height / 2) * (this.currScale - 1)

        new To(el, 'scaleX', this.currScale, this.animationTime)
        new To(el, 'scaleY', this.currScale, this.animationTime)
        setTimeout(() => {
          new To(el, 'translateX', -diffX, this.animationTime)
          new To(el, 'translateY', -diffY, this.animationTime)
        }, 0)
      }
    },
    handleTouchStart (e) {

    },
    handleTouchEnd (e) {
      this.imgEl = e.target
      let el = this.imgEl
      if (el.width > el.height) {
        // console.log('horizontal')

        new To(el, 'translateY', 0, this.animationTime)

        if (el.translateX > this.criticalX && this.pressMoveStatus) {
          new To(el, 'translateX', this.criticalX, this.animationTime)
          this.pressMoveStatus = false
        }
        if (el.translateX < -this.criticalX && this.pressMoveStatus) {
          new To(el, 'translateX', -this.criticalX, this.animationTime)
          this.pressMoveStatus = false
        }
      } else {
        // console.log('vertical')

        new To(el, 'translateX', 0, this.animationTime)
        
        if (el.translateY > this.criticalY && this.pressMoveStatus) {
          new To(el, 'translateY', this.criticalY, this.animationTime)
          this.pressMoveStatus = false
        }
        if (el.translateY < -this.criticalY && this.pressMoveStatus) {
          new To(el, 'translateY', -this.criticalY, this.animationTime)
          this.pressMoveStatus = false
        }
      }
    },
    handleRotate (e, el) {
      // this.imgEl = e.target
      // this.imgEl.rotateZ += e.angle
    },
    handlePinch (e, el) {
      // this.imgEl = e.target
      // this.imgEl.scaleX = this.imgEl.scaleY = this.currentScale * e.zoom
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../../less/base.less';


.@{prefixClass} {
  &-previewImage {
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, .6);
    top: 0;
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    * {
      margin: 0;
      padding: 0;
    }
    #container-horizontal {
      width: 100%;
      height: 100vh;
      overflow: hidden;
      position: relative;
      background-color: rgba(0, 0, 0, .6);
    }
    #container-vertical {
      width: 100%;
      height: 100vh;
      /*height: 50vh;*/
      overflow: hidden;
      position: relative;
      background-color: rgba(0, 0, 0, .6);
      top: 50%;
      transform: translate3d(0, -50%, 0);
    }
    #box-horizontal {
      width: 100%;
      height: calc(100% / 3);
      top: calc(100% / 3);
      background-color: pink;
      position: absolute;
    }

    #box-vertical {
      width: calc(100% / 3);
      height: 100%;
      left: calc(100% / 3);
      background-color: pink;
      position: absolute;
    }
  }
}
</style>
