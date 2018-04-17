
> 使用
```js
import { CountUp } form 'im-vuer'
Vue.component(${CountUp.name}, CountUp)
```

> 示例代码
```js
<template>
  <div class="demo-countup">
    <div class="box">
      <p>thanks：https://github.com/inorganik/countUp.js</p>
      <im-countup :endVal="88.88" :decimals="2" txtColor="#f00"></im-countup>
      <im-countup :endVal="6666" :duration="50"></im-countup>
      <im-countup :start="start" :startVal="startVal" :endVal="endVal" :duration="duration" ref="c" fz="1rem"></im-countup>
    </div>
    <button class="btn" @click="startHandle()">start / pause</button>
    <button class="btn" @click="endVal = 2000">set endVal</button>
    <button class="btn" @click="reset()">reset</button>
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

.box {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  font-size: .3rem;
  height: 5rem;
  p {
    color: red;
    font-size: .27rem;
  }
}

.btn {
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
      <td>start</td> 
      <td>是否开始</td> 
      <td>Boolean</td> 
      <td>-</td> 
      <td>false</td>
    </tr>
    <tr>
      <td>startVal</td> 
      <td>开始值</td> 
      <td>Number</td> 
      <td>-</td> 
      <td>0</td>
    </tr>
    <tr>
      <td>endVal</td> 
      <td>结束值</td> 
      <td>Number</td> 
      <td>-</td> 
      <td>100</td>
    </tr>
    <tr>
      <td>decimals</td> 
      <td>保留小数位</td> 
      <td>Number</td> 
      <td>-</td> 
      <td>0</td>
    </tr>
    <tr>
      <td>duration</td> 
      <td>动画时间</td> 
      <td>Number</td> 
      <td>-</td> 
      <td>2</td>
    </tr>
    <tr>
      <td>txtColor</td> 
      <td>文本颜色</td> 
      <td>String</td> 
      <td>-</td> 
      <td>#00bfff</td>
    </tr>
    <tr>
      <td>fz</td> 
      <td>文本大小</td> 
      <td>String</td> 
      <td>-</td> 
      <td>.37rem</td>
    </tr>
    </tbody>
   </table>
  </div>
  