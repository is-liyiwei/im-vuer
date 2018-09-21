<template>
  <div class="im-step">
    <div class="im-step-box">
      <!-- <div class="im-step-box-item" v-for="(v, k) in list" :key="k" :class="current == (k + 1) ? 'on' : ''"> -->
      <div class="im-step-box-item" v-for="(v, k) in list" :key="k">
        <p v-if="v.top" class="im-step-box-item-text" :style="{color: current == (k + 1) ? activeColor : ''}">{{v.top}}</p>
        <p v-else>&nbsp;</p>
        <div class="im-step-box-item-status" :style="[{backgroundColor: current == (k + 1) ? activeColor : ''}, wh]"></div>
        <p v-if="v.bottom" class="im-step-box-item-text" :style="{color: current == (k + 1) ? activeColor : ''}">{{v.bottom}}</p>
        <p v-else>&nbsp;</p>
      </div>
    </div>
  </div>
</template>

<script>
import getDocumentFontSize from '../../helper/getDocumentFontSize'
export default {
  name: 'im-step',
  data () {
    return {

    }
  },
  props: {
    list: {
      type: Array
    },
    current: {
      type: [Number, String],
      default: 0
    },
    activeColor: {
      type: String,
      default: '#00bFFF'
    }
  },
  computed: {
    wh () {
      let fz = parseInt(getDocumentFontSize())
      return {
        width: ~~(fz * 0.25) + 'px',
        height: ~~(fz * 0.25) + 'px'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import '../../less/base.less';

.@{prefixClass} {
  &-step {
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    &-box {
      display: flex;
      font-size: .22px * @baseRem;
      justify-content: space-around;
      padding: .1px * @baseRem;
      &-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        position: relative;
        height: 1.2px * @baseRem;
        flex: 1;
        letter-spacing: 1px;
        &:before {
          content: '';
          width: 80%;
          height: 1%;
          position: absolute;
          background-color: @base-color-txt-fuzzy;
          top: 50%;
          transform: translate3d(-63%, -.01px * @baseRem, 0);
        }
        &-status {
          /*安卓上面如果px单位带有小数，则会出现圆形变形的情况，使用计算属性动态计算取整*/
          /*width: .2px * @baseRem;*/
          /*height: .2px * @baseRem;*/
          background-color: @base-color-txt-fuzzy;
          border-radius: 50%;
          position: relative;
          transition: background-color .3s;
        }
        &-text {
          transition: color .3s;
        }
      }
    }
  }
}

.im-step-box .im-step-box-item:nth-of-type(1):before {
  content: '';
  display: none;
}

/*.im-step-box .on.im-step-box-item:before {
  content: '';
  background-color: #f00;
}*/
</style>
