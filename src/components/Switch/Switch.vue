<template>
  <div class="im-switch">

    <div class="im-switch-box-ios" v-if="styleFor == 'ios'">

      <input v-model="curIndex" :id="_uid" class="im-switch-box-ios-input" type="checkbox" :style="curIndex ? switchStyle : ''" />

    </div>

    <div class="im-switch-box-android" v-else>

      <input v-model="curIndex" :id="_uid" class="im-switch-box-android-input" type="checkbox" />
      <label :for="_uid" class="im-switch-box-android-slider" :style="curIndex ? switchStyle : ''">
        <span class="im-switch-box-android-slider-cur" :style="curIndex ? switchCurStyle : ''"></span>
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
    },
    styleFor: {
      type: String,
      default: 'ios'
    }
  },
  created () {
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
    },
    value (newVal) {
      this.curIndex = this.value
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
    &-box-android {
      height: 100%;
      &-input {
        position: absolute;
        left: -9999em;
      }
      &-slider {
        position: relative;
        display: inline-block;
        height: .2px * @baseRem;
        width: 1px * @baseRem;
        background: #e8e8e8;
        border-radius: .08px * @baseRem;
        cursor: pointer;
        -webkit-transition: all 0.3s cubic-bezier(.45,.25,.67,.86);
        transition: all 0.3s cubic-bezier(.45,.25,.67,.86);
        margin: .3px * @baseRem;
        &-cur {
          position: absolute;
          left: -.2px * @baseRem;
          top: -.2px * @baseRem;
          display: block;
          width: 0.6px * @baseRem;
          height: 0.6px * @baseRem;
          border-radius: 50%;
          background: #ffffff;
          box-shadow: 1px 2px 6px rgba(0, 0, 0, .4);
          content: '';
          -webkit-transition: all 0.3s cubic-bezier(.45,.25,.67,.86);
          transition: all 0.3s cubic-bezier(.45,.25,.67,.86);
        }
      }
    }
    &-box-ios {
      &-input{
        appearance: none;
        -webkit-appearance: none;
        position: relative;
        width: 1px * @baseRem;
        height: .5px * @baseRem;
        background: #e8e8e8;
        border-radius: 16px * @baseRem;
        border: 1px solid #d5d5d5;
        outline: 0;
        box-sizing: border-box;
        &:checked {
          &:before {
            transform: scale(0);
            -webkit-transform: scale(0);
          }
          &:after {
            transform: translateX(1px * @baseRem - .5px * @baseRem);
            -webkit-transform: translateX(1px * @baseRem - .5px * @baseRem);
          }
        }
        &:before, &:after {
          content: '';
          position: absolute;
          top: -.01px * @baseRem;
          left: 0;
          height: .5px * @baseRem;
          border-radius: 15px * @baseRem;
          transition: transform 0.3s;
          transition: -webkit-transform 0.3s;
          transition: transform 0.3s, -webkit-transform 0.3s;
          -webkit-transition: -webkit-transform 0.3s;
        }
        &:before {
          width: 1px * @baseRem;
          background-color: #fdfdfd;
        }
        &:after {
          width: .5px * @baseRem;
          background-color: white;
          box-shadow: 0 .01px * @baseRem .03px * @baseRem rgba(0, 0, 0, 0.4);
        }
      }
    }
  }
}

.im-switch-box-android .im-switch-box-android-input:checked ~ .im-switch-box-android-slider .im-switch-box-android-slider-cur {
  left: 1 * @baseRem - 0.3px * @baseRem;
}

</style>
