<template>
  <div class="im-marquee" :style="{ height: itemHeight + 'px', textAlign: 'center' }">
    <div ref="box" class="im-marquee-box" :style="animate">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'marquee',
  data () {
    return {
      itemHeight: '',
      itemLength: 0,
      tsY: 0,
      currentIndex: 0,
      timer: null,
      noAnimate: false
    }
  },
  props: {
    scrollStatus: {
      type: String,
      default: 'up',
      validator(value) {
        return ['up', 'down'].indexOf(value) > -1;
      }
    },
    speed: {
      type: [Number, String],
      default: .2
    }
  },
  computed: {
    animate () {
      return {
        transition: `transform ${this.noAnimate == true ? 0 : 200}ms`,
        transform: `translate3d(0, ${this.tsY}px, 0)`
      }
    }
  },
  components: {

  },
  methods: {
    init () {
      let { firstItem, lastItem } = this.cloneNode();
      this.itemLength = this.$refs.box.children.length;
      if (this.scrollStatus === 'up') {
        this.cloneNode = firstItem.cloneNode(true);
        this.$refs.box.appendChild(this.cloneNode);
        this.itemHeight = firstItem.offsetHeight;
      } else if (this.scrollStatus === 'down') {
        this.cloneNode = lastItem.cloneNode(true);
        this.$refs.box.insertBefore(this.cloneNode, firstItem);
        this.itemHeight = firstItem.offsetHeight;
      }

      this.setDefault(this.scrollStatus);


      this.start();

    },
    cloneNode () {
      let firstItem = this.$refs.box.firstElementChild;
      let lastItem = this.$refs.box.lastElementChild;
      return { firstItem, lastItem }
    },
    setDefault (status) {
      if (status === 'up') {
        this.currentIndex = 0;
      } else if (status === 'down') {
        this.currentIndex = 1;
      }
      this.tsY = -this.currentIndex * this.itemHeight;
    },
    start () {
      this.timer = setInterval( () => {
        if (this.scrollStatus == 'up') {

          if (this.currentIndex == this.itemLength) {
            this.currentIndex = 0;
            this.tsY = -this.currentIndex * this.itemHeight;
          } else {
            this.currentIndex++;
            this.tsY = -this.currentIndex * this.itemHeight;
          }

        } else if (this.scrollStatus === 'down') {

          if (this.currentIndex == 0) {
            this.currentIndex = this.itemLength;
            this.tsY = -this.currentIndex * this.itemHeight;
          } else {
            this.currentIndex--;
            this.tsY = -this.currentIndex * this.itemHeight;
          }

        }
      }, 1000)
    }
  },
  mounted: function () {
    this.init();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../../less/base.less';

.@{prefixClass} {
  &-marquee {
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    overflow: hidden;
    &-box {

    }
    div {
      font-size: .3rem;
    }
  }
}
</style>
