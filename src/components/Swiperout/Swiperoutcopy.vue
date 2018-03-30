<template>
  <div class="im-swiper-out"
  @touchmove="move"
  @mousemove="move">
	  <div class="im-swiper-out-right box">
	  	<slot name="right-menu"></slot>
	  </div>

	  <div class="im-swiper-out-left box">
	  	<slot name="left-menu"></slot>
	  </div>

	  <div class="im-swiper-out-content box" :style="boxStyle">
	  	<slot name="content"></slot>
	  </div>
  </div>
</template>

<script>
export default {
  name: 'swiper-out',
  data () {
    return {
      tslX: 0
    }
  },
  computed: {
  	boxStyle () {
  		return {
  			transform: `translate3d(${this.tslX}px, 0, 0)`
  		}
  	}
  },
  methods: {
  	move (e) {
  		console.log(e)
  		this.tslX++;
  	}
  },
  created: function () {
    console.log(this)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../../less/base.less';

.@{prefixClass} {
  &-swiper-out {
  	display: flex;
  	position: relative;
  	height: .8rem;
  	font-size: .2rem;
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    .box {
    	display: flex;
    	button {
    		display: inline-block;
    		border: 0;
    		background-color: red;
    		color: #fff;
    		width: 1rem;
    		font-size: .3rem;
    	}
    }
    &-right {
    	display: flex;
    	margin: 0;
    	position: absolute;
    	height: 100%;
    	width: 100%;
    	justify-content: flex-end;
    	padding: .02rem;
    }
    &-left {
    	display: flex;
    	margin: 0;
    	position: absolute;
    	height: 100%;
    	width: 100%;
    	padding: .02rem;
    }
    &-content {
    	display: flex;
    	position: relative;
    	height: 100%;
    	width: 100%;
    	font-size: .4rem;
    	align-items: center;
    	background-color: #fff;
    	transition: transform .3s;
    }
  }
}
</style>
