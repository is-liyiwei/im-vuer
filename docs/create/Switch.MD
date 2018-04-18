
> 使用
```js
import { Switch } form 'im-vuer'
Vue.component(${Switch.name}, Switch)
```

> 示例代码
```js
<template>
  <div class="demo-switch">

    <div class="switch-box">
      <span class="result">当前状态：{{data1}}</span>
      <im-switch v-model="data1" :onColor="'#28e1bd'" :onBgColor="'#1abc9c'"></im-switch>
    </div>

    <div class="switch-box small">
      <span class="result">当前状态：{{data2}}</span>
      <im-switch v-model="data2"></im-switch>
    </div>

    <div class="switch-box">
      <span class="result">当前状态：{{data3}}</span>
      <im-switch v-model="data3" :onColor="'#ed7669'" :onBgColor="'#e74c3c'"></im-switch>
    </div>

    <div class="switch-box small">
      <span class="result">当前状态：{{data4}}</span>
      <im-switch v-model="data4" :onColor="'#eb9950'" :onBgColor="'#e67e22'"></im-switch>
    </div>

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
      data4: false
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
.demo-switch .switch-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .2rem;
}

.demo-switch .switch-box .result {
  font-size: .37rem;
}

.small {
  height: 1rem;
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
      <td>v-model</td> 
      <td>当前值</td> 
      <td>Boolean</td> 
      <td>-</td> 
      <td>false</td>
    </tr>
    <tr>
      <td>onColor</td> 
      <td>选中颜色</td> 
      <td>String</td> 
      <td>-</td> 
      <td>#00bfff</td>
    </tr>
    <tr>
      <td>onBgColor</td> 
      <td>选中背景颜色</td> 
      <td>String</td> 
      <td>-</td> 
      <td>#00bfff</td>
    </tr>
    </tbody>
   </table>
  </div>
  