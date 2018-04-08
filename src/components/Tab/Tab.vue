<template>
  <div class="im-tab">

    <div class="im-tab-box">
      <div v-for="(v, k) in list" class="im-tab-box-item" @click="clickItem(k)">
        <div :style="{ color: currIndex === k ? textColorActive : textColorDefault }">{{v.name}}</div>
        <span class="im-tab-box-label" v-if="v.label" :style="{ backgroundColor: labelColor, color: labelTextColor }">{{v.label}}</span>
      </div>
    </div>

    <div v-if="showLine" class="im-tab-line" :style="innerBarStyle"></div>

  </div>
</template>

<script>
export default {
  name: 'tab',
  data () {
    return {
      showLine: true,
      currIndex: ~~this.activeCurrIndex
    }
  },
  props: {
    list: {
      type: Array,
      default () {
        return []
      }
    },
    labelColor: {
      type: String,
      default: '#00BFFF'
    },
    labelTextColor: {
      type: String,
      default: '#fff'
    },
    textColorActive: {
      type: String,
      default: '#00BFFF'
    },
    textColorDefault: {
      type: String,
      default: '#000'
    },
    lineColor: {
      type: String,
      default: '#00BFFF'
    },
    lineThickness: {
      type: String,
      default: '2px'
    },
    activeCurrIndex: {
      type: [Number, String],
      default: 0
    }
  },
  methods: {
    clickItem (idx) {
      this.currIndex = idx;
      this.$emit('on-tab', idx)
    }
  },
  computed: {
    innerBarStyle () {
      let x = 100 * (this.currIndex);
      let styleObj = {
        transform: `translate(${x}%, 0)`,
        height: `${this.lineThickness}`,
        width: 100 / this.list.length + '%',
        backgroundColor: this.lineColor
      }
      return styleObj
    }
  },
  components: {

  },
  created: function () {
    
  },
  watch: {
    activeCurrIndex (newVal) {
      this.currIndex = newVal;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@easing-in-out: cubic-bezier(0.35, 0, 0.25, 1);
@effect-duration: .3s;
@import '../../less/base.less';

.@{prefixClass} {
  &-tab {
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    width: 100%;
    height: 100%;
    position: relative;
    &-box {
      display: -webkit-flex;
      display: flex;
      justify-content: space-around;
      align-items: center;
      /*padding: .3rem * @baseRem 0;*/
      border-bottom: 1px solid #e2e2e2;
      &-item {
        display: -webkit-flex;
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        width: 100%;
        height: 100%;
        font-size: .3rem * @baseRem;
        padding: .2rem * @baseRem .1rem * @baseRem;
      }
      &-label {
        margin-left: .1rem * @baseRem;
        border-radius: 50%;
        width: .35rem * @baseRem;
        height: .35rem * @baseRem;
        line-height: .35rem * @baseRem;
        color: #FFF;
        text-align: center;
        font-size: .3rem * @baseRem;
      }
    }
    &-line {
      position: absolute;
      display: block;
      transition: all @effect-duration @easing-in-out;
      left: 0;
      bottom: 0;
    }
  }
}
</style>
