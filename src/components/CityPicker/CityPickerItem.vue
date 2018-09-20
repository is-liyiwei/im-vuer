<template>
  <div class="im-picker-box-content-item" ref="wrapper">
    <!-- bug问题，添加了样式后无法触发js事件 -->
    <!-- <span class="im-picker-box-content-item-value" v-for="(v, k) in data" :style="{color: dev_currentIndex == k ? '#000' : '#666'}">{{v.n}}</span> -->
    <span class="im-picker-box-content-item-value" v-for="(v, k) in data" :key="k">{{v.n}}</span>
  </div>
</template>

<script>
import draggable from '../../helper/draggable.js'
import translateUtil from '../../helper/translate.js'
export default {
  name: 'im-city-picker-item',
  data () {
    return {
      itemHeight: null,
      defaultH: 2,
      dragging: null,
      dev_currentIndex: this.currentIndex
    }
  },
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    },
    currentIndex: { // 这个这里没有什么作用，暂时留着，忘了之前干嘛用的
      type: Number,
      default: 0
    }
  },
  mounted: function () {
    this.init()
    this.setDefault()
    this.initEvent()
  },
  updated () {
    this.setDefault()
    this.dev_currentIndex = 0
  },
  methods: {
    init () {
      this.itemHeight = document.querySelector('.im-picker-box-content-item-value') && document.querySelector('.im-picker-box-content-item-value').getBoundingClientRect().height
    },
    setDefault () {
      // 本想选择之后保持下一联动的位置，但是有bug未能修复，只好先全部置0先
      // let _currentIndex = this.dev_currentIndex > this.data.length - 1 || this.dev_currentIndex < 0 ? 0 : this.dev_currentIndex
      let _currentIndex = 0
      translateUtil.translateElement(this.$refs.wrapper, null, (this.defaultH - _currentIndex) * this.itemHeight)
    },
    initEvent () {
      let el = this.$refs.wrapper
      let dragState = {}
      draggable(el, {
        start: (touch, $event) => {
          dragState = {
            startTime: new Date(),
            startX: touch.pageX,
            startY: touch.pageY,
            startTranslateTop: translateUtil.getElementTranslate(el).top
          }
        },
        drag: (touch, $event) => {
          this.dragging = true
          dragState.dragX = touch.pageX - dragState.startX
          dragState.dragY = touch.pageY - dragState.startY
          translateUtil.translateElement(el, null, dragState.startTranslateTop + dragState.dragY)
        },
        end: (touch, $event) => {
          this.dragging = false
          let currentTranslate = translateUtil.getElementTranslate(el).top
          // let duration = new Date() - dragState.startTime
          let distance = Math.abs(dragState.startTranslateTop - currentTranslate)
          let itemHeight = this.itemHeight
          let defaultH = this.defaultH
          // console.log('当前的y距离', currentTranslate)
          // console.log('滑动时间差', duration)
          // console.log('鼠标滑动位移', distance)
          // console.log('一个元素的高度，这个是固定的', itemHeight)
          let rect, offset
          if (distance < 6) {
            rect = this.$el.getBoundingClientRect()
            let tapItemIndex = ~~(~~(touch.clientY - rect.top) / itemHeight)
            this.dev_currentIndex = tapItemIndex
            offset = Math.round((defaultH - tapItemIndex) * itemHeight)
            currentTranslate = offset
          }
          this.$nextTick(() => {
            let translate = Math.round(currentTranslate / itemHeight) * itemHeight
            if (translate >= ~~this.maxTopTranslate) {
              translateUtil.translateElement(el, null, ~~this.maxTopTranslate)
              this.dev_currentIndex = 0 // 向下拖动过度，则表示拖动到第一个
              return
            }
            if (translate <= -(~~this.maxBottomTranslate)) {
              translateUtil.translateElement(el, null, -(~~this.maxBottomTranslate))
              this.dev_currentIndex = this.data.length - 1 // 向上拖动过度，则表示拖动到倒数第一个
              return
            }
            this.dev_currentIndex = Math.abs(translate / itemHeight - defaultH) // 计算位置索引值
            translateUtil.translateElement(el, null, translate)
          })
          dragState = {}
        }
      })
    }
  },
  computed: {
    maxTopTranslate () {
      return `${this.defaultH * this.itemHeight}`
    },
    maxBottomTranslate () {
      return `${this.itemHeight * (this.data.length - this.defaultH - 1)}`
    }
  },
  watch: {
    dev_currentIndex (newVal) {
      this.$emit('input', newVal)
      this.$emit('get-data', newVal)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
