<template>
  <div class="demo-previewImage">
    <img v-for="v in testImgArr1" :src="v.src" alt="">
    <button id="btn" @click="openPreviewImage(0)">openPreviewImage</button>
    <br>存在问题
    <br>微信公众号无法正常使用的bug
    <br>组件动画问题
    <br>切换图片时拖动幅度较大
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
        imgArr: this.testImgArr1,
        currentIndex: i,
        currScale: 2,
        targetSwipeBoundaryValue: 130,
        animationTime: 300
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
img {
  width: 25%;
}

#btn {
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
