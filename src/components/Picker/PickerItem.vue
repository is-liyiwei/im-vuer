<template>
  <div class="im-picker-box-content-item" ref="wrapper">
    <span class="im-picker-box-content-item-value" v-for="(v, k) in data" :key="k" :style="{color: dev_currentIndex == k ? '#000' : '#d8d8d8'}">{{v}}</span>
  </div>
</template>

<script>
import draggable from '../../helper/draggable.js'
import translateUtil from '../../helper/translate.js'
export default {
  name: 'im-picker-item',
  data () {
    return {
      itemHeight: null,
      defaultH: 2,
      dragging: null,
      dev_currentIndex: 0,
      resultItem: this.data[0]
    }
  },
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  mounted: function () {
    this.init()
    this.setDefault()
    this.initEvent()
  },
  methods: {
    init () {
      this.itemHeight = document.querySelector('.im-picker-box-content-item-value') && document.querySelector('.im-picker-box-content-item-value').clientHeight
    },
    setDefault () {
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
      this.resultItem = this.data[newVal]
      this.$parent.updateValue()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
