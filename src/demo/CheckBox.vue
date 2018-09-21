<template>
  <div class="demo-checkbox">
    <div style="display: flex;justify-content: space-around;flex-direction: column;padding: 20px;">
      <im-checkbox v-model="square">
        <im-checkbox-item :isCheck="false" :val="'square1'" activeBgColor="#ff71e0" activeColor="#00ff37"></im-checkbox-item>
        <im-checkbox-item :isCheck="true" :val="'square2'" activeBgColor="#f00" activeColor="#fbff00"></im-checkbox-item>
        <im-checkbox-item :isCheck="false" :val="'square3'"></im-checkbox-item>
        <im-checkbox-item :isCheck="true" :val="'square4'"></im-checkbox-item>
      </im-checkbox>
    </div>
    <div class="result-box">当前选择：{{square}}</div>

    <div style="display: flex;justify-content: space-around;flex-direction: column;padding: 20px;">
      <im-checkbox v-model="circle">
        <im-checkbox-item circle :isCheck="true" :val="'circle1'"></im-checkbox-item>
        <im-checkbox-item circle :isCheck="true" :val="'circle2'"></im-checkbox-item>
        <im-checkbox-item circle :isCheck="true" :val="'circle3'"></im-checkbox-item>
        <im-checkbox-item circle :isCheck="true" :val="'circle4'"></im-checkbox-item>
      </im-checkbox>
    </div>
    <div class="result-box">当前选择：{{circle}}</div>

    <im-checkbox v-model="horizontal" style="display: flex;justify-content: space-around;">
      <im-checkbox-item circle :isCheck="true" :val="'circle1'"></im-checkbox-item>
      <im-checkbox-item circle :isCheck="true" :val="'circle2'"></im-checkbox-item>
      <im-checkbox-item circle :isCheck="true" :val="'circle3'"></im-checkbox-item>
      <im-checkbox-item circle :isCheck="true" :val="'circle4'"></im-checkbox-item>
    </im-checkbox>
    <div class="result-box">当前选择：{{horizontal}}</div>

  </div>
</template>

<script>
export default {
  name: 'checkbox',
  data () {
    return {
      square: [],
      circle: [],
      horizontal: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.result-box {
  font-size: .3rem;
  padding: 20px;
  color: #909090;
  background-color: rgba(234, 234, 234, .6);
}
</style>
