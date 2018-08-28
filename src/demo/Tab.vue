<template>
  <div class="demo-tab">
    <im-tab textColorActive="green" activeCurrIndex="2" :list='list'></im-tab>
    <br><br>
    <im-tab @on-tab="tabHandle" :list='list'></im-tab>
    <br><br>
    <im-tab :list='list' labelColor="pink" labelTextColor="blue" lineColor="#f00" lineThickness="3px"></im-tab>
  </div>
</template>

<script>

const list = [{
  name: '分类1',
  label: 2
}, {
  name: '分类2'
}, {
  name: '分类3',
  label: 4
}, {
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
  methods: {
    tabHandle (v) {
      console.log(v)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
