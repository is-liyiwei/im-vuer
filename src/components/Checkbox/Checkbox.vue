<template>
  <div class="im-checkbox">
    <input class="im-checkbox-item" v-model="curIndex" type="checkbox" :style="checkboxStyle">
  </div>
</template>

<script>
export default {
  name: 'checkbox',
  data () {
    return {
      curIndex: false
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeBgColor: {
      type: String,
      default: '#00BFFF'
    },
    activeColor: {
      type: String,
      default: '#FFFFFF'
    }
  },
  computed: {
    checkboxStyle () {
      return {
        backgroundColor: this.value ? this.activeBgColor : '',
        color: this.activeColor,
        border: `1px solid ${this.activeBgColor}`
      }
    }
  },
  created: function () {
    this.curIndex = this.value
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

/*

参考于:http://blog.csdn.net/qq_22557797/article/details/78484795

*/

.im-checkbox-item {
  font-family:"iconfont" !important;
  font-size:.16rem * @baseRem;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.@{prefixClass} {
  &-checkbox {
    font-size: .3rem * @baseRem;
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    input[type = checkbox] {
      /*同样，首先去除浏览器默认样式*/  
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      /*---------------------------*/
      position: relative;
      width: .4rem * @baseRem;
      height: .4rem * @baseRem;
      background: transparent;
      -webkit-border-radius: .03rem * @baseRem;
      -moz-border-radius: .03rem * @baseRem;
      border-radius: .03rem * @baseRem;
      outline: none;
      cursor: pointer;
      /*增加动画*/   
      -webkit-transition: all ease-in-out 300ms;
      -moz-transition: all ease-in-out 300ms;
      transition: all ease-in-out 300ms;
    }
    input[type = checkbox]:after {
      content: '\e659';
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      line-height: .4rem * @baseRem;
      font-size: .2rem * @baseRem;
      text-align: center;
      opacity: 0;
    }
    input[type = checkbox]:checked:after {
      opacity: 1;
    }
  }
}
</style>


