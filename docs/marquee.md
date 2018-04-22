
> 使用

```js
import { Marquee } form 'im-vuer'
Vue.component(Marquee.name, Marquee)
```

> 示例代码

```js
<template>
  <div class="demo-marquee">

    <br>
    <im-marquee>
      <div 
      class="single" 
      v-for="i in 5" :key="i" 
      @click="onClick(i)">single item up for {{i}}</div>
    </im-marquee>

    <br>
    <im-marquee scrollStatus="down" duration="300" interval="1500">
      <div 
      class="double" 
      v-for="i in 5" :key="i" 
      @click="onClick(i)">
        <p>double item down for {{i}}</p>
        <p>double item down for {{i}}</p>
        <p>double item down for {{i}}</p>
      </div>
    </im-marquee>

  </div>
</template>

<script>
export default {
  name: 'marquee',
  data () {
    return {
      
    }
  },
  methods: {
    onClick (i) {
      console.log(i)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.single {
  font-size: .37rem;
  height: .8rem;
  line-height: .8rem;
  background-color: #00bfff;
  color: #FFF;
}
.double {
  font-size: .37rem;
  height: 2.8rem;
  background-color: #00bfff;
  color: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
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
      <td>scrollStatus</td> 
      <td>滚动方向</td> 
      <td>String</td> 
      <td>up, down</td> 
      <td>up</td>
    </tr>
    <tr>
      <td>duration</td> 
      <td>动画时长</td> 
      <td>[Number, String]</td> 
      <td></td> 
      <td>300</td>
    </tr>
    <tr>
      <td>interval</td> 
      <td>动画间隔时长</td> 
      <td>[Number, String]</td> 
      <td></td> 
      <td>3000</td>
    </tr>
    </tbody>
   </table>
  </div>
  