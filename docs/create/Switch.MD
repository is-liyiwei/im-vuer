
> 使用
```js
import { Switch } form 'im-vuer'
Vue.component(${Switch.name}, Switch)
```

> 示例代码
```js
<template>
  <div class="demo-switch">
    <im-switch v-model="data1" :onColor="'#28e1bd'" :onBgColor="'#1abc9c'"></im-switch>
    <im-switch v-model="data2" :onColor="'#00BFFF'" :onBgColor="'#00a5dc'"></im-switch>
    <im-switch v-model="data3" :onColor="'#ed7669'" :onBgColor="'#e74c3c'"></im-switch>
    <im-switch v-model="data4" :onColor="'#eb9950'" :onBgColor="'#e67e22'"></im-switch>
  </div>
</template>

<script>
export default {
  name: 'm-switch',
  data () {
    return {
      data1: false,
      data2: true,
      data3: false,
      data4: true
    }
  },
  watch: {
  	data1 () {
  		console.log('data1 change', this.data1)
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
      <th>可选值</th> 
      <th>默认值</th>
     </tr>
    </thead> 
    <tbody>
    <tr>
      <td>data</td> 
      <td>数据列表</td> 
      <td>Array</td> 
      <td>-</td> 
      <td>-</td>
    </tr>
    <tr>
      <td>showStatus</td> 
      <td>控制组件显示</td> 
      <td>Boolean</td> 
      <td>true, false</td> 
      <td>false</td>
    </tr>
    <tr>
      <td>@cancelBtn</td> 
      <td>取消按钮事件</td> 
      <td>Function</td> 
      <td>-</td> 
      <td>-</td>
    </tr>
    <tr>
      <td>@confirmBtn</td> 
      <td>确定按钮事件</td> 
      <td>Function</td> 
      <td>-</td> 
      <td>-</td>
    </tr>
    </tbody>
   </table>
  </div>
  