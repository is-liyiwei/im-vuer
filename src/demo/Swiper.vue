<template>
  <div class="demo-swiper" style="height: 5rem;">

    <im-swiper @tap-swiper="tapSwiper" @on-swiper="onSwiper" :speed="350" :loop="false" :autoPlay="0" :idx="2">
     <im-swiper-item v-for="(v, k) in swipeList" :key="k">
      <img :src="v.img" alt="">
     </im-swiper-item>
    </im-swiper>

    <br>

    <im-swiper @tap-swiper="tapSwiper" @on-swiper="onSwiper" :dotColor="'#FFF'" :dotActiveColor="'#00bfff'">
     <im-swiper-item v-for="(v, k) in swipeList" :key="k">
      <img :src="v.img" alt="">
     </im-swiper-item>
    </im-swiper>

  </div>
</template>

<script>
export default {
  name: 'swiper',
  data () {
    return {
      swipeList: [{
        id: 1,
        img: 'http://img15.3lian.com/2016/h1/75/d/210.jpg',
        text: '这是个图片1'
      },{
        id: 2,
        img: 'http://img15.3lian.com/2016/h1/75/d/211.jpg',
        text: '这是个图片2'
      },{
        id: 3,
        img: 'http://img15.3lian.com/2016/h1/75/d/212.jpg',
        text: '这是个图片3'
      },{
        id: 4,
        img: 'http://img15.3lian.com/2016/h1/75/d/213.jpg',
        text: '这是个图片3'
      },{
        id: 5,
        img: 'http://img15.3lian.com/2016/h1/75/d/214.jpg',
        text: '这是个图片3'
      }]
    }
  },
  methods: {
    tapSwiper (idx) {
      console.log(idx)
    },
    onSwiper (idx) {
      console.log(idx)
    }
  },
  components: {

  },
  created: function () {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
