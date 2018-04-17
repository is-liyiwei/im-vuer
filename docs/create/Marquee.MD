
> 使用
```js
import { Marquee } form 'im-vuer'
Vue.component(${Marquee.name}, Marquee)
```

> 示例代码
```js
<template>
  <div class="demo-marquee">

    <br>
    <im-marquee duration="300" interval="2000">
      <div 
      style="font-size: .37rem;height: .8rem;line-height: .8rem;background-color: #00bfff;color: #FFF;" 
      v-for="i in 5" :key="i" 
      @click="onClick(i)">JavaScript is the best language{{i}}</div>
    </im-marquee>

    <br>
    <im-marquee scrollStatus="down">
      <div 
      style="font-size: .37rem;height: .8rem;line-height: .8rem;background-color: #00bfff;color: #FFF;" 
      v-for="i in 5" :key="i" 
      @click="onClick(i)">JavaScript is the best language{{i}}</div>
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
  