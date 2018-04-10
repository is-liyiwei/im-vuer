<template>
  <div class="demo-picker">

    <button id="btn" @click="showPickerFn">open</button>

    <div @click="clockLayer" v-if="showLayer" class="layer"></div>

    <im-picker v-model="result" :showStatus="showPicker" @cancelBtn="cancel" @confirmBtn="confirm">
      <im-picker-item :data="hour"></im-picker-item>
      <im-picker-item :data="minutes"></im-picker-item>
      <im-picker-item :data="seconds"></im-picker-item>
    </im-picker>

  </div>
</template>

<script>
let i = 1;
let _hour = Array.apply(null, Array(12)).map(() => i++ + '时');
let j = 1;
let _minutes = Array.apply(null, Array(60)).map(() => j++ + '分');
let k = 1;
let _seconds = Array.apply(null, Array(60)).map(() => k++ + '秒');

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
  created: function () {
    
  },
  watch: {
    value (newVal, oldVal) {
      
    }
  },
  methods: {
    showPickerFn () {
      this.showPicker = !this.showPicker;
      this.showLayer = !this.showLayer;
    },
    clockLayer () {
      this.showPicker = !this.showPicker;
      this.showLayer = !this.showLayer;
    },
    cancel () {
      this.showPicker = !this.showPicker;
      this.showLayer = !this.showLayer;
    },
    confirm (value) {
      console.log(value);
      this.showPicker = !this.showPicker;
      this.showLayer = !this.showLayer;
    }
  },
  components: {
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
   font-size: .2rem;
}

.layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .5);
}
</style>