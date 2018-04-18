<template>
  <div class="demo-switch">

    <div class="switch-box">
      <span class="result">当前状态：{{data1}}</span>
      <im-switch v-model="data1" :onColor="'#28e1bd'" :onBgColor="'#1abc9c'"></im-switch>
    </div>

    <div class="switch-box small">
      <span class="result">当前状态：{{data2}}</span>
      <im-switch v-model="data2"></im-switch>
    </div>

    <div class="switch-box">
      <span class="result">当前状态：{{data3}}</span>
      <im-switch v-model="data3" :onColor="'#ed7669'" :onBgColor="'#e74c3c'"></im-switch>
    </div>

    <div class="switch-box small">
      <span class="result">当前状态：{{data4}}</span>
      <im-switch v-model="data4" :onColor="'#eb9950'" :onBgColor="'#e67e22'"></im-switch>
    </div>

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
      data4: false
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
.demo-switch .switch-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .2rem;
}

.demo-switch .switch-box .result {
  font-size: .37rem;
}

.small {
  height: 1rem;
}
</style>
