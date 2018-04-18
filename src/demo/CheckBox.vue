<template>
  <div class="demo-checkbox">
    <div style="display: flex;justify-content: space-around;flex-direction: column;">
      <im-checkbox v-model="result">
        <div class="demo-box">
          <im-checkbox-item :isCheck="true" :val="'square1'" activeBgColor="#ff71e0" activeColor="#00ff37"></im-checkbox-item>
        </div>
        <div class="demo-box">
          <im-checkbox-item :isCheck="false" :val="'square2'" activeBgColor="#f00" activeColor="#fbff00"></im-checkbox-item>
        </div>
        <div class="demo-box">
          <im-checkbox-item :isCheck="false" :val="'square3'"></im-checkbox-item>
        </div>
        <div class="demo-box">
          <im-checkbox-item :isCheck="true" :val="'square4'"></im-checkbox-item>
        </div>
      </im-checkbox>
    </div>
    <div class="result-box">当前选择：{{result}}</div>

    <div style="display: flex;justify-content: space-around;flex-direction: column;">
      <im-checkbox v-model="result1">
        <div class="demo-box">
          <im-checkbox-item circle :isCheck="true" :val="'circle1'"></im-checkbox-item>
        </div>
        <div class="demo-box">
          <im-checkbox-item circle :isCheck="true" :val="'circle2'"></im-checkbox-item>
        </div>
        <div class="demo-box">
          <im-checkbox-item circle :isCheck="true" :val="'circle3'"></im-checkbox-item>
        </div>
        <div class="demo-box">
          <im-checkbox-item :circle="false" :isCheck="true" :val="'circle4'"></im-checkbox-item>
        </div>
      </im-checkbox>
    </div>
    <div class="result-box">当前选择：{{result1}}</div>
  </div>
</template>

<script>
export default {
  name: 'checkbox',
  data () {
    return {
      result: [],
      result1: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.demo-box {
  border-bottom: 1px solid #777;
  padding: 20px 50px;
}

.result-box {
  font-size: .3rem;
  text-align: center;
  padding: .5rem;
}
</style>
