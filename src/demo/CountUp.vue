<template>
  <div class="demo-countup">
    <p>thanks:https://github.com/inorganik/countUp.js</p>
    <im-countup :start="start" :startVal="startVal" :endVal="endVal" :duration="duration" ref="c"></im-countup>
    <button @click="startHandle()">start/pause</button>
    <button @click="endVal = 2000">set endVal</button>
    <button @click="reset()">reset</button>
  </div>
</template>

<script>

export default {
  name: 'countup',
  data () {
    return {
      start: false,
      startVal: 10,
      endVal: 200,
      duration: 3
    }
  },
  components: {

  },
  mounted: function () {

  },
  methods: {
    startHandle () {
      this.start = !this.start;
    },
    reset () {
      this.$refs.c._countup.reset();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
button {
  display: block;
  font-size: .4rem;
  margin: 20px;
  padding: 20px;
}
p {
  font-size: .3rem;
}
</style>
