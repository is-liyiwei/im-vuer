<template>
  <div class="demo-previewImage">
    <button @click="openPreviewImage(0)">open</button>
  </div>
</template>

<script>
export default {
  name: 'previewImage',
  data () {
    return {
      testImgArr1: [{
        src: 'http://img.zcool.cn/community/0117e2571b8b246ac72538120dd8a4.jpg@1280w_1l_2o_100sh.jpg'
      }, {
        src: 'http://pic9.nipic.com/20100831/2167235_164504023490_2.jpg'
      }, {
        src: 'http://pic.58pic.com/58pic/15/70/34/93P58PIC82K_1024.jpg'
      }, {
        src: 'http://img.zcool.cn/community/0117e2571b8b246ac72538120dd8a4.jpg@1280w_1l_2o_100sh.jpg'
      }],
      testImgArr2: [{
        src: 'http://pic.58pic.com/58pic/15/70/34/93P58PIC82K_1024.jpg'
      }, {
        src: 'http://pic9.nipic.com/20100831/2167235_164504023490_2.jpg'
      }, {
        src: 'http://img.zcool.cn/community/0117e2571b8b246ac72538120dd8a4.jpg@1280w_1l_2o_100sh.jpg'
      }, {
        src: 'http://pic.58pic.com/58pic/15/70/34/93P58PIC82K_1024.jpg'
      }]
    }
  },
  components: {

  },
  created () {

  },
  methods: {
    openPreviewImage (i) {
      this.$openPreviewImage({
        imgArr: this.testImgArr2,
        currentIndex: i,
        currScale: 2
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
