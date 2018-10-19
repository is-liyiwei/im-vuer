> 使用

```js
import { Step } form 'im-vuer'
Vue.component(Step.name, Step)
```

> 示例代码

```js
<template>
  <div class="demo-step">
    <im-step :current="currentForA" :list="listA"></im-step>

    <br><br>

    <div style="font-size: .5rem;text-align: center;">上下文字，初始化index = 3</div>

    <im-step :current="currentForB" :list="listB"></im-step>

    <br><br>

    <div style="font-size: .5rem;text-align: center;">两秒后会跳转</div>

    <br><br>

    <im-step :current="currentForC" :list="listC" activeColor="#f00"></im-step>

    <br><br>

    <div class="btn-group">
      <div class="btn" @click="prevHandle">上一步</div>
      <div class="btn" @click="nextHandle">下一步</div>
    </div>
  </div>
</template>

<script>
const listA = [{
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
}]

const listB = [{
  bottom: '步骤一'
}, {
  bottom: '步骤二'
}, {
  bottom: '步骤三'
}, {
  bottom: '步骤四'
}]

const listC = [{
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
}]
export default {
  name: 'step',
  data () {
    return {
      listA,
      listB,
      listC,
      currentForA: 3,
      currentForB: '2',
      currentForC: 1
    }
  },
  components: {

  },
  methods: {
    addB () {
      setTimeout(() => {
        this.currentForB++
      }, 2000)
    },
    nextHandle () {
      if (this.currentForC >= this.listC.length) return
      this.currentForC++
    },
    prevHandle () {
      if (this.currentForC <= 1) return
      this.currentForC--
    }
  },
  mounted: function () {
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
      </tr><tr>
        <td>current</td> 
        <td>控制active项</td> 
        <td>Number, String</td> 
        <td></td> 
        <td>0</td>
      </tr><tr>
        <td>activeColor</td> 
        <td>控制active颜色</td> 
        <td>String</td> 
        <td></td> 
        <td>#00bFFF</td>
      </tr>
    </tbody>
  </table>
</div>