
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
    <im-tab @on-tab="tabHandle" :list='list'></im-tab>
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
  methods: {
    tabHandle (v) {
      console.log(v)
    }
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
      <td>list</td> 
      <td>数据列表</td> 
      <td>Array</td> 
      <td>参考demo</td> 
      <td>-</td>
    </tr>
    <tr>
      <td>labelColor</td> 
      <td>标签背景颜色</td> 
      <td>String</td> 
      <td>-</td> 
      <td>#00BFFF</td>
    </tr>
    <tr>
      <td>labelTextColor</td> 
      <td>标签文本颜色</td> 
      <td>String</td> 
      <td>-</td> 
      <td>#fff</td>
    </tr>
    <tr>
      <td>textColorActive</td> 
      <td>选中文本颜色</td> 
      <td>String</td> 
      <td>-</td> 
      <td>#00BFFF</td>
    </tr>
    <tr>
      <td>textColorDefault</td> 
      <td>默认文本颜色</td> 
      <td>String</td> 
      <td>-</td> 
      <td>#000</td>
    </tr>
    <tr>
      <td>lineColor</td> 
      <td>底部线条颜色</td> 
      <td>String</td> 
      <td>-</td> 
      <td>#00BFFF</td>
    </tr>
    <tr>
      <td>lineThickness</td> 
      <td>底部线条高度(宽度)</td> 
      <td>String</td> 
      <td>-</td> 
      <td>2px</td>
    </tr>
    <tr>
      <td>activeCurrIndex</td> 
      <td>当前选中索引值</td> 
      <td>Number, String</td> 
      <td>-</td> 
      <td>0</td>
    </tr>
    <tr>
      <td>@on-tab</td> 
      <td>点击事件</td> 
      <td>Function</td> 
      <td>返回索引值</td> 
      <td>-</td>
    </tr>
    </tbody>
   </table>
  </div>
  