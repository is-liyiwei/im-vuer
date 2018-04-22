
> 使用

```js
import { TimeLine, TimeLineItem } from 'im-vuer'
Vue.component(TimeLine.name, TimeLine)
Vue.component(TimeLineItem.name, TimeLineItem)
```

> 示例代码

```js
<template>
  <div class="demo-timeline">
    <im-timeline>
      <im-timeline-item v-for="(v, k) in list" :key="k" :item="v"></im-timeline-item>
    </im-timeline>
  </div>
</template>

<script>
export default {
  name: 'timeline',
  data () {
    return {
      list: [{
        text: '感谢您在京东购物，订单已签收，欢迎您再次光临！',
        time: '2016-03-11 18:07:15'
      },{
        text: '京东到家、京东配送员【申国龙】已出发，联系电话18410106883，感谢您的耐心',
        time: '2016-03-10 18:07:15'
      },{
        text: '感谢您在京东购物，欢迎您再次光临！联系电话18410106883 ',
        time: '2016-03-10 18:07:15'
      },{
        text: '感谢您在京东购物，欢迎您再次光临！',
        time: '2016-03-10 18:07:15'
      },{
        text: '感谢您在京东购物，欢迎您再次光临！',
        time: '2016-03-10 18:07:15'
      }]
    }
  },
  props: {

  },
  components: {

  },
  created: function () {
    
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
      <th>可选值/备注</th> 
      <th>默认值</th>
     </tr>
    </thead> 
    <tbody>
    <tr>
      <td>item</td> 
      <td>数据项</td> 
      <td>Object</td> 
      <td>参考demo</td> 
      <td>-</td>
    </tr>
    </tbody>
   </table>
  </div>
  