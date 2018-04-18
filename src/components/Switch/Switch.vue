<template>
  <div class="im-switch">
    <div class="im-switch-box">
      <input v-model="curIndex" :id="_uid" class="im-switch-box-input" type="checkbox" />
      <label :for="_uid" class="im-switch-box-slider" :style="curIndex ? switchStyle : ''">
        <span class="im-switch-box-slider-cur" :style="curIndex ? switchCurStyle : ''"></span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'im-switch',
  data () {
    return {
      curIndex: false
    }
  },
  props: {
    onColor: {
      type: String,
      default: '#00bfff'
    },
    onBgColor: {
      type: String,
      default: '#00bfff'
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  created: function () {
    this.curIndex = this.value
  },
  computed: {
    switchStyle () {
      return {
        backgroundColor: this.onColor
      }
    },
    switchCurStyle () {
      return {
        backgroundColor: this.onBgColor
      }
    }
  },
  watch: {
    curIndex (newVal) {
      this.$emit('input', newVal)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../../less/base.less';

.@{prefixClass} {
  &-switch {
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    &-box {
      height: 100%;
      &-input {
        position: absolute;
        left: -9999em;
      }
      &-slider {
        position: relative;
        display: inline-block;
        height: .2rem * @baseRem;
        width: 1rem * @baseRem;
        background: #d5d5d5;
        border-radius: .08rem * @baseRem;
        cursor: pointer;
        -webkit-transition: all 0.3s cubic-bezier(.45,.25,.67,.86);
        transition: all 0.3s cubic-bezier(.45,.25,.67,.86);
        margin: .3rem * @baseRem;
        &-cur {
          position: absolute;
          left: -.2rem * @baseRem;
          top: -.2rem * @baseRem;
          display: block;
          width: 0.6rem * @baseRem;
          height: 0.6rem * @baseRem;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 1px 2px 6px rgba(0, 0, 0, .4);
          content: '';
          -webkit-transition: all 0.3s cubic-bezier(.45,.25,.67,.86);
          transition: all 0.3s cubic-bezier(.45,.25,.67,.86);
        }
      }
    }
  }
}

.im-switch-box .im-switch-box-input:checked ~ .im-switch-box-slider .im-switch-box-slider-cur {
  left: 1-0.3rem * @baseRem;
}
</style>
