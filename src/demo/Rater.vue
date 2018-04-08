<template>
  <div>
    <div style="margin: 50px 0;"><im-rater v-model="data1" :min="3"></im-rater></div>
  	<div style="margin: 50px 0;"><im-rater v-model="data2" :max="8" active-color="#04BE02"></im-rater></div>
  	<div style="margin: 50px 0;"><im-rater v-model="data3" disabled></im-rater></div>
  	<div style="margin: 50px 0;"><im-rater v-model="data4" active-color="#04BE02" disabled></im-rater></div>
  	<div style="margin: 50px 0;"><im-rater v-model="data42" active-color="#3c6fff" :font-size="'.8rem'"></im-rater></div>
  	<div style="margin: 50px 0;"><im-rater v-model="data4" star="♡" active-color="red" :margin="'0.3rem'"></im-rater></div>
  	<div style="margin: 50px 0;"><im-rater v-model="data41" star="<span>X</span>" active-color="red" :margin="'0.3rem'"></im-rater></div>
  	<div style="margin: 50px 0;"><im-rater v-model="data5" star="☼" active-color="#FF9900" :margin="'0.3rem'"></im-rater></div>
  	<div style="margin: 50px 0;"><im-rater v-model="data5" star="☻" active-color="#9100ff" :margin="'0.3rem'"></im-rater></div>
  	<div style="margin: 50px 0;"><im-rater v-model="data5" star="✩" active-color="#f00" :margin="'0.3rem'"></im-rater></div>
  	<div style="margin: 50px 0;"><im-rater v-model="data5" star="囧" active-color="#FF9900" :margin="'0.3rem'"></im-rater></div>
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
      data5: 3,
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