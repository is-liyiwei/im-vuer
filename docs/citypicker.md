> 使用

```js
import { CityPicker } form 'im-vuer'
Vue.component(CityPicker.name, CityPicker)
```

> 示例代码

```js
<template>
  <div class="demo-picker">
    <button class="picker-btn" @click="showPickerFn">open</button>

    <div style="font-size: .3rem;text-align: center;">当前数据结构(异步获取)</div>
    <pre style="font-size: .3rem;height: 10rem;overflow: scroll;background-color: #000f5a;color: #FFF;">{{data}}</pre>

    <div style="font-size: .3rem;text-align: center;">城市数据来源: https://github.com/ydcss/ydui-district</div>
    <div style="font-size: .3rem;text-align: center;margin: 20px 0;">选择的是：{{test}}</div>

    <im-city-picker ref="picker" :data="data" v-model="showPicker" @cancelBtn="cancel" @confirmBtn="confirm"></im-city-picker>
  </div>
</template>

<script>
import data1 from './format_gov_province_city_area_id.js'

export default {
  name: 'picker',
  data () {
    return {
      data: [],
      showPicker: false,
      test: ''
    }
  },
  created () {
    // 异步数据测试
    setTimeout(() => {
      this.data = data1
    }, 1000)
  },
  methods: {
    showPickerFn () {
      this.showPicker = !this.showPicker
    },
    cancel () {
      this.showPicker = !this.showPicker
    },
    confirm (value) {
      this.test = `${value[0].n}-${value[1].n}-${value[2].n}`
      this.showPicker = !this.showPicker
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.picker-btn {
  border: none;
  background-color: #00bfff;
  color: #fff;
  padding: 0.2rem;
  margin: 0.5rem auto;
  width: 90%;
  display: block;
  font-size: 0.37rem;
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
      </tr>
      <tr>
        <td>v-model</td> 
        <td>控制组件显示</td> 
        <td>Boolean</td> 
        <td>-</td> 
        <td>false</td>
      </tr>
      <tr>
        <td>bgColor</td> 
        <td>背景颜色</td> 
        <td>String</td> 
        <td>-</td> 
        <td>#00bfff</td>
      </tr>
      <tr>
        <td>cancelBtnColor</td> 
        <td>取消文字颜色</td> 
        <td>String</td> 
        <td></td> 
        <td>#fff</td>
      </tr>
      <tr>
        <td>confirmBtnColor</td> 
        <td>确定文字颜色</td> 
        <td>String</td> 
        <td></td> 
        <td>#fff</td>
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