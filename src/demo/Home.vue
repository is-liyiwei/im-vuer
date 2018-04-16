<template>
  <div class="demo-home">
    <router-link v-for="(v, k) in list" :to="v.toLowerCase()" :key="k">
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 100 100">
        <path d="M50.214 10.067c6.4.204 10.753 25.648 10.753 25.648s26.256-1.803 27.13 2.857c.874 4.66-20.04 16.642-20.04 16.642s9.537 24.303 5.523 26.817c-4.015 2.515-23.545-14.023-23.545-14.023S29.333 84.493 25.633 81.785c-3.7-2.71 6.657-26.472 6.657-26.472S11.234 43.94 12.383 39.108c1.15-4.832 26.55-3.393 26.55-3.393s4.88-25.853 11.28-25.648z" fill="#00bfff" fill-rule="evenodd"/>
      </svg>
      <span>{{v}}</span>
    </router-link>
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
'CityPicker',
'Progress',
'DatePicker',
// 'PullRefresh',
'Picker',
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
  display: flex;
  align-items: center;
  font-size: .37rem;
  padding: .2rem;
  text-decoration: none;
  border-bottom: 2px solid #e1e1e1;
  span {
    padding-left: .2rem;
  }
  &:before {
    content: '';
    width: .1rem;
    height: .1rem;
    position: absolute;
    border-color: #333;
    border-style: solid;
    border-width: 1px 1px 0 0;
    transform: rotate3d(0,0,1,45deg) translate3d(0,0,0);
    right: .3rem;
  }
}

a {
  color: rgb(0, 0, 0);
  outline: none;
  text-decoration: none;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}

a:hover, a:focus {
  color: #fff;
  text-decoration: none;
  background-color: #a5c5ff;
}
</style>
