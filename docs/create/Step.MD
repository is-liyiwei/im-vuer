
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

  <div>
   <table>
    <thead>
     <tr>
      <th>参数</th> 
      <th>说明</th> 
      <th>类型</th> 
      <th>可选值</th> 
      <th>默认值</th>
     </tr>
    </thead> 
    <tbody>
     <tr>
      <td>message</td> 
      <td>文本内容</td> 
      <td>String</td> 
      <td></td> 
      <td></td>
     </tr> 
     <tr>
      <td>position</td> 
      <td>Toast 的位置</td> 
      <td>String</td> 
      <td>'top'<br />'bottom'<br />'middle'</td> 
      <td>'middle'</td>
     </tr> 
     <tr>
      <td>duration</td> 
      <td>持续时间（毫秒），若为 -1 则不会自动关闭</td> 
      <td>Number</td> 
      <td></td> 
      <td>3000</td>
     </tr> 
     <tr>
      <td>className</td> 
      <td>Toast 的类名。可以为其添加样式</td> 
      <td>String</td> 
      <td></td> 
      <td></td>
     </tr> 
     <tr>
      <td>iconClass</td> 
      <td>icon 图标的类名</td> 
      <td>String</td> 
      <td></td> 
      <td></td>
     </tr>
    </tbody>
   </table>
  </div>

