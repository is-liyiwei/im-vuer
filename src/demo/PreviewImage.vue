<template>
  <div class="demo-step">
    <im-preview-image :list="list"></im-preview-image>
  </div>
</template>

<script>
export default {
  name: 'step',
  data () {
    return {
      list: [{
        url: 'http://img15.3lian.com/2016/h1/75/d/210.jpg'
      }, {
        url: 'http://img15.3lian.com/2016/h1/75/d/211.jpg'
      }, {
        url: 'http://img15.3lian.com/2016/h1/75/d/212.jpg'
      }, {
        url: 'http://img15.3lian.com/2016/h1/75/d/213.jpg'
      }, {
        url: 'http://img15.3lian.com/2016/h1/75/d/214.jpg'
      }]
    }
  },
  components: {

  },
  created () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
