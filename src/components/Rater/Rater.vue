<template>
  <div class="im-rater">
    <div class="im-rater-box" :style="{ fontSize: fontSize }">
      <span 
      class="im-rater-box-item" 
      v-for="(v, k) in ~~max" 
      :key="k"
      :style="[starStyle, k < currentIndex || min > k ? activeColorStyle : offColorStyle]" 
      v-html="star"
      @click="clickHandle(k + 1)"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rater',
  created () {
    this.currentIndex = this.value;
  },
  mounted () {
    
  },
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
      default: '#fc6'
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
    clickHandle (k) {

      if (this.disabled) return

      if (this.currentIndex == k) {
        this.currentIndex = (k - 1) < this.min ? this.min : (k - 1);
      } else {
        this.currentIndex = k < this.min ? this.min : k;
      }

      this.$emit('input', this.currentIndex)

    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  watch: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../../less/base.less';

.@{prefixClass} {
  &-rater {
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    &-box {
      &-item {

      }
    }
  }
}
</style>