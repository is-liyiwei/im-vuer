<template>
  <div class="im-picker">

    <div class="im-picker-box" :style="styleObj">

      <div class="im-picker-box-header">
        <div @click="cancelBtn">取消</div>
        <div @click="confirmBtn">确定</div>
      </div>

      <div class="im-picker-box-content">
 
        <im-picker-item @get-data="getProvince" v-model="provinceIndex" :currentIndex="provinceIndex" :data="provinceData"></im-picker-item>
        <im-picker-item @get-data="getCity" ref="city" v-model="cityIndex" :currentIndex="cityIndex" :data="cityData"></im-picker-item>
        <im-picker-item @get-data="getArea" ref="area" :data="areaData"></im-picker-item>

        <div class="line-box"></div>

      </div>

    </div>

  </div>
</template>

<script>
import PickerItem from './pickerItem'

export default {
  name: 'picker',
  data () {
    return {
      provinceIndex: 0,
      cityIndex: 0,
      currData: []
    }
  },
  components: {
    'im-picker-item': PickerItem
  },
  props: {
    showStatus: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  mounted () {

  },
  methods: {
    cancelBtn () {
      this.$emit('cancelBtn');
    },
    confirmBtn () {
      this.$emit('confirmBtn', this.currData);
    },
    getProvince (val) {
      this.currData[0] = val;
    },
    getCity (val) {
      this.currData[1] = val;
    },
    getArea (val) {
      this.currData[2] = val;
    }
  },
  computed: {
    styleObj () {
      return {
        transform: `translate3d(0, ${this.showStatus ? 0 : 110}%, 0)`
      }
    },
    provinceData () {
      return this.data
    },
    cityData () {
      return this.provinceData[this.provinceIndex].c
    },
    areaData () {
      return this.cityData[this.cityIndex].c
    }
  },
  watch: {
    provinceIndex () {
      this.cityIndex = 0;
    }
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
