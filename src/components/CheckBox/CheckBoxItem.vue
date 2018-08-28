<template>
  <div class="im-checkbox-box">
    <input @change="changeHandler" v-model="curIndex" class="im-checkbox-box-item" type="checkbox" :style="checkboxStyle">
    <span class="im-checkbox-box-txt">{{val}}</span>
  </div>
</template>

<script>
export default {
  name: 'im-checkbox-item',
  data () {
    return {
      curIndex: false
    }
  },
  props: {
    val: {
      type: String,
      default: ''
    },
    activeBgColor: {
      type: String,
      default: '#00BFFF'
    },
    activeColor: {
      type: String,
      default: '#FFFFFF'
    },
    isCheck: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    changeHandler () {
      this.$parent.update()
    }
  },
  computed: {
    checkboxStyle () {
      return {
        backgroundColor: this.curIndex ? this.activeBgColor : '',
        color: this.activeColor,
        border: `1px solid ${this.activeBgColor}`,
        borderRadius: `${this.circle ? '50%' : '0.03rem'}`
      }
    }
  },
  created: function () {
    this.curIndex = this.isCheck
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
