<template>
  <div class="im-picker">

    <div class="im-picker-box" :style="{ transform: `translate3d(0, ${this.showStatus ? 0 : 110}%, 0)` }">

      <div class="im-picker-box-header" :style="{ backgroundColor: bgColor }">
        <div :style="{ color: cancelBtnColor }" @click="cancelBtn">取消</div>
        <div :style="{ color: confirmBtnColor }" @click="confirmBtn">确定</div>
      </div>

      <div class="im-picker-box-content">

        <!-- 下面的三个v-if是为了防止异步数据 -->
        <im-city-picker-item
         @get-data="getProvince"
          v-model="provinceIndex"
          :currentIndex="provinceIndex"
          v-if="provinceData.length"
          :data="provinceData">
         </im-city-picker-item>

        <im-city-picker-item
          @get-data="getCity"
          ref="city"
          v-model="cityIndex"
          :currentIndex="cityIndex"
          v-if="cityData.length"
          :data="cityData">
         </im-city-picker-item>

        <im-city-picker-item
          @get-data="getArea"
          ref="area"
          v-if="areaData.length"
          :data="areaData">
        </im-city-picker-item>

        <div class="line-box"></div>

      </div>

    </div>

  </div>
</template>

<script>
import CityPickerItem from './CityPickerItem'

export default {
  name: 'im-city-picker',
  data () {
    return {
      provinceIndex: 0,
      cityIndex: 0,
      currData: [0, 0, 0]
    }
  },
  components: {
    'im-city-picker-item': CityPickerItem
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
    },
    bgColor: {
      type: String,
      default: '#00bfff'
    },
    cancelBtnColor: {
      type: String,
      default: '#fff'
    },
    confirmBtnColor: {
      type: String,
      default: '#fff'
    }
  },
  mounted () {

  },
  methods: {
    cancelBtn () {
      this.$emit('cancelBtn')
    },
    confirmBtn () {
      let result = []
      // 使用下面的索引分别找到对应的省市区的值
      result.push(this.provinceData[this.currData[0]] || this.provinceData[0] || {})
      result.push(this.cityData[this.currData[1]] || this.cityData[0] || {})
      result.push(this.areaData[this.currData[2]] || this.areaData[0] || {})

      this.$emit('confirmBtn', result.filter(Boolean))
    },
    getProvince (idx) {
      this.currData[0] = idx // 获取省索引
    },
    getCity (idx) {
      this.currData[1] = idx // 获取市索引
    },
    getArea (idx) {
      this.currData[2] = idx // 获取区索引
    }
  },
  computed: {
    provinceData () {
      return this.data
    },
    cityData () {
      return this.provinceData[this.provinceIndex] && this.provinceData[this.provinceIndex].c ? this.provinceData[this.provinceIndex].c : []
    },
    areaData () {
      // 如果二级列(城市)，没有数据，则返回空数组
      if (this.cityData.length) {
        return this.cityData[this.cityIndex] && this.cityData[this.cityIndex].c ? this.cityData[this.cityIndex].c : []
      } else {
        return []
      }
    }
  },
  watch: {
    // provinceIndex () {
    //   this.cityIndex = 0
    // }
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
      font-size: .3px * @baseRem;
      transition: all .3s;
      &-content {
        display: flex;
        /*height: 400px;*/
        height: 4.8px * @baseRem;
        overflow: hidden;
        justify-content: space-around;
        position: relative;
        &-item {
          z-index: 10;
          transition: all .18s;
          flex: 1;
          &-value {
            text-align: center;
            height: .8px * @baseRem;
            line-height: .8px * @baseRem;
            display: block;
          }
        }
      }
      &-header {
        display: flex;
        height: .8px * @baseRem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 40px;
        font-size: .37px * @baseRem;
        div {
          font-size: .37px * @baseRem;
        }
      }
    }
  }
}

.line-box {
  position: absolute;
  width: 100%;
  height: .8px * @baseRem;
  top: 1.6px * @baseRem;
  border-color: #5d5d5d;
  border-style: solid;
  border-width: 1px;
  border-left: none;
  border-right: none;
  z-index: 9;
}
</style>
