<template>
  <div class="im-radio-item">
		<input
		 :id="_uid" 
		 @change="changeHandler" 
		 :disabled="disabled" 
		 :checked="checked" 
		 class="im-radio-item-input" 
		 type="radio" />
    <label :for="_uid" class="im-radio-item-label" :style="labelStyle">
      <span class="im-radio-item-label-cur" :style="curStyle"></span>
    </label>
    <span class="im-radio-item-text" :style="textStyle">{{val}}</span>
  </div>
</template>

<script>

export default {
  name: 'radio-item',
  data () {
    return {
      checked: false
    }
  },
  props: {
  	val: {
  		type: [Number, String]
  	},
  	disabled: {
  		type: Boolean,
  		default: false
  	},
  	bgColor: {
  		type: String,
  		default: '#00BFFF'
  	},
  	size: {
  		type: String,
  		default: '.37rem'
  	},
  	textFz: {
  		type: String,
  		default: '.27rem'
  	},
  	textColor: {
  		type: String,
  		default: '#666'
  	}
  },
  methods: {
  	changeHandler () {
  		if (this.disabled) return
  		this.$parent.updadeView(this.val);
  	}
  },
  computed: {
  	labelStyle () {
  		return {
  			border: `1px solid ${this.bgColor}`,
  			width: this.size,
  			height: this.size
  		}
  	},
  	curStyle () {
  		return {
  			backgroundColor: this.bgColor
  		}
  	},
  	textStyle () {
  		return {
  			'font-size': this.textFz,
  			'color': this.textColor
  		}
  	}
  },
  mounted: function () {
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
