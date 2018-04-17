
> 使用
```js
import { CheckBox } form 'im-vuer'
Vue.component(${CheckBox.name}, CheckBox)
```

> 示例代码
```js
<template>
  <div class="demo-checkbox">
    <div style="display: flex;justify-content: space-around;flex-direction: column;">
      <im-checkbox v-model="result">
        <div class="demo-box">
          <im-checkbox-item :isCheck="true" :val="'haha1'" activeBgColor="#ff71e0" activeColor="#00ff37"></im-checkbox-item>
        </div>
        <div class="demo-box">
          <im-checkbox-item :isCheck="false" :val="'haha2'"></im-checkbox-item>
        </div>
        <div class="demo-box">
          <im-checkbox-item :isCheck="false" :val="'haha3'"></im-checkbox-item>
        </div>
        <div class="demo-box">
          <im-checkbox-item :isCheck="true" :val="'haha4'"></im-checkbox-item>
        </div>
      </im-checkbox>
    </div>
    <div class="result-box">当前选择：{{result}}</div>
  </div>
</template>

<script>
export default {
  name: 'checkbox',
  data () {
    return {
      result: []
    }
  },
  components: {

  },
  created: function () {
    console.log(this.result)
  },
  watch: {
    result (newVal) {
      console.log(newVal)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.demo-box {
  border-bottom: 1px solid #777;
  padding: 20px 50px;
}

.result-box {
  font-size: .3rem;
  text-align: center;
  padding: .5rem;
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
  