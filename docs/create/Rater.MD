
> 使用

```js

import { Rater } form 'im-vuer'

Vue.component(${Rater.name}, Rater)

```

> 示例代码

```js

<template>
  <div>
    <div style="margin: 50px 0;"><im-rater v-model="data1" :min="3"></im-rater></div>
  	<div style="margin: 50px 0;"><im-rater v-model="data2" :max="8" active-color="#04BE02"></im-rater></div>
  	<div style="margin: 50px 0;"><im-rater v-model="data3" disabled></im-rater></div>
  	<div style="margin: 50px 0;"><im-rater v-model="data4" active-color="#04BE02" disabled></im-rater></div>
  	<div style="margin: 50px 0;"><im-rater v-model="data42" active-color="#3c6fff" :font-size="'.8rem'"></im-rater></div>
  	<div style="margin: 50px 0;"><im-rater v-model="data4" star="♡" active-color="red" :margin="'0.3rem'"></im-rater></div>
  	<div style="margin: 50px 0;"><im-rater v-model="data41" star="<span>X</span>" active-color="red" :margin="'0.3rem'"></im-rater></div>
  	<div style="margin: 50px 0;"><im-rater v-model="data5" star="☼" active-color="#FF9900" :margin="'0.3rem'"></im-rater></div>
  	<div style="margin: 50px 0;"><im-rater v-model="data5" star="☻" active-color="#9100ff" :margin="'0.3rem'"></im-rater></div>
  	<div style="margin: 50px 0;"><im-rater v-model="data5" star="✩" active-color="#f00" :margin="'0.3rem'"></im-rater></div>
  	<div style="margin: 50px 0;"><im-rater v-model="data5" star="囧" active-color="#FF9900" :margin="'0.3rem'"></im-rater></div>
  </div>
</template>

<script>

export default {
  name: 'rater',
  components: {

  },
  data () {
    return {
      data1: 1,
      data2: 5,
      data3: '5',
      data4: 3,
      data41: 3.7,
      data42: 3.5,
      data5: 3,
    }
  },
  methods: {

  },
  watch: {
  	data1 (newVal, oldVal) {
  		console.log(newVal)
  	}
  }
}
</script>

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

