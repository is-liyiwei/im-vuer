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
        height: .2rem * @baseRem;
        width: 1rem * @baseRem;
        background: #e8e8e8;
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
    &-box-ios {
      &-input{
        appearance: none;
        -webkit-appearance: none;
        position: relative;
        width: 1rem;
        height: .5rem;
        background: #e8e8e8;
        border-radius: 16rem;
        border: 1px solid #d5d5d5;
        outline: 0;
        box-sizing: border-box;
        &:checked {
          &:before {
            transform: scale(0);
            -webkit-transform: scale(0);
          }
          &:after {
            transform: translateX(1rem - .5rem);
            -webkit-transform: translateX(1rem - .5rem);
          }
        }
        &:before, &:after {
          content: " ";
          position: absolute;
          top: -.01rem;
          left: 0;
          height: .5rem;
          border-radius: 15rem;
          transition: transform 0.3s;
          transition: -webkit-transform 0.3s;
          transition: transform 0.3s, -webkit-transform 0.3s;
          -webkit-transition: -webkit-transform 0.3s;
        }
        &:before {
          width: 1rem;
          background-color: #fdfdfd;
        }
        &:after {
          width: .5rem;
          background-color: white;
          box-shadow: 0 .01rem .03rem rgba(0, 0, 0, 0.4);
        }
      }
    }
  }
}

.im-switch-box-android .im-switch-box-android-input:checked ~ .im-switch-box-android-slider .im-switch-box-android-slider-cur {
  left: 1-0.3rem * @baseRem;
}

</style>
