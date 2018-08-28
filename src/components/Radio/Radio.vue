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
  mounted: function () {
    this.$nextTick(this.updadeView)
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
        display: flex;
        justify-content: center;
        align-items: center;
        &-cur {
          width: 0%;
          height: 0%;
          border-radius: 50%;
          display: block;
          transform: scale(0);
          transition : all ease-in-out 300ms;
        }
      }
    }
  }
}

.im-radio-item-input:checked + .im-radio-item-label .im-radio-item-label-cur {
  width: 60%;
  height: 60%;
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  transform: scale(1);
}

</style>
