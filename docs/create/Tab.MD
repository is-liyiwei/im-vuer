
> 使用
```js
import { Tab } form 'im-vuer'
Vue.component(${Tab.name}, Tab)
```

> 示例代码
```js
<template>
  <div class="demo-tab">
    <im-tab textColorActive="green" activeCurrIndex="2" :list='list'></im-tab>
    <br>
    <im-tab :list='list'></im-tab>
    <br>
    <im-tab :list='list' labelColor="pink" labelTextColor="blue" lineColor="#f00" lineThickness="6px"></im-tab>
  </div>
</template>

<script>

const list = [{
  name: '分类1',
  label: 2
},{
  name: '分类2'
},{
  name: '分类3',
  label: 4
},{
  name: '分类4',
  label: 5
}]


export default {
  name: 'tab',
  data () {
    return {
      list
    }
  },
  props: {

  },
  methods: {

  },
  computed: {

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

