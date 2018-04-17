<template>
  <div class="im-marquee" :style="boxStyle">
    <div ref="box" class="im-marquee-box" :style="animate">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'im-marquee',
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
    duration: {
      type: [Number, String],
      default: 300
    },
    interval: {
      type: [Number, String],
      default: 3000
    }
  },
  computed: {
    animate () {
      return {
        transition: `transform ${this.noAnimate == true ? 0 : 200}ms`,
        transform: `translate3d(0, ${this.tsY}px, 0)`
      }
    },
    boxStyle () {
      return {
        height: this.itemHeight + 'px',
        textAlign: 'center'
      }
    }
  },
  components: {

  },
  methods: {
    init () {
      let { firstItem, lastItem } = this.cloneNode();
      this.itemHeight = firstItem.offsetHeight;
      this.itemLength = this.$refs.box.children.length;

      if (this.scrollStatus === 'up') {
        this.cloneNode = firstItem.cloneNode(true);
        this.$refs.box.appendChild(this.cloneNode);
      } else if (this.scrollStatus === 'down') {
        this.cloneNode = lastItem.cloneNode(true);
        this.$refs.box.insertBefore(this.cloneNode, firstItem);
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
        this.currentIndex = this.itemLength;
      }
      this.tsY = -this.currentIndex * this.itemHeight;
    },
    start () {
      this.timer = setInterval( () => {
        if (this.scrollStatus == 'up') {

          this.noAnimate = false;
          this.currentIndex++;
          this.setTranslate();

          if (this.currentIndex == this.itemLength) {
            this.currentIndex = 0;
            setTimeout( () => {
              this.noAnimate = true;
              this.setTranslate();
            }, this.duration)
          }

        } else if (this.scrollStatus === 'down') {

          this.noAnimate = false;
          this.currentIndex--;
          this.setTranslate();

          if (this.currentIndex == 0) {
            this.currentIndex = this.itemLength;
            setTimeout( () => {
              this.noAnimate = true;
              this.setTranslate();
            }, this.duration)
          }

        }
      }, this.interval)
    },
    setTranslate () {
      this.tsY = -this.currentIndex * this.itemHeight;
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
    overflow: hidden;
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  }
}
</style>
