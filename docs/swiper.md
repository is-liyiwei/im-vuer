> 使用

```js
import { Swiper } form 'im-vuer'
Vue.component(Swiper.name, Swiper)
```

> 示例代码

```js
<template>
  <div class="demo-swiper" style="height: 7rem;">

    <im-swiper @tap-swiper="tapSwiper" @on-swiper="onSwiper" :speed="350" :loop="false" :autoPlay="0" :idx="2">
     <im-swiper-item v-for="(v, k) in swipeList" :key="k">
      <img :src="v.img" alt="">
     </im-swiper-item>
    </im-swiper>

    <br>

    <im-swiper @tap-swiper="tapSwiper" @on-swiper="onSwiper" :dotColor="'#FFF'" :dotActiveColor="'#00bfff'">
     <im-swiper-item v-for="(v, k) in swipeList" :key="k">
      <img :src="v.img" alt="">
     </im-swiper-item>
    </im-swiper>

  </div>
</template>

<script>
export default {
  name: 'swiper',
  data () {
    return {
      swipeList: [{
        id: 1,
        img: 'http://img15.3lian.com/2016/h1/75/d/210.jpg',
        text: '这是个图片1'
      }, {
        id: 2,
        img: 'http://img15.3lian.com/2016/h1/75/d/211.jpg',
        text: '这是个图片2'
      }, {
        id: 3,
        img: 'http://img15.3lian.com/2016/h1/75/d/212.jpg',
        text: '这是个图片3'
      }, {
        id: 4,
        img: 'http://img15.3lian.com/2016/h1/75/d/213.jpg',
        text: '这是个图片3'
      }, {
        id: 5,
        img: 'http://img15.3lian.com/2016/h1/75/d/214.jpg',
        text: '这是个图片3'
      }]
    }
  },
  methods: {
    tapSwiper (idx) {
      console.log(idx)
    },
    onSwiper (idx) {
      console.log(idx)
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
        <th>可选值/备注</th> 
        <th>默认值</th>
      </tr>
    </thead> 
    <tbody>
      <tr>
        <td>speed</td> 
        <td>动画速度</td> 
        <td>Number, String</td> 
        <td>-</td> 
        <td>350</td>
      </tr>
      <tr>
        <td>loop</td> 
        <td>是否循环</td> 
        <td>Boolean</td> 
        <td>-</td> 
        <td>true</td>
      </tr>
      <tr>
        <td>autoPlay</td> 
        <td>自动播放时间间隔</td> 
        <td>Number, String</td> 
        <td>为0时不自动播放</td> 
        <td>3000</td>
      </tr>
      <tr>
        <td>idx</td> 
        <td>当前图片索引</td> 
        <td>Number, String</td> 
        <td>-</td> 
        <td>0</td>
      </tr>
      <tr>
        <td>dotColor</td> 
        <td>点颜色</td> 
        <td>String</td> 
        <td>为0时不自动播放</td> 
        <td>#fff</td>
      </tr>
      <tr>
        <td>dotActiveColor</td> 
        <td>点选中颜色</td> 
        <td>String</td> 
        <td>为0时不自动播放</td> 
        <td>#f00</td>
      </tr>
      <tr>
        <td>isTabView</td> 
        <td>是否配合tab组件使用</td> 
        <td>Boolean</td> 
        <td>详情看demo</td> 
        <td>false</td>
      </tr>
      <tr>
        <td>@on-swiper</td> 
        <td>滑动事件</td> 
        <td>Function</td> 
        <td>返回1或-1代表正反向</td> 
        <td>-</td>
      </tr>
      <tr>
        <td>@tap-swiper</td> 
        <td>点击事件</td> 
        <td>Function</td> 
        <td>返回索引值</td> 
        <td>-</td>
      </tr>
      
    </tbody>
  </table>
</div>