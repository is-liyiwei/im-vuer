
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
      <th>可选值/备注</th> 
      <th>默认值</th>
     </tr>
    </thead> 
    <tbody>
    <tr>
      <td>v-model</td> 
      <td>当前值</td> 
      <td>-</td> 
      <td>-</td> 
      <td>-</td>
    </tr>
    <tr>
      <td>min</td> 
      <td>最小值</td> 
      <td>Number</td> 
      <td>-</td> 
      <td>0</td>
    </tr>
    <tr>
      <td>max</td> 
      <td>最大值</td> 
      <td>Number</td> 
      <td>-</td> 
      <td>5</td>
    </tr>
    <tr>
      <td>disabled</td> 
      <td>是否禁用</td> 
      <td>Boolean</td> 
      <td>-</td> 
      <td>false</td>
    </tr>
    <tr>
      <td>star</td> 
      <td>html模板</td> 
      <td>String</td> 
      <td>-</td> 
      <td>★</td>
    </tr>
    <tr>
      <td>activeColor</td> 
      <td>选中颜色</td> 
      <td>String</td> 
      <td>-</td> 
      <td>#00bfff</td>
    </tr>
    <tr>
      <td>margin</td> 
      <td>边距</td> 
      <td>String</td> 
      <td>-</td> 
      <td>0.2rem</td>
    </tr>
    <tr>
      <td>fontSize</td> 
      <td>大小</td> 
      <td>String</td> 
      <td>-</td> 
      <td>0.4rem</td>
    </tr>
    <tr>
      <td>offColor</td> 
      <td>没选中颜色</td> 
      <td>String</td> 
      <td>-</td> 
      <td>#ccc</td>
    </tr>
    </tbody>
   </table>
  </div>
  