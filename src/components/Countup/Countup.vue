<template>
  <div class="im-countup">

  </div>
</template>

<script>
import { CountUp } from './countUp.js'

export default {
  name: 'countup',
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
    }
  },
  components: {

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
