> 使用

```js
import { DatePicker } form 'im-vuer'
Vue.component(DatePicker.name, DatePicker)
```

> 示例代码

```js
<template>
  <div class="demo-date-picker">
    <div class="result-txt">选择的是：{{date_user_style}}</div>
    <button id="btn" @click="showCtrl_user_style = !showCtrl_user_style">自定义颜色</button>
    <im-date-picker
      @confirm="datePickerConfirm_user_style"
      headerColor="#ff9c9c"
      itemColor="#673ab7"
      cancelBtn="#888"
      confirmBtn="#f00"
      v-model="showCtrl_user_style">
    </im-date-picker>
    <div class="result-txt">选择的是：{{date_default_style}}</div>
    <button id="btn" @click="showCtrl_default_style = !showCtrl_default_style">默认颜色</button>
    <im-date-picker @confirm="datePickerConfirm_default_style" v-model="showCtrl_default_style"></im-date-picker>
  </div>
</template>

<script>
export default {
  name: 'date-picker',
  data () {
    return {
      date_user_style: '',
      date_default_style: '',
      showCtrl_user_style: false,
      showCtrl_default_style: false
    }
  },
  created: function () {

  },
  methods: {
    datePickerConfirm_user_style (v) {
      this.date_user_style = v
    },
    datePickerConfirm_default_style (v) {
      this.date_default_style = v
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.result-txt {
 font-size: 32px;
 margin: 30px;
 text-align: center;
}

#btn {
   border: none;
   background-color: #00bfff;
   color: #FFF;
   padding: .2rem;
   margin: .2rem auto;
   width: 90%;
   display: block;
   font-size: 32px;
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
        <td>headerColor</td> 
        <td>头部颜色</td> 
        <td>String</td> 
        <td>-</td> 
        <td>#00bfff</td>
      </tr>
      <tr>
        <td>itemColor</td> 
        <td>每一项颜色</td> 
        <td>String</td> 
        <td>-</td> 
        <td>#00bfff</td>
      </tr>
      <tr>
        <td>cancelBtn</td> 
        <td>取消按钮颜色</td> 
        <td>String</td> 
        <td>-</td> 
        <td>#000000</td>
      </tr>
      <tr>
        <td>confirmBtn</td> 
        <td>确定按钮颜色</td> 
        <td>String</td> 
        <td>-</td> 
        <td>#00bfff</td>
      </tr>
      <tr>
        <td>v-model</td> 
        <td>控制组件显示</td> 
        <td>Boolean</td> 
        <td>-</td> 
        <td>false</td>
      </tr>
      <tr>
        <td>@confirm</td> 
        <td>确定按钮事件</td> 
        <td>Function</td> 
        <td>-</td> 
        <td>-</td>
      </tr>
      
    </tbody>
  </table>
</div>