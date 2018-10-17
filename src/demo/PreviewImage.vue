<template>
  <div class="demo-previewImage">
    <button @click="openPreviewImage(0)">open</button>
    <button @click="openPreviewImage(1)">open</button>
    <button @click="openPreviewImage(2)">open</button>
  </div>
</template>

<script>
export default {
  name: 'previewImage',
  data () {
    return {
      // 这里使用这个配合html切换横图或者长竖图
      testImgArr: [
        'http://img.zcool.cn/community/0117e2571b8b246ac72538120dd8a4.jpg@1280w_1l_2o_100sh.jpg',
        'http://pic9.nipic.com/20100831/2167235_164504023490_2.jpg',
        'http://pic.58pic.com/58pic/15/70/34/93P58PIC82K_1024.jpg'
      ]
    }
  },
  components: {

  },
  created () {

  },
  methods: {
    openPreviewImage (i) {
      this.$openPreviewImage({
        imgArr: this.testImgArr,
        currentIndex: [i]
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
