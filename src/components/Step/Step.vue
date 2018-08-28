<template>
  <div class="im-step">
    <div class="im-step-box">
      <div class="im-step-box-item" v-for="(v, k) in list" :key="k" :class="current == (k + 1) ? 'on' : ''">
        <p v-if="v.top" class="im-step-box-item-text">{{v.top}}</p>
        <p v-else>&nbsp;</p>
        <div class="im-step-box-item-status"></div>
        <p v-if="v.bottom" class="im-step-box-item-text">{{v.bottom}}</p>
        <p v-else>&nbsp;</p>
      </div>
    </div>
  </div>
</template>

<script>
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
          height: .02px * @baseRem;
          position: absolute;
          background-color: #a7a7a7;
          top: 50%;
          transform: translate3d(-63%, -.01px * @baseRem, 0);
        }
        &-status {
          width: .2px * @baseRem;
          height: .2px * @baseRem;
          background-color: #a7a7a7;
          border-radius: 50%;
          position: relative;
        }
      }
    }
  }
}

.on {
  .im-step-box-item-text {
    color: red;
    transition: all .6s;
  }
  .im-step-box-item-status {
    background-color: red;
    transition: all .6s;
  }
}

.im-step-box .im-step-box-item:nth-of-type(1):before {
  content: '';
  display: none;
}
</style>
