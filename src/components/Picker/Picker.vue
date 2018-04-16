<template>
  <div class="im-picker">

    <div class="im-picker-box" :style="{ transform: `translate3d(0, ${this.showStatus ? 0 : 110}%, 0)` }">
      <div class="im-picker-box-header">
        <div @click="cancelBtn">取消</div>
        <div @click="confirmBtn">确定</div>
      </div>

      <div class="im-picker-box-content">
 
        <slot></slot>

        <div class="line-box"></div>

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'im-picker',
  data () {
    return {
      resultData: []
    }
  },
  props: {
    showStatus: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    cancelBtn () {
      this.$emit('cancelBtn')
    },
    confirmBtn () {
      this.$emit('confirmBtn', this.resultData)
    },
    updateValue () {
      this.resultData = [];
      this.childrens = this.$children.filter(item => item.$options.name === 'im-picker-item');
      for (let i = 0; i < this.childrens.length; i++) {
        
        this.resultData.push(this.childrens[i].resultItem)
      }
    }
  },
  computed: {

  },
  mounted () {
    this.updateValue();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import '../../less/base.less';
.@{prefixClass} {
  &-picker {
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    &-box {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      background-color: #fff;
      font-size: .3rem * @baseRem;
      transition: all .3s;
      &-content {
        display: flex;
        /*height: 400px;*/
        height: 480px;
        overflow: hidden;
        justify-content: space-around;
        position: relative;
        &-item {
          z-index: 10;
          transition: all .18s;
          flex: 1;
          &-value {
            text-align: center;
            height: 80px;
            line-height: 80px;
            display: block;
          }
        }
      }
      &-header {
        display: flex;
        height: 85px;
        background-color: #00bfff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 40px;
        font-size: .3rem * @baseRem;
        div {
          color: #FFF;
        }
      }
    }
  }
}
.line-box {
  position: absolute;
  width: 100%;
  height: 80px;
  top: 160px;
  border-color: #5d5d5d;
  border-style: solid;
  border-width: 1px;
  border-left: none;
  border-right: none;
  z-index: 9;
}
</style>