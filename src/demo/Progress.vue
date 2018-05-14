<template>
  <div class="demo-progress">
    <im-progress :progress-width="data1">
      <span class="im-progress-start progress-text" slot="startText">0%</span>
      <span class="im-progress-start progress-text" slot="endText">100%</span>
    </im-progress>
    <br>
    <im-progress :progress-width="data2" progress-color="#f00" progress-height="20">
    </im-progress>
    <br>
    <im-progress :progress-width="data3" progress-color="#ffbf20" color="#4f00ff" progress-height="5">
      <span class="im-progress-start progress-text" slot="endText">60%</span>
    </im-progress>
    <br>
    <im-progress v-show="data4 != 0 && data4 != 100" :progress-width="data4">
      <span class="im-progress-start progress-text" slot="endText">{{data4}}%</span>
    </im-progress>
    <im-progress progress-color="#f00" :inTop="true" v-show="data5 != 0 && data5 != 100" progress-height="6" :progress-width="data5"></im-progress>
    <button class="btn-progress" @click="upFile">点击</button>
    <br>
    <button class="btn-progress" @click="top">顶部进度条</button>
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
        data3: 10,
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

      setTimeout(() => {
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

        this.time3 = requestAnimationFrame(function fn3(timestamp) {
          that.data3++;
          if (that.data3 >= 60) {
              cancelAnimationFrame(that.time3);
          } else {
            requestAnimationFrame(fn3);
          }
        });
      }, 500)

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
.btn-progress {
   border: none;
   background-color: #00bfff;
   color: #FFF;
   padding: .2rem;
   margin: .2rem auto;
   width: 90%;
   display: block;
   font-size: .37rem;
}
</style>