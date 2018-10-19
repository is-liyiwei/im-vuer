> 使用

```js
import { Picker } form 'im-vuer'
Vue.component(Picker.name, Picker)
```

> 示例代码

```js
<template>
  <div class="demo-picker" style="height: calc(100vh - 100px);">

    <button id="btn" @click="togglePicker">open</button>

    <im-picker v-model="showPicker" @cancelBtn="togglePicker" @confirmBtn="confirm">
      <im-picker-item :data="hour"></im-picker-item>
      <im-picker-item :data="minutes"></im-picker-item>
      <im-picker-item :data="seconds"></im-picker-item>
    </im-picker>

    <div class="result">选择的是：{{result}}</div>
  </div>
</template>

<script>
let i = 1
let _hour = Array.apply(null, Array(12)).map(() => i++ + '时')
let j = 1
let _minutes = Array.apply(null, Array(60)).map(() => j++ + '分')
let k = 1
let _seconds = Array.apply(null, Array(60)).map(() => k++ + '秒')

export default {
  name: 'picker',
  data () {
    return {
      hour: _hour,
      minutes: _minutes,
      seconds: _seconds,
      result: [],
      showPicker: false,
      showLayer: false
    }
  },
  methods: {
    togglePicker () {
      this.showPicker = !this.showPicker
    },
    confirm (value) {
      this.result = value
      this.showPicker = !this.showPicker
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#btn {
   border: none;
   background-color: #00bfff;
   color: #FFF;
   padding: .2rem;
   margin: .2rem auto;
   width: 90%;
   display: block;
   font-size: .37rem;
}

.result {
  font-size: .37rem;
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
        <td>data</td> 
        <td>数据列表</td> 
        <td>Array</td> 
        <td>-</td> 
        <td>[]</td>
      </tr><tr>
        <td>v-model</td> 
        <td>控制组件显示</td> 
        <td>Boolean</td> 
        <td>-</td> 
        <td>false</td>
      </tr><tr>
        <td>@cancelBtn</td> 
        <td>取消按钮事件</td> 
        <td>Function</td> 
        <td>-</td> 
        <td>-</td>
      </tr><tr>
        <td>@confirmBtn</td> 
        <td>确定按钮事件</td> 
        <td>Function</td> 
        <td>-</td> 
        <td>-</td>
      </tr>
    </tbody>
  </table>
</div>