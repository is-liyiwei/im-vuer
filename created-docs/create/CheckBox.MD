> 使用

```js
import { CheckBox } form 'im-vuer'
Vue.component(CheckBox.name, CheckBox)
```

> 示例代码

```js
<template>
  <div class="demo-checkbox">
    <div style="display: flex;justify-content: space-around;flex-direction: column;padding: 20px;">
      <im-checkbox v-model="square">
        <im-checkbox-item :isCheck="false" :val="'square1'" activeBgColor="#ff71e0" activeColor="#00ff37"></im-checkbox-item>
        <im-checkbox-item :isCheck="true" :val="'square2'" activeBgColor="#f00" activeColor="#fbff00"></im-checkbox-item>
        <im-checkbox-item :isCheck="false" :val="'square3'"></im-checkbox-item>
        <im-checkbox-item :isCheck="true" :val="'square4'"></im-checkbox-item>
      </im-checkbox>
    </div>
    <div class="result-box">当前选择：{{square}}</div>

    <div style="display: flex;justify-content: space-around;flex-direction: column;padding: 20px;">
      <im-checkbox v-model="circle">
        <im-checkbox-item circle :isCheck="true" :val="'circle1'"></im-checkbox-item>
        <im-checkbox-item circle :isCheck="true" :val="'circle2'"></im-checkbox-item>
        <im-checkbox-item circle :isCheck="true" :val="'circle3'"></im-checkbox-item>
        <im-checkbox-item circle :isCheck="true" :val="'circle4'"></im-checkbox-item>
      </im-checkbox>
    </div>
    <div class="result-box">当前选择：{{circle}}</div>

    <im-checkbox v-model="horizontal" style="display: flex;justify-content: space-around;">
      <im-checkbox-item circle :isCheck="true" :val="'circle1'"></im-checkbox-item>
      <im-checkbox-item circle :isCheck="true" :val="'circle2'"></im-checkbox-item>
      <im-checkbox-item circle :isCheck="true" :val="'circle3'"></im-checkbox-item>
      <im-checkbox-item circle :isCheck="true" :val="'circle4'"></im-checkbox-item>
    </im-checkbox>
    <div class="result-box">当前选择：{{horizontal}}</div>

  </div>
</template>

<script>
export default {
  name: 'checkbox',
  data () {
    return {
      square: [],
      circle: [],
      horizontal: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.result-box {
  font-size: .3rem;
  padding: 20px;
  color: #909090;
  background-color: rgba(234, 234, 234, .6);
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
        <td>isCheck</td> 
        <td>是否选择</td> 
        <td>Boolean</td> 
        <td>-</td> 
        <td>false</td>
      </tr>
      <tr>
        <td>val</td> 
        <td>文本</td> 
        <td>String</td> 
        <td>-</td> 
        <td>-</td>
      </tr>
      <tr>
        <td>activeBgColor</td> 
        <td>选中背景颜色</td> 
        <td>String</td> 
        <td>-</td> 
        <td>#00BFFF</td>
      </tr>
      <tr>
        <td>activeColor</td> 
        <td>选中图标颜色</td> 
        <td>String</td> 
        <td>-</td> 
        <td>#FFFFFF</td>
      </tr>
      <tr>
        <td>circle</td> 
        <td>是否圆形</td> 
        <td>Boolean</td> 
        <td>-</td> 
        <td>false</td>
      </tr>
      
    </tbody>
  </table>
</div>