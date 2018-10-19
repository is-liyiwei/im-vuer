> 使用

```js
import { PreviewImage } form 'im-vuer'
Vue.component(PreviewImage.name, PreviewImage)
```

> 示例代码

```js
<template>
  <div class="demo-previewImage">
    <img v-for="(v, k) in testImgArr1" :src="v.src" :key="k">
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

```
> 参数说明
<div>
  <table>
    <thead>
      <tr>
        <th>参数</th> 
        <th>说明</th> 
        <th>类型</th> 
        <th>可选值/备注</th> 
        <th>默认值</th>
      </tr>
    </thead> 
    <tbody>
      <tr>
        <td>imgArr</td> 
        <td>图片列表</td> 
        <td>Array</td> 
        <td>-</td> 
        <td>[]</td>
      </tr><tr>
        <td>currentIndex</td> 
        <td>初始的图片index</td> 
        <td>Number</td> 
        <td>非负整数</td> 
        <td>0</td>
      </tr><tr>
        <td>currScale</td> 
        <td>缩放倍数</td> 
        <td>Number</td> 
        <td>最大不要超过3</td> 
        <td>2</td>
      </tr><tr>
        <td>targetSwipeBoundaryValue</td> 
        <td>决定是否swipe触发边界值</td> 
        <td>Number</td> 
        <td>-</td> 
        <td>130</td>
      </tr><tr>
        <td>animationTime</td> 
        <td>动画时间</td> 
        <td>Number</td> 
        <td>-</td> 
        <td>300</td>
      </tr>
    </tbody>
  </table>
</div>