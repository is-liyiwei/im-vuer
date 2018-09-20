> 使用

```js
import { Step } form 'im-vuer'
Vue.component(Step.name, Step)
```

> 示例代码

```js
<template>
  <div class="demo-step">
    <im-step :current="currentFor_A" :list="list_A"></im-step>

    <br><br>

    <im-step :current="currentFor_B" :list="list_B"></im-step>

    <br><br>

    <div style="font-size: .3rem;text-align: center;">两秒后会跳转</div>

    <br><br>

    <im-step :current="currentFor_C" :list="list_C"></im-step>

    <br><br>

    <div class="btn-group">
      <div class="btn" @click="prevHandle">上一步</div>
      <div class="btn" @click="nextHandle">下一步</div>
    </div>
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
      }, {
        top: '运输中'
      }, {
        top: '已收货',
        bottom: ''
      }, {
        top: '完成订单',
        bottom: '阳江市'
      }],
      list_B: [{
        bottom: '步骤一'
      }, {
        bottom: '步骤二'
      }, {
        bottom: '步骤三'
      }, {
        bottom: '步骤四'
      }],
      list_C: [{
        top: '手动一',
        bottom: '手动一'
      }, {
        top: '手动二',
        bottom: '手动二'
      }, {
        bottom: '手动三'
      }, {
        top: '手动四',
        bottom: '手动四'
      }],
      currentFor_A: 3,
      currentFor_B: '2',
      currentFor_C: 1
    }
  },
  components: {

  },
  methods: {
    addA () {
      setTimeout(() => {
        this.currentFor_A++
      }, 2000)
    },
    addB () {
      setTimeout(() => {
        this.currentFor_B++
      }, 3000)
    },
    nextHandle () {
      if (this.currentFor_C >= this.list_C.length) return
      this.currentFor_C++
    },
    prevHandle () {
      if (this.currentFor_C <= 1) return
      this.currentFor_C--
    }
  },
  mounted: function () {
    this.addA()
    this.addB()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.btn-group {
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn {
   border: none;
   background-color: #00bfff;
   color: #FFF;
   padding: 20px;
   margin: 20px;
   width: 20%;
   display: block;
   font-size: .37rem;
   border-radius: 2rem;
   text-align: center;
}
</style>

```
> 参数说明
<div>
  <table>
    <thead>
      <tr>
        <th>参数</th> 
        <th>说明</th> 
        <th>类型</th> 
        <th>可选值/备注</th> 
        <th>默认值</th>
      </tr>
    </thead> 
    <tbody>
      <tr>
        <td>list</td> 
        <td>数据列表</td> 
        <td>Array</td> 
        <td>参考demo</td> 
        <td>-</td>
      </tr>
      <tr>
        <td>current</td> 
        <td>控制组件显示</td> 
        <td>Number, String</td> 
        <td></td> 
        <td>0</td>
      </tr>
      
    </tbody>
  </table>
</div>