<template>
  <div class="demo-picker" style="height: calc(100vh - 100px);">

    <button id="btn" @click="togglePicker">open</button>

    <div @click="togglePicker" v-if="showLayer" class="layer"></div>

    <im-picker :showStatus="showPicker" @cancelBtn="togglePicker" @confirmBtn="confirm">
      <im-picker-item :data="hour"></im-picker-item>
      <im-picker-item :data="minutes"></im-picker-item>
      <im-picker-item :data="seconds"></im-picker-item>
    </im-picker>

    <div class="result">选择的是：{{result}}</div>
  </div>
</template>

<script>
let i = 1
let _hour = Array.apply(null, Array(12)).map(() => i++ + '时')
let j = 1
let _minutes = Array.apply(null, Array(60)).map(() => j++ + '分')
let k = 1
let _seconds = Array.apply(null, Array(60)).map(() => k++ + '秒')

export default {
  name: 'picker',
  data () {
    return {
      hour: _hour,
      minutes: _minutes,
      seconds: _seconds,
      result: [],
      showPicker: false,
      showLayer: false
    }
  },
  methods: {
    togglePicker () {
      this.showPicker = !this.showPicker
      this.showLayer = !this.showLayer
    },
    confirm (value) {
      this.result = value
      this.showPicker = !this.showPicker
      this.showLayer = !this.showLayer
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#btn {
   border: none;
   background-color: #00bfff;
   color: #FFF;
   padding: .2rem;
   margin: .2rem auto;
   width: 90%;
   display: block;
   font-size: .37rem;
}

.layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .5);
}

.result {
  font-size: .37rem;
  text-align: center;
}
</style>
