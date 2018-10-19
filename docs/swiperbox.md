> 使用

```js
import { SwiperBox } form 'im-vuer'
Vue.component(SwiperBox.name, SwiperBox)
```

> 示例代码

```js
<template>
  <div class="demo-swiper-box">
    <im-tab @on-tab="tabClick" lineThickness="5px" :activeCurrIndex="activeCurrIndex" :list='list'></im-tab>
    <im-swiper @on-swiper="onSwiper" :isTabView="true" :idx="activeCurrIndex" :autoPlay="0" :loop="false" dotColor="transparent" dotActiveColor="transparent">
     <im-swiper-item v-for="(v, k) in list.length" :key="k">
      <div class="swiper-box">这是tab组件和swiper组件一起使用的{{v}}</div>
     </im-swiper-item>
    </im-swiper>
  </div>
</template>

<script>
export default {
  name: 'swiper-box',
  data () {
    return {
      list: [{
        name: '电影'
      }, {
        name: '电视剧'
      }, {
        name: '音乐'
      }, {
        name: '动漫'
      }],
      activeCurrIndex: 1
    }
  },
  methods: {
    onSwiper (idx) {
      this.activeCurrIndex += idx
    },
    tabClick (idx) {
      this.activeCurrIndex = idx
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.swiper-box {
  height: 60vh;
  width: 100%;
  font-size: 32px;
  background-color: #6f6dff;
  color: #FFF;
  text-align: center;
  line-height: 60vh;
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
        <td>参考demo更简明</td> 
        <td>-</td> 
        <td>-</td> 
        <td>-</td> 
        <td>-</td>
      </tr>
    </tbody>
  </table>
</div>