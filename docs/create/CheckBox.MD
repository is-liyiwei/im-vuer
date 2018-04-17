
> 使用
```js
import { CheckBox } form 'im-vuer'
Vue.component(${CheckBox.name}, CheckBox)
```

> 示例代码
```js
<template>
  <div class="demo-checkbox">
    <div style="display: flex;justify-content: space-around;flex-direction: column;height: 500px;margin: 80px;">
      <im-checkbox v-model="data1" activeBgColor="#ff71e0" activeColor="#00ff37"></im-checkbox>
      <im-checkbox v-model="data2"></im-checkbox>
      <im-checkbox v-model="data3"></im-checkbox>
      <im-checkbox v-model="data4"></im-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  name: 'checkbox',
  data () {
    return {
      data1: false,
      data2: true,
      data3: false,
      data4: true
    }
  },
  components: {

  },
  created: function () {
    
  },
  watch: {
  	data1 (val) {
  		console.log('data1 is : ', val)
  	},
  	data2 (val) {
  		console.log('data2 is : ', val)
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
      <td>current</td> 
      <td>当前索引值</td> 
      <td>[String, Number]</td> 
      <td>-</td> 
      <td>-</td>
    </tr>
    <tr>
      <td>list</td> 
      <td>数据列表</td> 
      <td>String</td> 
      <td>-</td> 
      <td>-</td>
    </tr>
    </tbody>
   </table>
  </div>
  