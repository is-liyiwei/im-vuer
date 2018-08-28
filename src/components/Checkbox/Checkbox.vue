<template>
  <div class="im-checkbox">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'im-checkbox',
  data () {
    return {
      result: [],
      childrens: []
    }
  },
  methods: {
    update () {
      this.result = []
      this.childrens = this.$children.filter(item => item.$options.name === 'im-checkbox-item')
      this.childrens.map(v => {
        if (v.curIndex) {
          this.result.push(v.val)
        }
      })
      this.$emit('input', this.result)
    }
  },
  mounted () {
    this.update()
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

  &-checkbox-box-item {
    font-family: "iconfont" !important;
    font-size: .16px * @baseRem;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  &-checkbox {
    font-size: .37px * @baseRem;
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    &-box {
      display: flex;
      align-items: center;
      &-txt {
        padding-left: .2px * @baseRem;
        margin: .2px * @baseRem 0;
        font-size: .37px * @baseRem;
      }
    }
    input[type = checkbox] {
      /*同样，首先去除浏览器默认样式*/
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      /*---------------------------*/
      position: relative;
      width: .4px * @baseRem;
      height: .4px * @baseRem;
      background: transparent;
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
      line-height: .4px * @baseRem;
      font-size: .2px * @baseRem;
      text-align: center;
      opacity: 0;
    }
    input[type = checkbox]:checked:after {
      opacity: 1;
    }
  }
}
</style>
