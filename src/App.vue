<template>
  <div id="app">
<!-- 		<transition name="fade" v-on:before-enter="enter" v-on:after-enter="afterEnter">
			<router-view ref="rt"></router-view>
		</transition> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
  	// enter () {
  	// 	this.$refs.rt.$el.style.display = 'none';
  	// },
  	// afterEnter () {
  	// 	this.$refs.rt.$el.style.display = 'block';
  	// }
  }
}
</script>

<style>
/*.fade-enter-active, .fade-leave-active {
	transition: all .3s ease-in;
}
.fade-enter, .fade-leave-active {
	opacity:0;
}*/
</style>
