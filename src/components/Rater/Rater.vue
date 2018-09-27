<template>
  <div class="im-rater">
    <div class="im-rater-box" :style="{ fontSize: fontSize }">
      <span
        class="im-rater-box-item"
        v-for="(v, k) in ~~max"
        :key="k"
        :style="[starStyle, k < currentIndex || min > k ? activeColorStyle : offColorStyle]"
        v-html="star"
        @click="clickHandle(k + 1, $event)">
      </span>
    </div>
  </div>
</template>

<script>
import { setStyle, hasClass } from '../../helper/dom'
export default {
  name: 'im-rater',
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 5
    },
    value: {
      type: [Number, String],
      default: 0
    },
    disabled: Boolean,
    star: {
      type: String,
      default: '★'
    },
    activeColor: {
      type: String,
      default: '#00bfff'
    },
    margin: {
      type: String,
      default: '0.2rem'
    },
    fontSize: {
      type: String,
      default: '0.4rem'
    },
    offColor: {
      type: String,
      default: '#ccc'
    }
  },
  created () {
    this.currentIndex = this.value
  },
  computed: {
    starStyle () {
      return {
        margin: this.margin
      }
    },
    activeColorStyle () {
      return {
        color: this.activeColor
      }
    },
    offColorStyle () {
      return {
        color: this.offColor || '#ccc'
      }
    }
  },
  methods: {
    clickHandle (k, e) {
      if (this.disabled) {
        return
      }

      this.cloneItem(e.target)

      if (+this.currentIndex === k) {
        this.currentIndex = (k - 1) < this.min ? this.min : (k - 1)
      } else {
        this.currentIndex = k < this.min ? this.min : k
      }

      this.$emit('input', this.currentIndex)
    },
    cloneItem (dom) {
      function findFirstParentNodeDomByClassName (dom, className) {
        let $d = dom
        while ($d) {
          if (!hasClass($d, className)) {
            $d = $d.parentNode
          } else {
            return $d
          }
        }
        return false
      }
      let parentDom = findFirstParentNodeDomByClassName(dom, 'im-rater-box')
      let targetCloneDom = findFirstParentNodeDomByClassName(dom, 'im-rater-box-item')
      let cloneDom = targetCloneDom.cloneNode(true)
      // cloneDom.id = 'ttt'
      setStyle(cloneDom, {
        transition: '3s',
        opacity: '1',
        transform: 'scale(2, 2)',
        // transform不支持inline的问题，必须要block
        display: 'inline-block'
      })
      
      setTimeout(() => {
      parentDom.appendChild(cloneDom)
        console.log(cloneDom)
        // dom.parentNode && dom.parentNode.removeChild(cloneDom)
      }, 350)
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../../less/base.less';
.test {
  transition: .3s;
  transform: translate3d(0, -10px, 0);
}
.@{prefixClass} {
  &-rater {
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  }
}
</style>
