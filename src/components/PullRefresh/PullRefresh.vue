<template>
  <div class="im-pull-refresh">

    <div class="im-pull-refresh-box" :style="{ height: '100%', transform: `translate3d(0, ${distance}px, 0)` }">

      <div class="im-pull-refresh-loading block" :style="topBlock" v-if="pullDownMethods">
        <slot name="top-loading">
          <i v-if="!isLoading" class="iconfont icon-success" style="font-size: .3rem;padding-right: 10px;"></i>
          <svg v-else width="32" viewBox="0 0 64 64" class="spinner" style="fill: rgb(0, 0, 0); stroke: rgb(0, 0, 0);"><g stroke-width="4" stroke-linecap="round"><line y1="17" y2="29" transform="translate(32,32) rotate(180)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(210)"><animate attributeName="stroke-opacity" dur="750ms" values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(240)"><animate attributeName="stroke-opacity" dur="750ms" values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(270)"><animate attributeName="stroke-opacity" dur="750ms" values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(300)"><animate attributeName="stroke-opacity" dur="750ms" values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(330)"><animate attributeName="stroke-opacity" dur="750ms" values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(0)"><animate attributeName="stroke-opacity" dur="750ms" values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(30)"><animate attributeName="stroke-opacity" dur="750ms" values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(60)"><animate attributeName="stroke-opacity" dur="750ms" values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(90)"><animate attributeName="stroke-opacity" dur="750ms" values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(120)"><animate attributeName="stroke-opacity" dur="750ms" values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(150)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line></g></svg>
          <div>{{pullDownText}}</div>
        </slot>
      </div>

      <div class="im-pull-refresh-content">
        <slot></slot>
      </div>

      <div class="im-pull-refresh-loading block" v-if="pullUpMethods">
        <slot name="bottom-loading">
          <i v-if="!isLoading" class="iconfont icon-success" style="font-size: .3rem;padding-right: 10px;"></i>
          <svg v-else width="32" viewBox="0 0 64 64" class="spinner" style="fill: rgb(0, 0, 0); stroke: rgb(0, 0, 0);"><g stroke-width="4" stroke-linecap="round"><line y1="17" y2="29" transform="translate(32,32) rotate(180)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(210)"><animate attributeName="stroke-opacity" dur="750ms" values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(240)"><animate attributeName="stroke-opacity" dur="750ms" values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(270)"><animate attributeName="stroke-opacity" dur="750ms" values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(300)"><animate attributeName="stroke-opacity" dur="750ms" values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(330)"><animate attributeName="stroke-opacity" dur="750ms" values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(0)"><animate attributeName="stroke-opacity" dur="750ms" values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(30)"><animate attributeName="stroke-opacity" dur="750ms" values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(60)"><animate attributeName="stroke-opacity" dur="750ms" values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(90)"><animate attributeName="stroke-opacity" dur="750ms" values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(120)"><animate attributeName="stroke-opacity" dur="750ms" values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(150)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line></g></svg>
          <div>{{pullUpText}}</div>
        </slot>
      </div>

    </div>

  </div>
</template>

<script>
  import draggable from '../../helper/draggable.js';
  import translateUtil from '../../helper/translate.js';

  let _pullDownConfig = {
    pullText: '下拉刷新',
    triggerText: '释放更新',
    loadingText: '加载中...',
    doneText: '加载完成',
    failText: '加载失败',
    loadedStayTime: 400,
    stayDistance: 50,
    triggerDistance: 70
  }

  let _pullUpConfig = {
    pullText: '上拉加载',
    triggerText: '释放更新',
    loadingText: '加载中...',
    doneText: '加载完成',
    failText: '加载失败',
    loadedStayTime: 400,
    stayDistance: 50,
    triggerDistance: 70
  }

  export default {
    name: 'im-pull-refresh',
    data() {
      return {
        scrollEl: null,
        direction: '',
        distance: 0,
        pullUpText: '',
        pullDownText: '',
        isLoading: false
      }
    },
    props: {
      pullUpMethods: {
        type: Function
      },
      pullDownMethods: {
        type: Function
      },
      pullDownConfig: {
        type: Object,
        default: () => {
          return {}
        }
      },
      pullUpConfig: {
        type: Object,
        default: () => {
          return {}
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
            if (this.isLoading) {
              return
            }
            dragState = {
              startTime: new Date(),
              startX: touch.pageX,
              startY: touch.pageY,
              startTranslateTop: translateUtil.getElementTranslate(el).top,
              elTop: this.scrollEl.scrollTop,
              elBottom: this.checkBottomReached()
            };
            el.style.transition = '0ms';
            this.pullDownText = this.v_pullDownConfig.pullText;
            this.pullUpText = this.v_pullUpConfig.pullText;
          },
          drag: (touch, $event) => {
            if (this.isLoading) {
              return
            }
            this.dragging = true;
            dragState.dragX = touch.pageX - dragState.startX;
            dragState.dragY = touch.pageY - dragState.startY;
            this.direction = dragState.dragY > 0 ? 'down' : 'up';

            if(dragState.elTop <= 0 && this.direction === 'down') {
              this.distance = dragState.dragY;
              this.$emit('pull-down', this.distance);
              $event.preventDefault();
              $event.stopPropagation();

              if (typeof this.pullDownMethods !== 'function') return;

              if(this.distance > 100) {
                this.pullDownText = this.v_pullDownConfig.triggerText;
              } else {
                this.pullDownText = this.v_pullDownConfig.pullText;
              }
            } else if(dragState.elBottom && this.direction === 'up') {
              this.distance = dragState.dragY;
              this.$emit('pull-up', this.distance);
              $event.preventDefault();
              $event.stopPropagation();

              if (typeof this.pullUpMethods !== 'function') return;

              if(this.distance < -100) {
                this.pullUpText = this.v_pullUpConfig.triggerText;
              } else {
                this.pullUpText = this.v_pullUpConfig.pullText;
              }
            }
          },
          end: (touch, $event) => {
            if (this.isLoading) {
              return
            }
            this.dragging = false;
            el.style.transition = '200ms';

            if(this.distance > 100 && typeof this.pullDownMethods == 'function') {

              this.pullDownText = this.v_pullDownConfig.loadingText;
              this.distance = .1;
              this.isLoading = true
              this.pullDownMethods();
              return

            } else if(this.distance < -100 && typeof this.pullUpMethods == 'function') {
              this.pullUpText = this.v_pullUpConfig.loadingText;
              this.distance = 0;
              this.isLoading = true
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
        // this.pullDownText = this.v_pullDownConfig.doneText;
        // this.pullUpText = this.v_pullUpConfig.doneText;
        this.isLoading = false;
        this.distance = 0;
      }
    },
    computed: {
      topBlock () {
        let tsY = this.distance > 0 ? this.distance / 2 : -80;
        return {
          marginTop: tsY + 'px'
        }
      },
      v_pullUpConfig: () => {
        return Object.assign({}, _pullUpConfig, this.pullUpConfig);
      },
      v_pullDownConfig: () => {
        return Object.assign({}, _pullDownConfig, this.pullDownConfig);
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
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>