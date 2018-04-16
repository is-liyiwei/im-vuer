
> 使用

```js

import { CountUp } form 'im-vuer'

Vue.component(${CountUp.name}, CountUp)

```

> 示例代码

```js

<template>
  <div class="demo-countup">
    <p>thanks:https://github.com/inorganik/countUp.js</p>
    <im-countup :start="start" :startVal="startVal" :endVal="endVal" :duration="duration" ref="c"></im-countup>
    <button @click="startHandle()">start/pause</button>
    <button @click="endVal = 2000">set endVal</button>
    <button @click="reset()">reset</button>
  </div>
</template>

<script>

export default {
  name: 'countup',
  data () {
    return {
      start: false,
      startVal: 10,
      endVal: 200,
      duration: 3
    }
  },
  components: {

  },
  mounted: function () {

  },
  methods: {
    startHandle () {
      this.start = !this.start;
    },
    reset () {
      this.$refs.c._countup.reset();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
button {
  display: block;
  font-size: .4rem;
  margin: 20px;
  padding: 20px;
}
p {
  font-size: .3rem;
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

