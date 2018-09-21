> 使用

```js
import { SwiperOut } form 'im-vuer'
Vue.component(SwiperOut.name, SwiperOut)
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

        <div slot="content">滑我{{v}} 两边都有两边都有两边都有</div>
    </im-swiper-out>

    <im-swiper-out v-for="v in [4,5,6]" style="padding: 20px 0;" :key="v">
        <template slot="right-menu">
          <button @click="clickHandle" style="background-color: gray;">{{'Fav'}}</button>
          <button @click="clickHandle" style="background-color: red;">{{'Delete'}}</button>
          <button @click="clickHandle">{{'Ignore'}}</button>
        </template>

        <div slot="content">滑我{{v}} 没有左边没有左边没有左边</div>
    </im-swiper-out>

    <im-swiper-out v-for="v in [7,8,9]" style="padding: 20px 0;" :key="v">
        <template slot="left-menu">
          <button @click="clickHandle" style="background-color: gray;">{{'Fav'}}</button>
          <button @click="clickHandle" style="background-color: red;">{{'Delete'}}</button>
        </template>

        <div slot="content">滑我{{v}} 没有右边没有右边没有右边</div>
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
        <th>可选值/备注</th> 
        <th>默认值</th>
      </tr>
    </thead> 
    <tbody>
      <tr>
        <td>data</td> 
        <td>数据列表</td> 
        <td>Array</td> 
        <td>-</td> 
        <td>-</td>
      </tr>
      <tr>
        <td>showStatus</td> 
        <td>控制组件显示</td> 
        <td>Boolean</td> 
        <td>true, false</td> 
        <td>false</td>
      </tr>
      <tr>
        <td>@cancelBtn</td> 
        <td>取消按钮事件</td> 
        <td>Function</td> 
        <td>-</td> 
        <td>-</td>
      </tr>
      <tr>
        <td>@confirmBtn</td> 
        <td>确定按钮事件</td> 
        <td>Function</td> 
        <td>-</td> 
        <td>-</td>
      </tr>
      
    </tbody>
  </table>
</div>