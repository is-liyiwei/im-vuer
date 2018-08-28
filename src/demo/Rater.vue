<template>
  <div>
    <div class="rater-box">
      <im-rater v-model="data1" :min="3"></im-rater>
      <span class="tips">最小值3</span>
    </div>
    <div class="rater-box">
      <im-rater v-model="data2" :max="6" active-color="#04BE02"></im-rater>
      <span class="tips">最大值6</span>
    </div>
    <div class="rater-box">
      <im-rater v-model="data3" disabled></im-rater>
      <span class="tips">禁止选择</span>
    </div>
    <div class="rater-box">
      <im-rater v-model="data4" :max="2" active-color="#04BE02" disabled></im-rater>
      <span class="tips">禁止选择</span>
    </div>
    <div class="rater-box">
      <im-rater v-model="data42" active-color="#3c6fff" :font-size="'.7rem'"></im-rater>
      <span class="tips">大小</span>
    </div>
    <div class="rater-box">
      <im-rater v-model="data4" star="♡" active-color="red" :margin="'0.3rem'"></im-rater>
      <span class="tips">自定义模板</span>
    </div>
    <div class="rater-box">
      <im-rater v-model="data41" star="<span>X</span>" active-color="red" :margin="'0.3rem'"></im-rater>
      <span class="tips">自定义模板</span>
    </div>
    <div class="rater-box">
      <im-rater v-model="data5" star="☼" active-color="#FF9900" :margin="'0.3rem'"></im-rater>
      <span class="tips">自定义模板</span>
    </div>
    <div class="rater-box">
      <im-rater v-model="data5" star="☻" active-color="#9100ff" :margin="'0.3rem'"></im-rater>
      <span class="tips">自定义模板</span>
    </div>
    <div class="rater-box">
      <im-rater v-model="data5" star="✩" active-color="#f00" :margin="'0.3rem'"></im-rater>
      <span class="tips">自定义模板</span>
    </div>
    <div class="rater-box">
      <im-rater v-model="data5" star="囧" active-color="#FF9900" :margin="'0.3rem'"></im-rater>
      <span class="tips">自定义模板</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'rater',
  components: {

  },
  data () {
    return {
      data1: 1,
      data2: 5,
      data3: '5',
      data4: 3,
      data41: 3.7,
      data42: 3.5,
      data5: 3
    }
  },
  methods: {

  },
  watch: {
    data1 (newVal, oldVal) {
      console.log(newVal)
    }
  }
}
</script>

<style>
.rater-box {
  margin: 50px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .2rem;
}
.tips {
  font-size: .37rem;
}
</style>
