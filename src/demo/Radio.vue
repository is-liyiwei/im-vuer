<template>
  <div class="demo-radio">

    <im-radio v-model="radio1">
      <im-radio-item val="我是1"></im-radio-item>
      <im-radio-item val="我是2"></im-radio-item>
      <im-radio-item val="我是3"></im-radio-item>
    </im-radio>
      <p class="result">已选：{{radio1}}</p>

    <im-radio v-model="radio2">
      <im-radio-item v-for="(v, k) in 3" :key="k" :val="v" bgColor="#f00" textColor="#f00"></im-radio-item>
    </im-radio>
    <p class="result">已选：{{radio2}}</p>

    <im-radio v-model="radio3">
      <im-radio-item val="启用1"></im-radio-item>
      <im-radio-item val="启用2"></im-radio-item>
      <im-radio-item val="禁用1" :disabled="true" bgColor="#333" textColor="#333"></im-radio-item>
    </im-radio>
    <p class="result">已选：{{radio3}}</p>

    <im-radio v-model="radio4">
      <im-radio-item val="big1" size="60px"></im-radio-item>
      <im-radio-item val="big2" size="60px"></im-radio-item>
      <im-radio-item val="big3" size="60px"></im-radio-item>
    </im-radio>
    <p class="result">已选：{{radio4}}</p>

  </div>
</template>

<script>
export default {
  name: 'radio',
  data () {
    return {
      radio1: '我是1',
      radio2: 2,
      radio3: '',
      radio4: 'big1'
    }
  },
  watch: {
    radio1 (newVal, oldVal) {
      console.log(newVal, oldVal)
    },
    radio2 (newVal, oldVal) {
      console.log(newVal, oldVal)
    },
    radio3 (newVal, oldVal) {
      console.log(newVal, oldVal)
    },
    radio4 (newVal, oldVal) {
      console.log(newVal, oldVal)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.demo-radio .result {
  font-size: 28px;
  padding: 20px;
  margin: 0;
}
</style>
