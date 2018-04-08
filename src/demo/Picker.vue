<template>
  <div class="demo-picker">
  	<button id="btn" @click="showPickerFn">open</button>
    <im-layer @click.native="clockLayer" v-if="showLayer"></im-layer>

  	<im-picker :showStatus="showPicker" @cancelBtn="cancel" @confirmBtn="confirm">
  		<im-picker-item :data="data" v-model="value" :currentIndex="value"></im-picker-item>
  	</im-picker>
  </div>
</template>

<script>

let data = [{
	n: '肉类1',
	v: 100001
},{
	n: '肉类2',
	v: 100002
},{
	n: '肉类3',
	v: 100003
},{
	n: '肉类4',
	v: 100004
}]

export default {
  name: 'picker',
  data () {
    return {
      data,
      value: 0,
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
    confirm () {
    	console.log(this.value);
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





















































// import data from './gov_province_city_area_id.js'

// let data = [{
// 	n: '水果',
// 	v: 100000,
// 	c: [{
// 		n: '香蕉',
// 		v: 100100,
// 		c: [{
// 			n: '巴西香蕉',
// 			v: 100101
// 		},{
// 			n: '美国香蕉',
// 			v: 100102
// 		},{
// 			n: '中国香蕉',
// 			v: 100103
// 		},{
// 			n: '法国香蕉',
// 			v: 100104
// 		}]
// 	},{
// 		n: '苹果',
// 		v: 100100,
// 		c: [{
// 			n: '巴西苹果',
// 			v: 100101
// 		},{
// 			n: '美国苹果',
// 			v: 100102
// 		},{
// 			n: '中国苹果',
// 			v: 100103
// 		},{
// 			n: '法国苹果',
// 			v: 100104
// 		}]
// 	}]
// },{
// 	n: '蔬菜',
// 	v: 100000,
// 	c: [{
// 		n: '白菜',
// 		v: 100100,
// 		c: [{
// 			n: '广东白菜',
// 			v: 100101
// 		},{
// 			n: '西安白菜',
// 			v: 100102
// 		},{
// 			n: '上海白菜',
// 			v: 100103
// 		},{
// 			n: '四川白菜',
// 			v: 100104
// 		}]
// 	},{
// 		n: '萝卜',
// 		v: 100100,
// 		c: [{
// 			n: '广东萝卜',
// 			v: 100101
// 		},{
// 			n: '西安萝卜',
// 			v: 100102
// 		},{
// 			n: '上海萝卜',
// 			v: 100103
// 		},{
// 			n: '四川萝卜',
// 			v: 100104
// 		}]
// 	}]
// },{
// 	n: '肉类',
// 	v: 100000,
// 	c: [{
// 		n: '猪肉',
// 		v: 100100,
// 		c: [{
// 			n: '巴西猪肉',
// 			v: 100101
// 		},{
// 			n: '美国猪肉',
// 			v: 100102
// 		},{
// 			n: '中国猪肉',
// 			v: 100103
// 		},{
// 			n: '法国猪肉',
// 			v: 100104
// 		}]
// 	}]
// }]

