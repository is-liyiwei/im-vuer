<template>
  <div class="demo-picker">
    <button class="picker-btn" @click="showPickerFn">open</button>

    <div style="font-size: .3rem;text-align: center;">当前数据结构</div>
    <pre style="font-size: .3rem;height: 10rem;overflow: scroll;background-color: #000f5a;color: #FFF;">{{data}}</pre>

    <div style="font-size: .3rem;text-align: center;">城市数据来源: https://github.com/ydcss/ydui-district</div>
    <div style="font-size: .3rem;text-align: center;margin: 20px 0;">选择的是：{{test}}</div>

    <im-city-picker ref="picker" :data="data" v-model="showPicker" @cancelBtn="cancel" @confirmBtn="confirm"></im-city-picker>
  </div>
</template>

<script>
import data1 from './format_gov_province_city_area_id.js'

export default {
  name: 'picker',
  data () {
    return {
      data: [],
      showPicker: false,
      test: ''
    }
  },
  created () {
    // 异步数据测试
    setTimeout(() => {
      this.data = data1
    }, 1000)
  },
  methods: {
    showPickerFn () {
      this.showPicker = !this.showPicker
    },
    cancel () {
      this.showPicker = !this.showPicker
    },
    confirm (value) {
      this.test = `${value[0].n}-${value[1].n}-${value[2].n}`
      this.showPicker = !this.showPicker
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.picker-btn {
  border: none;
  background-color: #00bfff;
  color: #fff;
  padding: 0.2rem;
  margin: 0.5rem auto;
  width: 90%;
  display: block;
  font-size: 0.37rem;
}
</style>
