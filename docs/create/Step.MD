
> 使用
```js
import { Step } form 'im-vuer'
Vue.component(${Step.name}, Step)
```

> 示例代码
```js
<template>
  <div class="demo-step">
    <im-step :current="currentFor_A" :list="list_A"></im-step>
    <br>
    <im-step :current="currentFor_B" :list="list_B"></im-step>

    <br>

    <div style="font-size: .3rem;text-align: center;">两秒后会跳转</div>
  </div>
</template>

<script>
export default {
  name: 'step',
  data () {
    return {
      list_A: [{
        top: '已发货',
        bottom: '广州市'
      },{
        top: '运输',
      },{
        top: '已收货',
        bottom: ''
      },{
        top: '完成订单',
        bottom: '阳江市'
      }],
      list_B: [{
        bottom: '步骤一'
      },{
        bottom: '步骤二'
      },{
        bottom: '步骤三'
      },{
        bottom: '步骤四'
      }],
      currentFor_A: 3,
      currentFor_B: '2'
    }
  },
  components: {

  },
  methods: {
    addA () {
      setTimeout( () => {
        this.currentFor_A++;
      }, 2000)
    },
    addB () {
      setTimeout( () => {
        this.currentFor_B++;
      }, 3000)
    }
  },
  mounted: function () {
    this.addA();
    this.addB();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>

```
> 参数说明

