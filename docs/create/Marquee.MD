
> 使用
```js
import { Marquee } form 'im-vuer'
Vue.component(${Marquee.name}, Marquee)
```

> 示例代码
```js
<template>
  <div class="demo-marquee">
    <p style="font-size: .37rem;text-align: center;margin-bottom: 2rem;">还有n多bug</p>
    <im-marquee speed="1">
      <div v-for="i in 3" :key="i" @click="onClick(i)">JavaScript is the best language{{i}}</div>
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
  components: {

  },
  created: function () {
    
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

