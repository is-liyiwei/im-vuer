<template>
  <div class="im-checkbox">
    <input class="im-checkbox-checkbox" v-model="curIndex" type="checkbox" :style="checkboxStyle">
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

@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1521711829168'); /* IE9*/
  src: url('iconfont.eot?t=1521711829168#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,d09GRgABAAAAAAT8AAsAAAAABzwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADMAAABCsP6z7U9TLzIAAAE8AAAARAAAAFZW7khDY21hcAAAAYAAAABdAAABhpqcBr5nbHlmAAAB4AAAASgAAAEoF72RgWhlYWQAAAMIAAAAMQAAADYQ0XunaGhlYQAAAzwAAAAgAAAAJAfdA4RobXR4AAADXAAAAAwAAAAMC+n//2xvY2EAAANoAAAACAAAAAgAdgCUbWF4cAAAA3AAAAAfAAAAIAESAF1uYW1lAAADkAAAAUUAAAJtPlT+fXBvc3QAAATYAAAAIwAAADTU/eNzeJxjYGRgYOBikGPQYWB0cfMJYeBgYGGAAJAMY05meiJQDMoDyrGAaQ4gZoOIAgCKIwNPAHicY2Bk/sE4gYGVgYOpk+kMAwNDP4RmfM1gxMjBwMDEwMrMgBUEpLmmMDgwVDyLZG7438AQw9zA0AAUZgTJAQAp9wzFeJzFkMENgDAMAy9t6QMxCA8Goh/m6MRdo5hQHkxQS44Vx1KiAAsQxUNMYBfGg1OuuR9Z3U+eyVIjUFvpXf2nimiWXYNKZhps3uo/Nq/76PQV6qBObOUl4QYzpgzzAAAAAAUAAP/hA7wDGAATACgAMQBEAFAAAAEGKwEiDgIdASEnNC4CKwEVIQUVFxQOAycjJyEHIyIuAz0BFyIGFBYyNjQmFwYHBg8BDgEeATMhMjYnLgInATU0PgI7ATIWHQEBGRsaUxIlHBIDkAEKGCcehf5KAqIBFR8jHA8+Lf5JLD8UMiATCHcMEhIZEhKMCAYFBQgCAgQPDgFtFxYJBQkKBv6kBQ8aFbwfKQIfAQwZJxpMWQ0gGxJhiDRuHSUXCQEBgIABExsgDqc/ERoRERoRfBoWExIZBxANCBgaDSMkFAF35AsYEwwdJuMAAAAAAv///8YEAAM6AAkACgAAAQYABycHATYANycD5uv+uk75bgGuOgE+2hoDOpX+zGDDWf5LlwHSzj0AAAB4nGNgZGBgAOKyC7Ye8fw2Xxm4WRhA4NrN2Vdh9P///4+xMDBbAbkcDEwgUQBujQ3IAAAAeJxjYGRgYG7438AQw8Lw/z8DAwsDA1AEBTADAHXaBGoEAAAAA+kAAAQA//8AAAAAAHYAlHicY2BkYGBgZghkYGUAASYg5gJCBob/YD4DABD3AXAAeJxlj01OwzAQhV/6B6QSqqhgh+QFYgEo/RGrblhUavdddN+mTpsqiSPHrdQDcB6OwAk4AtyAO/BIJ5s2lsffvHljTwDc4Acejt8t95E9XDI7cg0XuBeuU38QbpBfhJto41W4Rf1N2MczpsJtdGF5g9e4YvaEd2EPHXwI13CNT+E69S/hBvlbuIk7/Aq30PHqwj7mXle4jUcv9sdWL5xeqeVBxaHJIpM5v4KZXu+Sha3S6pxrW8QmU4OgX0lTnWlb3VPs10PnIhVZk6oJqzpJjMqt2erQBRvn8lGvF4kehCblWGP+tsYCjnEFhSUOjDFCGGSIyujoO1Vm9K+xQ8Jee1Y9zed0WxTU/3OFAQL0z1xTurLSeTpPgT1fG1J1dCtuy56UNJFezUkSskJe1rZUQuoBNmVXjhF6XNGJPyhnSP8ACVpuyAAAAHicY2BigAAuBuyAmZGJkZmRhYGxgi2lNDM9v5SBAQAWDAMoAA==') format('woff'),
  url('iconfont.ttf?t=1521711829168') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('iconfont.svg?t=1521711829168#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-duigou:before { content: "\e659"; }

input {
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
      font-size: .2rem;
      text-align: center;
      opacity: 0;
    }
    input[type = checkbox]:checked:after {
      opacity: 1;
    }
  }
}
</style>


