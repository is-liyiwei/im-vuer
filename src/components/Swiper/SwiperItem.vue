<template>
  <div class="im-swipe-box-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'im-swiper-item',
  data () {
    return {
      
    }
  },
  mounted () {
    this.$parent.init();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
