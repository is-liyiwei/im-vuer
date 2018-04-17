<template>
  <div class="demo-checkbox">
    <div style="display: flex;justify-content: space-around;flex-direction: column;">
      <im-checkbox v-model="result">
        <div class="demo-box">
          <im-checkbox-item :isCheck="true" :val="'haha1'" activeBgColor="#ff71e0" activeColor="#00ff37"></im-checkbox-item>
        </div>
        <div class="demo-box">
          <im-checkbox-item :isCheck="false" :val="'haha2'"></im-checkbox-item>
        </div>
        <div class="demo-box">
          <im-checkbox-item :isCheck="false" :val="'haha3'"></im-checkbox-item>
        </div>
        <div class="demo-box">
          <im-checkbox-item :isCheck="true" :val="'haha4'"></im-checkbox-item>
        </div>
      </im-checkbox>
    </div>
    <div class="result-box">当前选择：{{result}}</div>
  </div>
</template>

<script>
export default {
  name: 'checkbox',
  data () {
    return {
      result: []
    }
  },
  components: {

  },
  created: function () {
    console.log(this.result)
  },
  watch: {
    result (newVal) {
      console.log(newVal)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.demo-box {
  background-color: #e8e8e8;
  border-bottom: 1px solid #777;
  padding: 20px 50px;
}

.result-box {
  font-size: .3rem;
  text-align: center;
  padding: .5rem;
}
</style>
