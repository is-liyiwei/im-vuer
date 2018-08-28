<template>
  <div class="demo-picker">
    <button class="picker-btn" @click="showPickerFn">open</button>
    <button class="picker-btn" @click="changeData">切换数据</button>

    <div style="font-size: .3rem;text-align: center;">当前数据结构</div>
    <pre style="font-size: .3rem;height: 600px;overflow: scroll;background-color: #000f5a;color: #FFF;">{{data}}</pre>
    <pre style="font-size: .3rem;padding: 20px;overflow: scroll;background-color: #000f5a;color: #FFF;">城市数据来源: https://github.com/ydcss/ydui-district</pre>

    <div style="font-size: .3rem;text-align: center;">选择的是：{{test}}</div>

    <div @click="clockLayer" v-if="showLayer" class="layer"></div>

    <im-city-picker ref="picker" :data="data" :showStatus="showPicker" @cancelBtn="cancel" @confirmBtn="confirm"></im-city-picker>

  </div>
</template>

<script>
import data1 from './format_gov_province_city_area_id.js'

let data2 = [
  {
    n: '水果',
    v: 100000,
    c: [
      {
        n: '香蕉',
        v: 100100,
        c: [
          {
            n: '巴西香蕉',
            v: 100101
          },
          {
            n: '美国香蕉',
            v: 100102
          },
          {
            n: '中国香蕉',
            v: 100103
          },
          {
            n: '法国香蕉',
            v: 100104
          }
        ]
      },
      {
        n: '苹果',
        v: 100100,
        c: [
          {
            n: '巴西苹果',
            v: 100101
          },
          {
            n: '美国苹果',
            v: 100102
          },
          {
            n: '中国苹果',
            v: 100103
          },
          {
            n: '法国苹果',
            v: 100104
          }
        ]
      }
    ]
  },
  {
    n: '蔬菜',
    v: 100000,
    c: [
      {
        n: '白菜',
        v: 100100,
        c: [
          {
            n: '广东白菜',
            v: 100101
          },
          {
            n: '西安白菜',
            v: 100102
          },
          {
            n: '上海白菜',
            v: 100103
          },
          {
            n: '四川白菜',
            v: 100104
          }
        ]
      },
      {
        n: '萝卜',
        v: 100100,
        c: [
          {
            n: '广东萝卜',
            v: 100101
          },
          {
            n: '西安萝卜',
            v: 100102
          },
          {
            n: '上海萝卜',
            v: 100103
          },
          {
            n: '四川萝卜',
            v: 100104
          }
        ]
      }
    ]
  },
  {
    n: '肉类',
    v: 100000,
    c: [
      {
        n: '猪肉',
        v: 100100,
        c: [
          {
            n: '巴西猪肉',
            v: 100101
          },
          {
            n: '美国猪肉',
            v: 100102
          },
          {
            n: '中国猪肉',
            v: 100103
          },
          {
            n: '法国猪肉',
            v: 100104
          }
        ]
      }
    ]
  }
]

export default {
  name: 'picker',
  data () {
    return {
      data: [],
      showPicker: false,
      showLayer: false,
      test: ''
    }
  },
  created () {
    this.data = data1
  },
  watch: {
    value (newVal, oldVal) {

    }
  },
  methods: {
    showPickerFn () {
      this.showPicker = !this.showPicker
      this.showLayer = !this.showLayer
    },
    clockLayer () {
      this.showPicker = !this.showPicker
      this.showLayer = !this.showLayer
    },
    cancel () {
      this.showPicker = !this.showPicker
      this.showLayer = !this.showLayer
    },
    confirm (value) {
      console.log(value)
      this.test = `${value[0].n}-${value[1].n}-${value[2].n}`
      this.showPicker = !this.showPicker
      this.showLayer = !this.showLayer
    },
    changeData () {
      this.data === data1 ? (this.data = data2) : (this.data = data1)
    }
  },
  components: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.picker-btn {
  border: none;
  background-color: #00bfff;
  color: #fff;
  padding: 0.2rem;
  margin: 0.5rem auto;
  width: 90%;
  display: block;
  font-size: 0.37rem;
}

.layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
