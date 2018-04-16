<template>
  <div class="im-swiper-out"
    @touchstart="start"
    @touchmove="move"
    @touchend="end"
    @mousedown="start"
    @mousemove="move"
    @mouseup="end"
    @touchcancel="end">
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

// touch事件的一个问题，就是点击不移动，也会有一个小的偏移量
let checkTouchBug  = (distance) => 35 < Math.abs(distance) ? false : true

export default {
  name: 'swiper-out',
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
  props: {

  },
  computed: {
    boxStyle () {
      return {
        transform: `translate3d(${this.tslX}px, 0, 0)`
      }
    }
  },
  methods: {
    start (ev) {

      const touch = ev.touches ? ev.touches[0] : ev;
      this.pageX = touch.pageX;
      this.pageY = touch.pageY;

      this.rightWidth = this.$el.children["0"].offsetWidth;
      this.leftWidth = this.$el.children["1"].offsetWidth;

    },
    move (ev) {
      if (this.disabled) return

      const touch = ev.touches ? ev.touches[0] : ev;
      this.distX = touch.pageX - this.pageX;
      this.distY = touch.pageY - this.pageY;

      this.setOffset(this.distX, false);
      
    },
    end (ev) {

      if (this.distX == 0) return

      this.swiperStatus = this.distX > 0 ? 'left' : 'right';
      
      if (this.swiperStatus == 'left') {
        if (this.leftWidth * 0.5 >= -Math.abs(this.distX) && !checkTouchBug(this.distX)) {
          console.log(this.distX)
          this.tslX = this.leftWidth;
        } else {
          this.setOffset(0, false);
        }
      } else {
        if (this.rightWidth * 0.5 <= Math.abs(this.distX) && !checkTouchBug(this.distX)) {
          console.log(this.distX)
          this.tslX = -this.rightWidth;
        } else {
          this.setOffset(0, false);
        }
      }

      this.distX = 0

    },
    setOffset (x, animated = false) {
      this.tslX = x;
      this.isOpen = x == 0 ?  false : true;
     
    }
  },
  mounted () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../../less/base.less';

.@{prefixClass} {
  &-swiper-out {
    display: flex;
    position: relative;
    height: 1rem * @baseRem;
    font-size: .37rem * @baseRem;
    overflow: hidden;
    width: 100%;
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .box {
      button {
        border: 0;
        background-color: #00BFFF;
        color: #fff;
        width: 1.2rem * @baseRem;
        font-size: .37rem * @baseRem;
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
      font-size: .3rem * @baseRem;
      align-items: center;
      background-color: #fff;
      transition: transform .1s;
      padding: .2rem * @baseRem;
      z-index: 99;
    }
  }
}
</style>
