<template>
  <div class="demo-swiper-box">
  	<im-tab lineThickness="5px" :activeCurrIndex="activeCurrIndex" :list='list'></im-tab>
  	<im-swiper @on-swiper="onSwiper" :autoPlay="0" :loop="false" :idx="activeCurrIndex" dotColor="transparent" dotActiveColor="transparent">
     <im-swiper-item v-for="(v, k) in list.length" :key="k">
      <div class="swiper-box">这是tab组件和swiper组件一起使用的{{v}}</div>
     </im-swiper-item>
    </im-swiper>
  </div>
</template>

<script>
export default {
  name: 'swiper-box',
  data () {
    return {
    	list: [{
			  name: '分类1'
			},{
			  name: '分类2'
			},{
			  name: '分类3'
			},{
			  name: '分类4'
			}],
			activeCurrIndex: 2
    }
  },
  components: {

  },
  created: function () {

  },
  methods: {
  	onSwiper (idx) {
  		this.activeCurrIndex += idx
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.swiper-box {
	height: 90vh;
	width: 100%;
	font-size: .37rem;
	text-align: center;
	line-height: 500px;
	background-color: #6f6dff;
	color: #FFF;
	font-weight: bold;
}
</style>
