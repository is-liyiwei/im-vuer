<template>
  <div class="demo-marquee">

    <br>
    <im-marquee duration="300" interval="2000">
      <div 
      style="font-size: .37rem;height: .8rem;line-height: .8rem;background-color: #00bfff;color: #FFF;" 
      v-for="i in 5" :key="i" 
      @click="onClick(i)">JavaScript is the best language{{i}}</div>
    </im-marquee>

    <br>
    <im-marquee scrollStatus="down">
      <div 
      style="font-size: .37rem;height: .8rem;line-height: .8rem;background-color: #00bfff;color: #FFF;" 
      v-for="i in 5" :key="i" 
      @click="onClick(i)">JavaScript is the best language{{i}}</div>
    </im-marquee>

  </div>
</template>

<script>
export default {
  name: 'marquee',
  data () {
    return {
      
    }
  },
  components: {

  },
  created: function () {
    
  },
  methods: {
    onClick (i) {
      console.log(i)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
