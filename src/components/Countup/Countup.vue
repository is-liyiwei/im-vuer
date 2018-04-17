<template>
  <div class="im-countup" :style="st">

  </div>
</template>

<script>
import CountUp from './countUp.js'

export default {
  name: 'im-countup',
  data () {
    return {
      
    }
  },
  props: {
    start: {
      type: Boolean,
      default: true
    },
    startVal: {
      type: Number,
      default: 0
    },
    endVal: {
      type: Number,
      default: 100
    },
    // number of decimal places in number
    decimals: {
      type: Number,
      default: 0
    },
    // duration in seconds
    duration: {
      type: Number,
      default: 2
    },
    options: {
      type: Object,
      default () {
        return {}
      }
    },
    txtColor: {
      type: String,
      default: '#00bfff'
    },
    fz: {
      type: String,
      default: '.37rem'
    }
  },
  computed: {
    st () {
      return {
        fontSize: this.fz,
        color: this.txtColor
      }
    }
  },
  mounted: function () {
    this._countup = new CountUp(this.$el, this.startVal, this.endVal, this.decimals, this.duration, this.options)
    if (this.start) {
      this._countup.start()
    }
  },
  watch: {
    start (val) {
      if (val) {
        this._countup.start();
      } else {
        this._countup.pauseResume();
      }
    },
    endVal (val) {
      this._countup.update(val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../../less/base.less';

.@{prefixClass} {
  &-countup {
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  }
}
</style>
