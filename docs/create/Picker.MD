
> 使用

```js

import { Picker } form 'im-vuer'

Vue.component(${Picker.name}, Picker)

```

> 示例代码

```js

<template>
  <div class="demo-picker">

    <button id="btn" @click="togglePicker">open</button>

    <div @click="togglePicker" v-if="showLayer" class="layer"></div>

    <im-picker :showStatus="showPicker" @cancelBtn="togglePicker" @confirmBtn="confirm">
      <im-picker-item :data="hour"></im-picker-item>
      <im-picker-item :data="minutes"></im-picker-item>
      <im-picker-item :data="seconds"></im-picker-item>
    </im-picker>

    <div class="result">选择的是：{{result}}</div>
  </div>
</template>

<script>
let i = 1;
let _hour = Array.apply(null, Array(12)).map(() => i++ + '时');
let j = 1;
let _minutes = Array.apply(null, Array(60)).map(() => j++ + '分');
let k = 1;
let _seconds = Array.apply(null, Array(60)).map(() => k++ + '秒');

export default {
  name: 'picker',
  data () {
    return {
      hour: _hour,
      minutes: _minutes,
      seconds: _seconds,
      result: [],
      showPicker: false,
      showLayer: false
    }
  },
  methods: {
    togglePicker () {
      this.showPicker = !this.showPicker;
      this.showLayer = !this.showLayer;
    },
    confirm (value) {
      this.result = value;
      this.showPicker = !this.showPicker;
      this.showLayer = !this.showLayer;
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
   font-size: .2rem;
}

.layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .5);
}

.result {
  font-size: .37rem;
  text-align: center;
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

