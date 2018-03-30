<template>
  <div class="im-picker-box-content-item" ref="wrapper">
    <span class="im-picker-box-content-item-value" v-for="(v, k) in dev_data">{{v.n}}</span>
  </div>
</template>

<script>
import draggable from './draggable';
import translateUtil from './translate';
export default {
  name: 'picker-item',
  data () {
    return {
      dev_data: [],
      itemHeight: null,
      defaultH: 2,
      animationFrameId: null,
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
  created: function () {
    this.init();
  },
  mounted: function () {
    this.getDefault();
    this.setDefault();
    this.initEvent();
  },
  methods: {
    init () {
      for (let i = 0; i < this.data.length; i++) {
        this.dev_data.push(this.data[i]);
      }
    },
    getDefault () {
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
        start: (event) => {
          dragState = {
            startTime: new Date(),
            startLeft: event.pageX,
            startTop: event.pageY,
            startTranslateTop: translateUtil.getElementTranslate(el).top
          };
        },
        drag: (event) => {
          this.dragging = true;
          dragState.left = event.pageX;
          dragState.top = event.pageY;
          var deltaY = dragState.top - dragState.startTop;
          var translate = dragState.startTranslateTop + deltaY;
          translateUtil.translateElement(el, null, translate);
        },
        end: (event) => {
          this.dragging = false;
          var currentTranslate = translateUtil.getElementTranslate(el).top;
          var duration = new Date() - dragState.startTime;
          var distance = Math.abs(dragState.startTranslateTop - currentTranslate);
          var itemHeight = this.itemHeight;
          // console.log('当前的y距离', currentTranslate)
          // console.log('滑动时间差', duration)
          // console.log('鼠标滑动位移', distance)
          // console.log('一个元素的高度，这个是固定的', itemHeight)
          var rect, offset;
          if (distance < 6) {
            rect = this.$el.getBoundingClientRect();
            let tapItemIndex = ~~(~~(event.clientY - rect.top) / itemHeight);
            this.dev_currentIndex = tapItemIndex;
            offset = Math.round((this.defaultH - tapItemIndex) * itemHeight);
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
            this.dev_currentIndex = Math.abs(translate / itemHeight - this.defaultH)
            if (translate >= ~~this.maxTopTranslate) {
              translateUtil.translateElement(el, null, ~~this.maxTopTranslate)
              return
            }
            if (translate <= -(~~this.maxBottomTranslate)) {
              translateUtil.translateElement(el, null, -(~~this.maxBottomTranslate))
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
      return `${this.itemHeight * (this.dev_data.length - this.defaultH - 1)}`
    }
  },
  watch: {
    dev_currentIndex (newVal) {
      this.$emit('input', newVal)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
