<template>
  <div class="im-picker-box-content-item" ref="wrapper">
    <span class="im-picker-box-content-item-value" v-for="(v, k) in data">{{v.n}}</span>
  </div>
</template>

<script>
import draggable from '../../helper/draggable.js';
import translateUtil from '../../helper/translate.js';
export default {
  name: 'picker-item',
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
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  mounted: function () {
    this.init();
    this.setDefault();
    this.initEvent();
  },
  updated () {
    this.setDefault();
  },
  methods: {
    init () {
      this.itemHeight = document.querySelector('.im-picker-box-content-item-value').clientHeight;
      this.maxH = this.data.length * this.itemHeight;
    },
    setDefault () {
      let _currentIndex = this.dev_currentIndex > this.data.length - 1 || this.dev_currentIndex < 0 ? 0 : this.dev_currentIndex;
      translateUtil.translateElement(this.$refs.wrapper, null, (this.defaultH - _currentIndex) * this.itemHeight);
    },
    initEvent () {
      var el = this.$refs.wrapper;
      var dragState = {};
      draggable(el, {
        start: (touch, $event) => {
          dragState = {
            startTime: new Date(),
            startX: touch.pageX,
            startY: touch.pageY,
            startTranslateTop: translateUtil.getElementTranslate(el).top
          };
        },
        drag: (touch, $event) => {
          this.dragging = true;
          dragState.dragX = touch.pageX - dragState.startX;
          dragState.dragY = touch.pageY - dragState.startY;
          // translateUtil.translateElement(el, null, dragState.startTranslateTop + dragState.dragY);
        },
        end: (touch, $event) => {
          this.dragging = false;
          var currentTranslate = translateUtil.getElementTranslate(el).top;
          var duration = new Date() - dragState.startTime;
          var distance = Math.abs(dragState.startTranslateTop - currentTranslate);
          var itemHeight = this.itemHeight;
          var defaultH = this.defaultH;
          // console.log('当前的y距离', currentTranslate)
          // console.log('滑动时间差', duration)
          // console.log('鼠标滑动位移', distance)
          // console.log('一个元素的高度，这个是固定的', itemHeight)
          var rect, offset;
          if (distance < 6) {
            rect = this.$el.getBoundingClientRect();
            let tapItemIndex = ~~(~~(touch.clientY - rect.top) / itemHeight);
            this.dev_currentIndex = tapItemIndex;
            offset = Math.round((defaultH - tapItemIndex) * itemHeight);
            currentTranslate = offset;
          }

          var momentumTranslate = 0;
          if (duration < 300) {
            momentumTranslate = currentTranslate;
          }

          this.$nextTick(() => {
            var translate;
            if (momentumTranslate) {
              translate = Math.round(momentumTranslate / itemHeight) * itemHeight;
            } else {
              translate = Math.round(currentTranslate / itemHeight) * itemHeight;
            }
            this.dev_currentIndex = Math.abs(translate / itemHeight - defaultH);
            if (translate >= ~~this.maxTopTranslate) {
              translateUtil.translateElement(el, null, ~~this.maxTopTranslate);
              return
            }
            if (translate <= -(~~this.maxBottomTranslate)) {
              translateUtil.translateElement(el, null, -(~~this.maxBottomTranslate));
              return
            }
            translateUtil.translateElement(el, null, translate);
          });

          dragState = {};
        }
      });
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
      this.$emit('get-data', this.data[newVal])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
