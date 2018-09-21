<template>
  <div class="im-radio-item">
    <input
      :id="_uid"
      @change="changeHandler"
      :disabled="disabled"
      :checked="checked"
      class="im-radio-item-input"
      type="radio" />
    <label :for="_uid" class="im-radio-item-label" :style="labelStyle">
      <span class="im-radio-item-label-cur" :style="checked ? onCurStyle : offCurStyle"></span>
    </label>
    <span class="im-radio-item-text" :style="textStyle">{{val}}</span>
  </div>
</template>

<script>

export default {
  name: 'im-radio-item',
  data () {
    return {
      checked: false
    }
  },
  props: {
    val: {
      type: [Number, String]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: '#00BFFF'
    },
    size: {
      type: String,
      default: '22px'
    },
    textFz: {
      type: String,
      default: '.3rem'
    },
    textColor: {
      type: String,
      default: '#888'
    }
  },
  inject: ['rootRadio'],
  methods: {
    changeHandler () {
      if (this.disabled) return
      this.$parent.updadeView(this.val)
    }
  },
  computed: {
    labelStyle () {
      return {
        border: `1px solid ${this.bgColor}`,
        width: this.size,
        height: this.size
      }
    },
    onCurStyle () {
      return {
        backgroundColor: this.bgColor,
        width: ~~(this.rootRadio.width * 0.6) + 'px',
        height: ~~(this.rootRadio.width * 0.6) + 'px',
        transform: 'translate3d(-50%, -50%, 0) scale(1)'
      }
    },
    offCurStyle () {
      return {
        backgroundColor: this.bgColor,
        transform: 'translate3d(-50%, -50%, 0) scale(0)'
      }
    },
    textStyle () {
      return {
        'font-size': this.textFz,
        'color': this.textColor
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
