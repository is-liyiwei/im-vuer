<template>
  <div class="demo-countup">
    <div class="box">
      <p>thanks：https://github.com/inorganik/countUp.js</p>
      <im-countup :endVal="88.88" :decimals="2" txtColor="#f00"></im-countup>
      <im-countup :endVal="6666" :duration="50"></im-countup>
      <im-countup :start="start" :startVal="startVal" :endVal="endVal" :duration="duration" ref="c" fz="1rem"></im-countup>
    </div>
    <button class="btn" @click="startHandle()">start / pause</button>
    <button class="btn" @click="endVal = 2000">set endVal</button>
    <button class="btn" @click="reset()">reset</button>
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
  methods: {
    startHandle () {
      this.start = !this.start
    },
    reset () {
      this.$refs.c._countup.reset()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

.box {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  font-size: 32px;
  height: 5rem;
  p {
    color: red;
    font-size: 26px;
  }
}

.btn {
  border: none;
  background-color: #00bfff;
  color: #FFF;
  padding: .2rem;
  margin: .2rem auto;
  width: 90%;
  display: block;
  font-size: 32px;
}
</style>
