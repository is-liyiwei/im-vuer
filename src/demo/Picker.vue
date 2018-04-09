<template>
  <div class="demo-picker">
  	<button id="btn" @click="showPickerFn">open</button>
    <im-layer @click.native="clockLayer" v-if="showLayer"></im-layer>

  	<im-picker :data="data" :showStatus="showPicker" @cancelBtn="cancel" @confirmBtn="confirm"></im-picker>

  </div>
</template>

<script>
import data from './gov_province_city_area_id.js'

export default {
  name: 'picker',
  data () {
    return {
      data,
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
</style>


