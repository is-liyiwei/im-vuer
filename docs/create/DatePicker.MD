
> 使用

```js

import { DatePicker } form 'im-vuer'

Vue.component(${DatePicker.name}, DatePicker)

```

> 示例代码

```js

<template>
  <div class="demo-date-picker">
    
    <div style="font-size: .3rem;margin: 30px;text-align: center;">选择的是：{{date_user_style}}</div>
    <button id="btn" @click="showCtrl_user_style = !showCtrl_user_style">showCtrl_user_style</button>

    <im-date-picker 
    @confirm="datePickerConfirm_user_style"
    headerColor="#ff9c9c" 
    itemColor="#673ab7" 
    cancelBtn="#888" 
    confirmBtn="#f00"
    v-model="showCtrl_user_style"></im-date-picker>

    <div style="font-size: .3rem;margin: 30px;text-align: center;">选择的是：{{date_default_style}}</div>
    <button id="btn" @click="showCtrl_default_style = !showCtrl_default_style">showCtrl_default_style</button>

    <im-date-picker 
    @confirm="datePickerConfirm_default_style"
    v-model="showCtrl_default_style"></im-date-picker>
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

