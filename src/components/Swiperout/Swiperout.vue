<template>
<!--   <div class="im-swiper-out"
    @touchstart="start"
    @touchmove="move"
    @touchend="end"
    @mousedown="start"
    @mousemove="move"
    @mouseup="end"
    @touchcancel="end"> -->
  <div class="im-swiper-out">
    <div class="im-swiper-out-right box">
      <slot name="right-menu"></slot>
    </div>

    <div class="im-swiper-out-left box">
      <slot name="left-menu"></slot>
    </div>

    <div class="im-swiper-out-content box" :style="boxStyle">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>

import draggable from '../../helper/draggable.js'

// touch事件的一个问题，就是点击不移动，也会有一个小的偏移量
let checkTouchBug = (distance) => 35 < Math.abs(distance) ? false : true // eslint-disable-line

export default {
  name: 'im-swiper-out',
  data () {
    return {
      tslX: 0,
      rightMenuWidth: 0,
      isOpen: false,
      pageX: null,
      pageY: null,
      distX: null,
      distY: null,
      rightWidth: null,
      leftWidth: null,
      swiperStatus: null
    }
  },
  computed: {
    boxStyle () {
      return {
        transform: `translate3d(${this.tslX}px, 0, 0)`
      }
    }
  },
  methods: {
    // start (ev) {
    //   const touch = ev.touches ? ev.touches[0] : ev;
    //   this.pageX = touch.pageX;
    //   this.pageY = touch.pageY;
    //   this.rightWidth = this.$el.children["0"].offsetWidth;
    //   this.leftWidth = this.$el.children["1"].offsetWidth;
    // },
    // move (ev) {
    //   if (this.disabled) return
    //   const touch = ev.touches ? ev.touches[0] : ev;
    //   this.distX = touch.pageX - this.pageX;
    //   this.distY = touch.pageY - this.pageY;
    //   this.setOffset(this.distX, false);
    // },
    // end (ev) {
    //   if (this.distX == 0) return
    //   this.swiperStatus = this.distX > 0 ? 'left' : 'right';
    //   if (this.swiperStatus == 'left') {
    //     if (this.leftWidth * 0.5 >= -Math.abs(this.distX) && !checkTouchBug(this.distX)) {
    //       console.log(this.distX)
    //       this.tslX = this.leftWidth;
    //     } else {
    //       this.setOffset(0, false);
    //     }
    //   } else {
    //     if (this.rightWidth * 0.5 <= Math.abs(this.distX) && !checkTouchBug(this.distX)) {
    //       console.log(this.distX)
    //       this.tslX = -this.rightWidth;
    //     } else {
    //       this.setOffset(0, false);
    //     }
    //   }
    //   this.distX = 0;
    // },
    setOffset (x, animated = false) {
      this.tslX = x
      this.isOpen = x !== 0
    },
    initEvent () {
      let el = this.$el
      let dragState = Object.create(null)
      draggable(el, {
        start: (touch, $event) => {
          dragState = {
            startTime: new Date(),
            startX: touch.pageX,
            startY: touch.pageY
          }
          this.rightWidth = el.children['0'].offsetWidth
          this.leftWidth = el.children['1'].offsetWidth
        },
        drag: (touch, $event) => {
          if (this.disabled) return
          dragState.dragX = touch.pageX - dragState.startX
          dragState.dragY = touch.pageY - dragState.startY
          this.setOffset(dragState.dragX, false)
        },
        end: (touch, $event) => {
          let duration = new Date() - dragState.startTime
          if (+dragState.dragX === 0) return
          this.swiperStatus = dragState.dragX > 0 ? 'left' : 'right'
          /* eslint-disable */
          if (this.swiperStatus === 'left') {
            if (duration < 100 &&
              !this.isOpen ||
              this.leftWidth * 0.5 >= -Math.abs(dragState.dragX) &&
              !checkTouchBug(dragState.dragX)
              ) {
              this.tslX = this.leftWidth
            } else {
              this.setOffset(0, false)
            }
          } else {
            if (duration < 100 &&
              !this.isOpen ||
              this.rightWidth * 0.5 <= Math.abs(dragState.dragX) &&
              !checkTouchBug(dragState.dragX)
              ) {
              this.tslX = -this.rightWidth
            } else {
              this.setOffset(0, false)
            }
          }
          /* eslint-enable */
          dragState = Object.create(null)
        }
      })
    }
  },
  mounted () {
    this.initEvent()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../../less/base.less';

/*@media screen and (-webkit-min-device-pixel-ratio: 2) {
  .im-swiper-out {
    border: 0.5px solid red;
    margin-bottom: 0.5px;
  }
}*/

@media screen and (-webkit-min-device-pixel-ratio: 3) {
  .im-swiper-out {
    border-bottom: 0 !important;
    margin-bottom: 0 !important;
  }
}

.@{prefixClass} {
  &-swiper-out {
    display: flex;
    position: relative;
    height: 1px * @baseRem;
    font-size: .37px * @baseRem;
    overflow: hidden;
    width: 100%;
    border-bottom: 1px solid #d0d0d0;
    margin-bottom: 1px;
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .box {
      button {
        border: 0;
        background-color: @base-color;
        color: #fff;
        width: 1.2px * @baseRem;
        font-size: .37px * @baseRem;
        height: 100%;
      }
    }
    &-right {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      margin: 0;
      text-align: right;
      display: flex;
      justify-content: flex-end;
      z-index: 98;
    }
    &-left {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      margin: 0;
      text-align: left;
      display: flex;
      justify-content: flex-start;
      z-index: 98;
    }
    &-content {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: flex;
      font-size: .3px * @baseRem;
      align-items: center;
      background-color: #fff;
      transition: transform .1s;
      padding: .2px * @baseRem;
      z-index: 99;
    }
  }
}
</style>
