<template>
  <div class="demo-home">
    <router-link v-for="(v, k) in list" :to="v" :key="k">{{v}}</router-link>
  </div>
</template>

<script>

const list = [
'Tab',
'Step',
'TimeLine',
'Marquee',
'CountUp',
'Rater',
'Switch',
'CheckBox',
'Radio',
'Swiper',
'IndexList',
'Picker',
'Progress',
'DatePicker',
'SwiperBox',
'Dialog',
'SwiperOut'
]

export default {
  name: 'home',
  data () {
    return {
      list
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
a {
  display: block;
  font-size: .5rem;
  margin: 20px 0;
  padding: 20px 0;
  text-decoration: none;
  text-align: center;
  border: 2px solid #989898;
  border-radius: 20px;
}

a{
  color: rgb(0, 0, 0);
  outline: none;
  text-decoration: none;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}
a:hover, a:focus{
  color: #fff;
  text-decoration: none;
  background-color: #a5c5ff;
}
</style>
