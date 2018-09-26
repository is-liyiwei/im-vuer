<template>
  <div class="demo-swiper-out">

    <im-swiper-out v-for="v in [1,2,3]" :key="v">
        <template slot="right-menu">
          <button @click="clickHandle" style="background-color: gray;">{{'Fav'}}</button>
          <button @click="clickHandle" style="background-color: red;">{{'Delete'}}</button>
          <button @click="clickHandle">{{'Ignore'}}</button>
        </template>

        <template slot="left-menu">
          <button @click="clickHandle" style="background-color: gray;">{{'Fav'}}</button>
          <button @click="clickHandle" style="background-color: red;">{{'Delete'}}</button>
        </template>

        <div slot="content">滑我{{v}} 两边都有两边都有两边都有</div>

    </im-swiper-out>

    <im-swiper-out v-for="v in [4,5,6]" :key="v">
        <template slot="right-menu">
          <button @click="clickHandle" style="background-color: gray;">{{'Fav'}}</button>
          <button @click="clickHandle" style="background-color: red;">{{'Delete'}}</button>
          <button @click="clickHandle">{{'Ignore'}}</button>
        </template>

        <div slot="content">滑我{{v}} 没有左边没有左边没有左边</div>
    </im-swiper-out>

    <im-swiper-out v-for="v in [7,8,9]" :key="v">
        <template slot="left-menu">
          <button @click="clickHandle" style="background-color: gray;">{{'Fav'}}</button>
          <button @click="clickHandle" style="background-color: red;">{{'Delete'}}</button>
        </template>

        <div slot="content">滑我{{v}} 没有右边没有右边没有右边</div>
    </im-swiper-out>

  </div>
</template>

<script>
export default {
  name: 'swiper-out',
  data () {
    return {

    }
  },
  methods: {
    clickHandle () {
      alert(new Date())
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
