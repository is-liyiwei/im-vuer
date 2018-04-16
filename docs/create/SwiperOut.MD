
> 使用

```js

import { SwiperOut } form 'im-vuer'

Vue.component(${SwiperOut.name}, SwiperOut)

```

> 示例代码

```js

<template>
  <div class="demo-swiper-out">

    <im-swiper-out v-for="v in [1,2,3]" style="padding: 20px 0;" :key="v">
    
        <template slot="right-menu">
          <button @click="clickHandle" style="background-color: gray;">{{'Fav'}}</button>
          <button @click="clickHandle" style="background-color: red;">{{'Delete'}}</button>
          <button @click="clickHandle">{{'Ignore'}}</button>
        </template>

        <template slot="left-menu">
          <button @click="clickHandle" style="background-color: gray;">{{'Fav'}}</button>
          <button @click="clickHandle" style="background-color: red;">{{'Delete'}}</button>
        </template>

        <div slot="content">滑我{{v}} 两边都有两边都有</div>
    </im-swiper-out>

    <im-swiper-out v-for="v in [4,5,6]" style="padding: 20px 0;" :key="v">

        <template slot="right-menu">
          <button @click="clickHandle" style="background-color: gray;">{{'Fav'}}</button>
          <button @click="clickHandle" style="background-color: red;">{{'Delete'}}</button>
          <button @click="clickHandle">{{'Ignore'}}</button>
        </template>

        <div slot="content">滑我{{v}} 没有左边没有左边</div>
    </im-swiper-out>

    <im-swiper-out v-for="v in [7,8,9]" style="padding: 20px 0;" :key="v">

        <template slot="left-menu">
          <button @click="clickHandle" style="background-color: gray;">{{'Fav'}}</button>
          <button @click="clickHandle" style="background-color: red;">{{'Delete'}}</button>
        </template>

        <div slot="content">滑我{{v}} 没有右边没有右边</div>
    </im-swiper-out>

  </div>
</template>

<script>
export default {
  name: 'swiper-out',
  data () {
    return {
      
    }
  },
  components: {

  },
  created: function () {
    
  },
  methods: {
    clickHandle () {
      alert(new Date())
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

