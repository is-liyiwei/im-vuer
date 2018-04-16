
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

