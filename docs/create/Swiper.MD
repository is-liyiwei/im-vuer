
> 使用

```js

import { Swiper } form 'im-vuer'

Vue.component(${Swiper.name}, Swiper)

```

> 示例代码

```js

<template>
  <div class="demo-swiper" style="height: 5rem;">

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
      },{
        id: 2,
        img: 'http://img15.3lian.com/2016/h1/75/d/211.jpg',
        text: '这是个图片2'
      },{
        id: 3,
        img: 'http://img15.3lian.com/2016/h1/75/d/212.jpg',
        text: '这是个图片3'
      },{
        id: 4,
        img: 'http://img15.3lian.com/2016/h1/75/d/213.jpg',
        text: '这是个图片3'
      },{
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
  },
  components: {

  },
  created: function () {
    
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

