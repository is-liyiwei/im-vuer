> 使用

```js
import { Radio } form 'im-vuer'
Vue.component(Radio.name, Radio)
```

> 示例代码

```js
<template>
  <div class="demo-radio">

    <im-radio v-model="radio1">
      <im-radio-item val="item1"></im-radio-item>
      <im-radio-item val="item2"></im-radio-item>
      <im-radio-item val="item3"></im-radio-item>
    </im-radio>
      <p class="result">默认：{{radio1}}</p>

    <im-radio v-model="radio2">
      <im-radio-item v-for="(v, k) in 3" :key="k" :val="v" bgColor="#f00" textColor="#f00"></im-radio-item>
    </im-radio>
    <p class="result">颜色：{{radio2}}</p>

    <im-radio v-model="radio3">
      <im-radio-item val="启用1"></im-radio-item>
      <im-radio-item val="启用2"></im-radio-item>
      <im-radio-item val="禁用1" :disabled="true" bgColor="#333" textColor="#333"></im-radio-item>
    </im-radio>
    <p class="result">禁用：{{radio3}}</p>

    <im-radio v-model="radio4">
      <im-radio-item val="big1" size="60px"></im-radio-item>
      <im-radio-item val="big2" size="60px"></im-radio-item>
      <im-radio-item val="big3" size="60px"></im-radio-item>
    </im-radio>
    <p class="result">大小：{{radio4}}</p>

    <im-radio v-model="radio5" class="horizontal">
      <im-radio-item val="horizontal1"></im-radio-item>
      <im-radio-item val="horizontal2"></im-radio-item>
      <im-radio-item val="horizontal3"></im-radio-item>
    </im-radio>
    <p class="result">方向：{{radio5}}</p>

  </div>
</template>

<script>
export default {
  name: 'radio',
  data () {
    return {
      radio1: 'item1',
      radio2: 2,
      radio3: '',
      radio4: 'big1',
      radio5: ''
    }
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
.demo-radio .result {
  font-size: 28px;
  padding: 20px;
  margin: 0;
  color: #909090;
  background-color: rgba(234, 234, 234, .6);
}

.horizontal {
  display: flex;
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
        <td>v-model</td> 
        <td>获取的值</td> 
        <td>-</td> 
        <td>-</td> 
        <td>-</td>
      </tr><tr>
        <td>val</td> 
        <td>item值</td> 
        <td>Number, String</td> 
        <td>-</td> 
        <td>-</td>
      </tr><tr>
        <td>disabled</td> 
        <td>是否禁用</td> 
        <td>Boolean</td> 
        <td>-</td> 
        <td>false</td>
      </tr><tr>
        <td>bgColor</td> 
        <td>颜色</td> 
        <td>String</td> 
        <td>-</td> 
        <td>#00BFFF</td>
      </tr><tr>
        <td>size</td> 
        <td>大小</td> 
        <td>String</td> 
        <td>-</td> 
        <td>22px</td>
      </tr><tr>
        <td>textFz</td> 
        <td>文本大小</td> 
        <td>String</td> 
        <td>-</td> 
        <td>.2rem</td>
      </tr><tr>
        <td>textColor</td> 
        <td>文本颜色</td> 
        <td>String</td> 
        <td>-</td> 
        <td>#888</td>
      </tr>
    </tbody>
  </table>
</div>