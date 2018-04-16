<template>
  <div id="list-box" class="im-index-list">

    <ul class="im-index-list-content">
      <li v-for="(v, k) in dataList" :id="v.title" class="im-index-list-content-item">
        <p class="im-index-list-content-item-title">{{v.title}}</p>
        <p class="im-index-list-content-item-text" v-for="(vv, kk) in v.list" @click="handleClick(vv)">{{vv.name}}</p>
      </li>
    </ul>

    <ul 
      class="im-index-list-idx"
      @touchstart="start"
      @touchmove="move"
      @touchend="end">
      <li v-for="(v, k) in dataList" class="im-index-list-idx-item">{{v.title}}</li>
    </ul>

    <div class="im-index-list-indicator" v-if="showIndicator">{{indicator}}</div>

  </div>

</template>

<script>

export default {
  name: 'im-index-list',
  data () {
    return {
      targetInnerText: null,
      navOffsetX: null,
      indicator: '',
      showIndicator: false
    }
  },
  props: {
    dataList: {
      type: Array,
      default () {
        return []
      }
    },
    navList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  mounted: function () {
    this.box = document.getElementById('list-box')
  },
  methods: {
    start (evt) {
      if (evt.target.tagName.toLowerCase() == 'li') {
        this.targetInnerText = evt.target.innerText;
      } else {
        this.targetInnerText = null;
      }

      this.scrollTo(0, evt.touches[0].clientY);

      this.navOffsetX = evt.changedTouches[0].clientX;
    },
    move (evt) {
      evt.preventDefault();

      if (evt.target.tagName.toLowerCase() == 'li') {
        this.targetInnerText = evt.target.innerText;
      } else {
        this.targetInnerText = null;
      }

      this.scrollTo(0, evt.touches[0].clientY);
    },
    end (evt) {
      this.showIndicator = false;
    },
    scrollTo (distX, distY) {
      let moveTargetDom = document.elementFromPoint(this.navOffsetX, distY);

      if (moveTargetDom.nodeName.toLowerCase() == 'li') {

        this.showIndicator = true;

        this.indicator = moveTargetDom.innerText;

        let scroll_Y = document.getElementById(moveTargetDom.innerText).getBoundingClientRect().top;
        if (Math.abs(scroll_Y) > 0) {
          this.box.scrollTop += document.getElementById(moveTargetDom.innerText).getBoundingClientRect().top
        }
      }
    },
    handleClick (item) {
      this.$emit('handleClick', item)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../../less/base.less';

.@{prefixClass} {
  &-index-list {
    ul {
      list-style-type: none;
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    &-idx {
      position: fixed;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      right: 0;
      top: 0;
      background-color: rgba(0, 0, 0, .3);
      width: .4rem * @baseRem;
      height: 100%;
      font-size: .26rem * @baseRem;
      color: #FFF;
      &-item {
        padding: .03rem * @baseRem .1rem * @baseRem;
      }
    }
    &-content {
      &-item {
        &-title {
          background-color: #e9e9e9;
          font-size: .37rem * @baseRem;
          padding: .2rem * @baseRem;
        }
        &-text {
          font-size: .27rem * @baseRem;
          padding: .2rem * @baseRem;
          border-bottom: 1px solid #c1c1c1;
        }
      }
    }
    &-indicator {
      position: fixed;
      left: 50%;
      top: 50%;
      -webkit-transform: translate3d(-50%, -50%, 0);
      transform: translate3d(-50%, -50%, 0);
      background-color: rgba(0, 0, 0, .3);
      width: 1rem * @baseRem;
      height: 1rem * @baseRem;
      font-size: .6rem * @baseRem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
    }
  }
}

#list-box {
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  position: absolute;  
}
</style>
