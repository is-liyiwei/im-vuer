<template>
  <div class="demo-marquee">

    <br>
    <im-marquee>
      <div 
      class="single" 
      v-for="i in 5" :key="i" 
      @click="onClick(i)">single item up for {{i}}</div>
    </im-marquee>

    <br>
    <im-marquee scrollStatus="down" duration="300" interval="1500">
      <div 
      class="double" 
      v-for="i in 5" :key="i" 
      @click="onClick(i)">
        <p>double item down for {{i}}</p>
        <p>double item down for {{i}}</p>
        <p>double item down for {{i}}</p>
      </div>
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
  methods: {
    onClick (i) {
      console.log(i)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.single {
  font-size: .37rem;
  height: .8rem;
  line-height: .8rem;
  background-color: #00bfff;
  color: #FFF;
}
.double {
  font-size: .37rem;
  height: 2.8rem;
  background-color: #00bfff;
  color: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
