<template>
  <div class="demo-home">
    <router-link v-for="(v, k) in list" :to="v.name.toLowerCase()" :key="k">
<!--       <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 100 100">
        <path d="M50.214 10.067c6.4.204 10.753 25.648 10.753 25.648s26.256-1.803 27.13 2.857c.874 4.66-20.04 16.642-20.04 16.642s9.537 24.303 5.523 26.817c-4.015 2.515-23.545-14.023-23.545-14.023S29.333 84.493 25.633 81.785c-3.7-2.71 6.657-26.472 6.657-26.472S11.234 43.94 12.383 39.108c1.15-4.832 26.55-3.393 26.55-3.393s4.88-25.853 11.28-25.648z" fill="#00bfff" fill-rule="evenodd"/>
      </svg> -->
      <i class="iconfont iiicccooonnn" :class="[v.icon]"></i>
      <span>{{v.name}}</span>
    </router-link>
  </div>
</template>

<script>

const list = [{
  name: 'CheckBox',
  icon: 'icon-CheckBox'
}, {
  name: 'CityPicker',
  icon: 'icon-CityPicker'
}, {
  name: 'CountUp',
  icon: 'icon-CountUp'
}, {
  name: 'DatePicker',
  icon: 'icon-DatePicker'
}, {
  name: 'Dialog',
  icon: 'icon-Dialog'
}, {
  name: 'IndexList',
  icon: 'icon-IndexList'
}, {
  name: 'Marquee',
  icon: 'icon-Marquee'
}, {
  name: 'Picker',
  icon: 'icon-Picker'
}, {
  name: 'Progress',
  icon: 'icon-Progress'
}, {
  name: 'Radio',
  icon: 'icon-Radio'
}, {
  name: 'Rater',
  icon: 'icon-Rater'
}, {
  name: 'Step',
  icon: 'icon-Step'
}, {
  name: 'Swiper',
  icon: 'icon-Swiper'
}, {
  name: 'SwiperBox',
  icon: 'icon-SwiperBox'
}, {
  name: 'SwiperOut',
  icon: 'icon-SwiperOut'
}, {
  name: 'Switch',
  icon: 'icon-Switch'
}, {
  name: 'Tab',
  icon: 'icon-SwiperBox'
}, {
  name: 'TimeLine',
  icon: 'icon-TimeLine'
}]

export default {
  name: 'home',
  data () {
    return {
      list
    }
  },
  created () {
    this.$confirm({
      title: 'Welcome',
      content: '欢迎使用im-vuer',
      styleFor: 'ios',
      opts: [{
        txt: '确定',
        color: '#00bfff',
        cb: () => {

        }
      }]
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
/*@import url('//at.alicdn.com/t/font_811392_fvxl052x8mp.css');*/
@import url('../font_alibaba_demo/iconfont.css');

a {
  display: flex;
  align-items: center;
  font-size: 36px;
  padding: 20px;
  text-decoration: none;
  border-bottom: 2px solid #e1e1e1;
  color: rgb(0, 0, 0);
  transition: 0.2s;
  height: 80px;
  .iiicccooonnn {
    font-size: 48px;
    color: #00bFFF;
  }
  span {
    padding-left: .2rem;
  }
  &:before {
    content: '';
    width: .2rem;
    height: .2rem;
    position: absolute;
    border-color: #333;
    border-style: solid;
    border-width: 1px 1px 0 0;
    transform: rotate3d(0,0,1,45deg) translate3d(0,0,0);
    right: .6rem;
  }
}

a:hover, a:focus {
  color: #fff;
  text-decoration: none;
  background-color: #a5c5ff;
}
</style>
