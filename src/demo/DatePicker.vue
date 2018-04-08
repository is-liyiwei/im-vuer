<template>
  <div class="demo-date-picker">
    
    <div style="font-size: .3rem;margin: 30px;text-align: center;">选择的是：{{date_user_style}}</div>
    <button id="btn" @click="showCtrl_user_style = !showCtrl_user_style">showCtrl_user_style</button>

    <im-date-picker 
    @confirm="datePickerConfirm_user_style"
    headerColor="#ff9c9c" 
    itemColor="#673ab7" 
    cancelBtn="#888" 
    confirmBtn="#f00"
    v-model="showCtrl_user_style"></im-date-picker>

    <div style="font-size: .3rem;margin: 30px;text-align: center;">选择的是：{{date_default_style}}</div>
    <button id="btn" @click="showCtrl_default_style = !showCtrl_default_style">showCtrl_default_style</button>

    <im-date-picker 
    @confirm="datePickerConfirm_default_style"
    v-model="showCtrl_default_style"></im-date-picker>
  </div>
</template>

<script>
export default {
  name: 'date-picker',
  data () {
    return {
      date_user_style: '',
      date_default_style: '',
      showCtrl_user_style: false,
      showCtrl_default_style: false
    }
  },
  created: function () {

  },
  methods: {
    datePickerConfirm_user_style (v) {
      this.date_user_style = v
    },
    datePickerConfirm_default_style (v) {
      this.date_default_style = v
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
#btn {
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
