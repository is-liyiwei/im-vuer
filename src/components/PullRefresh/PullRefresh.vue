<template>
  <div class="im-pull-refresh">

    <div class="im-pull-refresh-box" :style="{ height: '100%', transform: `translate3d(0, ${distance}px, 0)` }">

      <div class="im-pull-refresh-loading block" :style="{marginTop: distance > 0 ? '0' : '-80px'}">
        <slot name="top-loading">
          <div style="height: 100%;">{{pullDownText}}</div>
        </slot>
      </div>

      <div class="im-pull-refresh-content">
        <slot></slot>
      </div>

      <div class="im-pull-refresh-loading block">
        <slot name="bottom-loading">
          <div style="height: 100%;">{{pullUpText}}</div>
        </slot>
      </div>

    </div>

  </div>
</template>

<script>
  import draggable from '../../helper/draggable.js';
  import translateUtil from '../../helper/translate.js';
  export default {
    name: 'pull-refresh',
    data() {
      return {
        scrollEl: null,
        direction: '',
        distance: 0,
        pullDownText: '下拉刷新',
        pullUpText: '上拉加载'
      }
    },
    props: {
      pullUpMethods: {
        type: Function,
        default: () => {
          console.log('pullUpMethods')
        }
      },
      pullDownMethods: {
        type: Function,
        default: () => {
          console.log('pullDownMethods')
        }
      }
    },
    mounted() {
      this.scrollEl = this.$el.querySelector('.im-pull-refresh-box');
      this.initEvent();
    },
    methods: {
      initEvent() {
        var el = this.scrollEl;
        var dragState = {};
        draggable(el, {
          start: (touch, $event) => {
            dragState = {
              startTime: new Date(),
              startX: touch.pageX,
              startY: touch.pageY,
              startTranslateTop: translateUtil.getElementTranslate(el).top,
              elTop: this.scrollEl.scrollTop,
              elBottom: this.checkBottomReached()
            };
            el.style.transition = '0ms';
            this.pullDownText = '下拉刷新'
            this.pullUpText = '上拉加载'
          },
          drag: (touch, $event) => {
            this.dragging = true;
            dragState.dragX = touch.pageX - dragState.startX;
            dragState.dragY = touch.pageY - dragState.startY;
            this.direction = dragState.dragY > 0 ? 'down' : 'up';

            if(dragState.elTop <= 0 && this.direction === 'down') {
              this.distance = dragState.dragY;
              this.$emit('pull-down', this.distance);
              $event.preventDefault();
              $event.stopPropagation();
              if(this.distance > 100) {
                this.pullDownText = '释放刷新';
              } else {
                this.pullDownText = '下拉刷新';
              }
            } else if(dragState.elBottom && this.direction === 'up') {
              this.distance = dragState.dragY;
              this.$emit('pull-up', this.distance);
              $event.preventDefault();
              $event.stopPropagation();
              if(this.distance < -100) {
                this.pullUpText = '释放刷新';
              } else {
                this.pullUpText = '上拉加载';
              }
            }
          },
          end: (touch, $event) => {
            this.dragging = false;
            el.style.transition = '200ms';

            if(this.distance > 100) {

              this.pullDownText = '加载中...';
              this.distance = .1;
              this.pullDownMethods();
              return

            } else if(this.distance < -100) {
              this.pullUpText = '加载中...';
              this.distance = 0;
              this.pullUpMethods();
              return
            }

            this.done();

            dragState = {};
          }
        });
      },
      checkBottomReached() {
        return this.scrollEl.scrollTop + this.scrollEl.offsetHeight + 1 >= this.scrollEl.scrollHeight;
      },
      done() {
        this.distance = 0;
      }
    }
  }
</script>

<style scoped>
  .im-pull-refresh {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: hidden;
    box-sizing: border-box;
  }
  
  .im-pull-refresh-box {
    flex: 1;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    height: 100%;
    position: relative;
  }
  
  .im-pull-refresh-box-item {
    height: 100px;
    line-height: 100px;
    font-size: .37rem;
    text-align: center;
  }
  
  .im-pull-refresh-box-item:nth-of-type(2n) {
    background-color: #dbdbdb;
  }
  
  .block {
    text-align: center;
    font-size: .37rem;
    height: 80px;
    line-height: 80px;
    position: relative;
  }
</style>