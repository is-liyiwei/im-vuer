
> 使用

```js

import { SwiperBox } form 'im-vuer'

Vue.component(${SwiperBox.name}, SwiperBox)

```

> 示例代码

```js

<template>
  <div class="demo-swiper-box">
  	<im-tab @on-tab="tabClick" lineThickness="5px" :activeCurrIndex="activeCurrIndex" :list='list'></im-tab>
  	<im-swiper @on-swiper="onSwiper" :isTabView="true" :idx="activeCurrIndex" :autoPlay="0" :loop="false" dotColor="transparent" dotActiveColor="transparent">
     <im-swiper-item v-for="(v, k) in list.length" :key="k">
      <div class="swiper-box">这是tab组件和swiper组件一起使用的{{v}}</div>
     </im-swiper-item>
    </im-swiper>
  </div>
</template>

<script>
export default {
  name: 'swiper-box',
  data () {
    return {
    	list: [{
			  name: '分类1'
			},{
			  name: '分类2'
			},{
			  name: '分类3'
			},{
			  name: '分类4'
			}],
			activeCurrIndex: 1
    }
  },
  components: {

  },
  created: function () {

  },
  methods: {
  	onSwiper (idx) {
  		this.activeCurrIndex += idx;
  	},
    tabClick (idx) {
      this.activeCurrIndex = idx;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.swiper-box {
	height: 90vh;
	width: 100%;
	font-size: .37rem;
	background-color: #6f6dff;
	color: #FFF;
	font-weight: bold;
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
      <th>可选值</th> 
      <th>默认值</th>
     </tr>
    </thead> 
    <tbody>
     <tr>
      <td>message</td> 
      <td>文本内容</td> 
      <td>String</td> 
      <td></td> 
      <td></td>
     </tr> 
     <tr>
      <td>position</td> 
      <td>Toast 的位置</td> 
      <td>String</td> 
      <td>'top'<br />'bottom'<br />'middle'</td> 
      <td>'middle'</td>
     </tr> 
     <tr>
      <td>duration</td> 
      <td>持续时间（毫秒），若为 -1 则不会自动关闭</td> 
      <td>Number</td> 
      <td></td> 
      <td>3000</td>
     </tr> 
     <tr>
      <td>className</td> 
      <td>Toast 的类名。可以为其添加样式</td> 
      <td>String</td> 
      <td></td> 
      <td></td>
     </tr> 
     <tr>
      <td>iconClass</td> 
      <td>icon 图标的类名</td> 
      <td>String</td> 
      <td></td> 
      <td></td>
     </tr>
    </tbody>
   </table>
  </div>

