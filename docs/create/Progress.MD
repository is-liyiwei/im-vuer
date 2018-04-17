
> 使用
```js
import { Progress } form 'im-vuer'
Vue.component(${Progress.name}, Progress)
```

> 示例代码
```js
<template>
  <div class="demo-progress">
    <im-progress :progress-width="data1">
      <span class="im-progress-start progress-text" slot="startText">0%</span>
      <span class="im-progress-start progress-text" slot="endText">100%</span>
    </im-progress>
    <br>
    <im-progress :progress-width="data2" progress-color="#f00" progress-height="20">
      <span class="im-progress-start progress-text" slot="endText">100%</span>
    </im-progress>
    <br>
    <im-progress :progress-width="data3" color="#39ff39" progress-height="5"></im-progress>
    <br>
    <button id="btn-progress" @click="upFile">点击上传</button>
    <br>
    <im-progress v-show="data4 != 0 && data4 != 100" :progress-width="data4">
      <span class="im-progress-start progress-text" slot="endText">{{data4}}%</span>
    </im-progress>
    <br>
    <button id="btn-progress" @click="top">顶部进度条</button>
    <br>
    <im-progress :inTop="true" v-show="data5 != 0 && data5 != 100" progress-height="5" :progress-width="data5"></im-progress>
  </div>
</template>

<script>
  import raf from '../helper/requestAnimationFrame.js'

  raf();

  export default {
    name: 'm-progress',
    data() {
      return {
        data1: 20,
        data2: 20,
        data3: 20,
        data4: 0,
        data5: 0
      }
    },
    components: {

    },
    created: function() {

    },
    mounted() {
      let that = this;

      this.time1 = requestAnimationFrame(function fn1(timestamp) {
        that.data1++;
        if (that.data1 > 100) {
            cancelAnimationFrame(that.time1);
        } else {
          requestAnimationFrame(fn1);
        }
      });

      this.time2 = requestAnimationFrame(function fn2(timestamp) {
        that.data2++;
        if (that.data2 >= 80) {
            cancelAnimationFrame(that.time2);
        } else {
          requestAnimationFrame(fn2);
        }
      });

    },
    methods: {
      upFile () {
        let that = this;

        this.data4 = 0;
        this.time4 = requestAnimationFrame(function fn3(timestamp) {
          that.data4++;
          if (that.data4 >= 100) {
              cancelAnimationFrame(that.time4);
          } else {
            requestAnimationFrame(fn3);
          }
        });
      },
      top () {
        let that = this;

        this.data5 = 0;
        this.time5 = requestAnimationFrame(function fn4(timestamp) {
          that.data5++;
          if (that.data5 >= 100) {
              cancelAnimationFrame(that.time5);
          } else {
            requestAnimationFrame(fn4);
          }
        });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#btn-progress {
   border: none;
   background-color: #00bfff;
   color: #FFF;
   padding: .2rem;
   margin: .2rem auto;
   width: 90%;
   display: block;
   font-size: .2rem;
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
      <td>data</td> 
      <td>数据列表</td> 
      <td>Array</td> 
      <td>-</td> 
      <td>-</td>
    </tr>
    <tr>
      <td>showStatus</td> 
      <td>控制组件显示</td> 
      <td>Boolean</td> 
      <td>true, false</td> 
      <td>false</td>
    </tr>
    <tr>
      <td>@cancelBtn</td> 
      <td>取消按钮事件</td> 
      <td>Function</td> 
      <td>-</td> 
      <td>-</td>
    </tr>
    <tr>
      <td>@confirmBtn</td> 
      <td>确定按钮事件</td> 
      <td>Function</td> 
      <td>-</td> 
      <td>-</td>
    </tr>
    </tbody>
   </table>
  </div>
  