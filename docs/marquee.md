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
    <im-marquee>
      <div
      class="single-and-pic"
      v-for="i in 5" :key="i"
      @click="onClick(i)">
        <img :src="imgData[i]" alt="">
        <p>single item up for {{i}}</p>
      </div>
    </im-marquee>
    <br>
    <im-marquee scrollStatus="down" duration="300" interval="1500">
      <div
      class="double"
      v-for="i in 5" :key="i"
      :style="{background: bgC[i]}"
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
      imgData: [
        'http://img15.3lian.com/2016/h1/75/d/210.jpg',
        'http://img15.3lian.com/2016/h1/75/d/211.jpg',
        'http://img15.3lian.com/2016/h1/75/d/212.jpg',
        'http://img15.3lian.com/2016/h1/75/d/213.jpg',
        'http://img15.3lian.com/2016/h1/75/d/214.jpg',
        'http://img15.3lian.com/2016/h1/75/d/210.jpg'
      ],
      bgC: ['red', '#00bfff', 'orange', 'maroon', 'lime', 'navy']
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
  font-size: 38px;
  height: 2rem;
  line-height: 2rem;
  background-color: #c250c7;
  color: #FFF;
}

.double {
  font-size: 38px;
  height: 3rem;
  color: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.single-and-pic {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  background-color: #00bfff;
  img {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
  }
  p {
    font-size: 38px;
    padding-left: .2rem;
    height: .8rem;
    line-height: .8rem;
    color: #FFF;
  }
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
      </tr><tr>
        <td>duration</td> 
        <td>动画时长</td> 
        <td>[Number, String]</td> 
        <td></td> 
        <td>300</td>
      </tr><tr>
        <td>interval</td> 
        <td>动画间隔时长</td> 
        <td>[Number, String]</td> 
        <td></td> 
        <td>3000</td>
      </tr>
    </tbody>
  </table>
</div>