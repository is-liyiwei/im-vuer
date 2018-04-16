
> 使用

```js

import { Radio } form 'im-vuer'

Vue.component(${Radio.name}, Radio)

```

> 示例代码

```js

<template>
  <div class="demo-radio">
   <im-radio v-model="radio1">
   	<im-radio-item val="我是1"></im-radio-item>
   	<im-radio-item val="我是2"></im-radio-item>
   	<im-radio-item val="我是3"></im-radio-item>
   </im-radio>

   <br>

   <im-radio v-model="radio2">
   	<template v-for="v in 3">
   		<im-radio-item :val="v" bgColor="#f00" textColor="#f00"></im-radio-item>
   	</template>
   </im-radio>

   <br>

   <im-radio v-model="radio3">
   	<im-radio-item val="启用1"></im-radio-item>
   	<im-radio-item val="启用2"></im-radio-item>
   	<im-radio-item val="禁用1" :disabled="true" bgColor="#333" textColor="#333"></im-radio-item>
   </im-radio>

   <br>

   <im-radio v-model="radio4">
   	<im-radio-item val="大号字体1" size=".6rem"></im-radio-item>
   	<im-radio-item val="大号字体2" size=".6rem"></im-radio-item>
   	<im-radio-item val="大号字体3" size=".6rem"></im-radio-item>
   </im-radio>
  </div>
</template>

<script>
export default {
  name: 'radio',
  data () {
    return {
      radio1: '我是1',
      radio2: 2,
      radio3: '',
      radio4: '大号字体1'
    }
  },
  components: {

  },
  created: function () {
    
  },
  watch: {
  	radio1 (newVal, oldVal) {
  		console.log(newVal, oldVal)
  	},
  	radio2 (newVal, oldVal) {
  		console.log(newVal, oldVal)
  	},
  	radio3 (newVal, oldVal) {
  		console.log(newVal, oldVal)
  	},
  	radio4 (newVal, oldVal) {
  		console.log(newVal, oldVal)
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

