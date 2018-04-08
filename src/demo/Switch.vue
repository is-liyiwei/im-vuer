<template>
  <div class="demo-switch">
    <im-switch v-model="data1" :onColor="'#28e1bd'" :onBgColor="'#1abc9c'"></im-switch>
    <im-switch v-model="data2" :onColor="'#00BFFF'" :onBgColor="'#00a5dc'"></im-switch>
    <im-switch v-model="data3" :onColor="'#ed7669'" :onBgColor="'#e74c3c'"></im-switch>
    <im-switch v-model="data4" :onColor="'#eb9950'" :onBgColor="'#e67e22'"></im-switch>
  </div>
</template>

<script>
export default {
  name: 'm-switch',
  data () {
    return {
      data1: false,
      data2: true,
      data3: false,
      data4: true
    }
  },
  watch: {
  	data1 () {
  		console.log('data1 change', this.data1)
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
