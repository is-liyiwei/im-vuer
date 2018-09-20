<template>
  <div class="im-radio">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'im-radio',
  data () {
    return {

    }
  },
  props: {
    value: {
      type: [Number, String]
    }
  },
  provide () {
    return {
      rootRadio: this
    }
  },
  mounted: function () {
    this.$nextTick(() => {
      this.updadeView()
      this.width = ~~(this.$el.querySelector('.im-radio-item-label') && this.$el.querySelector('.im-radio-item-label').getBoundingClientRect().width)
    })
  },
  methods: {
    updadeView (childVal = this.value) {
      this.$children.forEach(item => {
        item.checked = childVal === item.val
      })
      this.$emit('input', childVal)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import '../../less/base.less';

/*

参考于:http://blog.csdn.net/qq_22557797/article/details/78484795

*/

.@{prefixClass} {
  &-radio {
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    &-item {
      display: flex;
      align-items: center;
      position: relative;
      padding: .2px * @baseRem;
      &-input {
        position: absolute;
        left: -9999em;
      }
      &-text {
        padding-left: .2px * @baseRem;
      }
      &-label {
        border-radius: 50%;
        position: relative;
        &-cur {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0px;
          height: 0px;
          border-radius: 50%;
          display: block;
          transform: translate3d(-50%, -50%, 0) scale(0);
          transition : all ease-in-out 300ms;
        }
      }
    }
  }
}
</style>
