<template>
  <!-- <transition name="vuer-fade-in"> -->
    <div class="im-previewImage" v-transform>
      <template v-for="(v, k) in imgArr">
        <div :key="k" id="container-horizontal" v-if="v.imgDirection === 'horizontal'">
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
        <div :key="k" id="container-vertical" v-else>
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
  <!-- </transition> -->
</template>

<script>
import To from '../../lib/AlloyTo'
/* eslint-disable no-new */
export default {
  name: 'im-preview-image',
  data () {
    return {
      pressMoveStatus: false,
      currContainerX: 0,
      containerSwipeStatus: '',
      // 过了这个值才开始出现拖动下一页的图片
      targetSwipeBoxValue: 30
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const el = this.$el

      document.body.appendChild(el)

      setTimeout(() => {
        el.style.opacity = 1
      }, 100)

      el.addEventListener('click', (e) => {
        if (e.target.tagName !== 'IMG') {
          el.style.opacity = 0
          setTimeout(() => {
            this.$closePreviewImage()
          }, 300)
        }
      })

      new To(this.$el, 'translateX', -(window.innerWidth * this.currentIndex), 0)
    },
    // 获取图片水平空白区域，只获取一边
    getBlankSpaceWidth (target, container) {
      return (target.getBoundingClientRect().width - container.getBoundingClientRect().width) / 2
    },
    // 获取图片垂直空白区域，只获取一边
    getBlankSpaceHeight (target, container) {
      return (target.getBoundingClientRect().height - container.getBoundingClientRect().height) / 2
    },
    handlePressMove (e) {
      // 这个算法的问题，应该是不准确的，碰巧功能可以的，我自己都懵逼T T
      e.preventDefault()
      this.pressMoveStatus = true
      this.imgEl = e.target
      let el = this.imgEl
      let container = this.imgEl.parentElement

      // 这个3是因为css布局采用全屏幕，3等分了，css有这样一段calc(100% / 3)
      // let elMargin = window.innerWidth / 3 / this.currScale + this.targetElementXByContainer
      // console.log(this.targetElementXByContainer) // 这个暂时不用
      let elMargin = window.innerWidth / 3 / this.currScale

      this.blankSpaceWidth = this.getBlankSpaceWidth(el, container)
      this.blankSpaceHeight = this.getBlankSpaceHeight(el, container)

      el.translateX += e.deltaX
      el.translateY += e.deltaY

      if (el.translateX - this.blankSpaceWidth - elMargin > this.targetSwipeBoxValue * el.scaleX) {
        if (this.currentIndex <= 0) {
          return false
        } else {
          this.currContainerX += e.deltaX
          if (this.currContainerX > this.targetSwipeBoxValue) {
            this.$el.translateX += e.deltaX
            this.containerSwipeStatus = 'swipe-left'
          } else {
            this.containerSwipeStatus = 'no-swipe'
          }
        }
      }
      if (el.translateX - (-this.blankSpaceWidth) - (-elMargin) < -this.targetSwipeBoxValue * el.scaleX) {
        if (this.currentIndex >= this.imgArr.length - 1) {
          return false
        } else {
          this.currContainerX += e.deltaX
          if (this.currContainerX < -this.targetSwipeBoxValue) {
            this.$el.translateX += e.deltaX
            this.containerSwipeStatus = 'swipe-right'
          } else {
            this.containerSwipeStatus = 'no-swipe'
          }
        }
      }
    },
    handleDoubleTap (e) {
      this.imgEl = e.target
      let el = this.imgEl
      if (el.scaleX === this.currScale) {
        new To(el, 'scaleX', 1, this.animationTime)
        new To(el, 'scaleY', 1, this.animationTime)
        new To(el, 'translateX', 0, this.animationTime)
        new To(el, 'translateY', 0, this.animationTime)
      } else {
        let clickPointXDistanceSelfLeft = e.changedTouches['0'].clientX - el.getBoundingClientRect().x
        let clickPointYDistanceSelfTop = e.changedTouches['0'].clientY - el.getBoundingClientRect().y

        let diffX = (clickPointXDistanceSelfLeft - el.getBoundingClientRect().width / 2) * (this.currScale - 1)
        let diffY = (clickPointYDistanceSelfTop - el.getBoundingClientRect().height / 2) * (this.currScale - 1)

        new To(el, 'scaleX', this.currScale, this.animationTime)
        new To(el, 'scaleY', this.currScale, this.animationTime)
        new To(el, 'translateX', -diffX, this.animationTime)
        new To(el, 'translateY', -diffY, this.animationTime)
      }
    },
    handleTouchStart (e) {
      this.imgEl = e.target
      let el = this.imgEl
      this.targetElementXByContainer = el.getBoundingClientRect().x
    },
    handleTouchEnd (e) {
      this.imgEl = e.target
      let el = this.imgEl
      const currContainerX = Math.abs(this.currContainerX)
      if (this.containerSwipeStatus === 'swipe-right' && currContainerX >= this.targetSwipeBoundaryValue) {
        this.currentIndex++
      }
      if (this.containerSwipeStatus === 'swipe-left' && currContainerX >= this.targetSwipeBoundaryValue) {
        this.currentIndex--
      }
      this.containerSwipeStatus = 'no-swipe'
      this.currContainerX = 0
      new To(this.$el, 'translateX', -(window.innerWidth * this.currentIndex), this.animationTime)
      if (el.width > el.height) {
        // console.log('horizontal')

        new To(el, 'translateY', 0, this.animationTime)

        if (el.translateX > this.blankSpaceWidth && this.pressMoveStatus) {
          new To(el, 'translateX', this.blankSpaceWidth, this.animationTime)
          this.pressMoveStatus = false
        }
        if (el.translateX < -this.blankSpaceWidth && this.pressMoveStatus) {
          new To(el, 'translateX', -this.blankSpaceWidth, this.animationTime)
          this.pressMoveStatus = false
        }
      } else {
        // console.log('vertical')

        new To(el, 'translateX', 0, this.animationTime)

        if (el.translateY > this.blankSpaceHeight && this.pressMoveStatus) {
          new To(el, 'translateY', this.blankSpaceHeight, this.animationTime)
          this.pressMoveStatus = false
        }
        if (el.translateY < -this.blankSpaceHeight && this.pressMoveStatus) {
          new To(el, 'translateY', -this.blankSpaceHeight, this.animationTime)
          this.pressMoveStatus = false
        }
      }
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
    /*width: 100vw;*/
    height: 100vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, .6);
    top: 0;
    display: flex;
    opacity: 0;
    transition: opacity 300ms;
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    #container-horizontal {
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      position: relative;
      background-color: rgba(0, 0, 0, .6);
    }
    #container-vertical {
      width: 100vw;
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
