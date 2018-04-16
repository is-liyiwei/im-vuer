
> 使用

```js

import { Tab } form 'im-vuer'

Vue.component(${Tab.name}, Tab)

```

> 示例代码

```js

<template>
  <div class="demo-tab">
    <im-tab textColorActive="green" activeCurrIndex="2" :list='list'></im-tab>
    <br>
    <im-tab :list='list'></im-tab>
    <br>
    <im-tab :list='list' labelColor="pink" labelTextColor="blue" lineColor="#f00" lineThickness="6px"></im-tab>
  </div>
</template>

<script>

const list = [{
  name: '分类1',
  label: 2
},{
  name: '分类2'
},{
  name: '分类3',
  label: 4
},{
  name: '分类4',
  label: 5
}]


export default {
  name: 'tab',
  data () {
    return {
      list
    }
  },
  props: {

  },
  methods: {

  },
  computed: {

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

