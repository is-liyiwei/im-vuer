<template>
  <div class="im-step">
    <div class="im-step-box">
      <div class="im-step-box-item" v-for="(v, k) in list" :class="current == (k + 1) ? 'on' : ''">
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
  },
  components: {

  },
  methods: {

  },
  mounted: function () {
    
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
      font-size: .22rem * @baseRem;
      justify-content: space-around;
      padding: .1rem * @baseRem;
      &-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        position: relative;
        height: 1.2rem * @baseRem;
        flex: 1;
        letter-spacing: 1px;
        &:before {
          content: '';
          width: 80%;
          height: .02rem * @baseRem;
          position: absolute;
          background-color: #a7a7a7;
          top: 50%;
          transform: translate3d(-63%, -.01rem * @baseRem, 0);
        }
        &-status {
          width: .2rem * @baseRem;
          height: .2rem * @baseRem;
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
  }
  .im-step-box-item-status {
    background-color: red;
  }
}

.im-step-box .im-step-box-item:nth-of-type(1):before {
  content: '';
  display: none;
}
</style>
