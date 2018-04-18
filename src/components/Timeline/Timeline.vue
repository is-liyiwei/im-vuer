<template>
  <div class="im-timeline">
    <div class="im-timeline-box">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'im-timeline',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import '../../less/base.less';

@circleHeight: 0.2rem * @baseRem;
@circleWidth: 0.2rem * @baseRem;

.@{prefixClass} {
  &-timeline {
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    &-box {
      font-size: .26rem * @baseRem;
      margin: .3rem * @baseRem 0 0 .2rem * @baseRem;
      border-left: 1px solid #9c9c9c;
      &-item {
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #e1e1e3;
        margin: .3rem * @baseRem 0 0 0;
        padding-bottom: .3rem * @baseRem;
        line-height: .38rem * @baseRem;
        margin-left: .3rem * @baseRem;
        padding-top: 0;
        position: relative;
        &:first-child:after {
          content: '';
          height: @circleHeight;
          width: @circleWidth;
          border-radius: 50%;
          background-color: red;
          position: absolute;
          left: -0.1rem * @baseRem;
          top: .05rem * @baseRem;
          margin-left: -.3rem * @baseRem;
          z-index: 999;
        }
        &:first-child:before {
          content: '';
          height: @circleHeight + 0.1rem * @baseRem;
          width: @circleWidth + 0.1rem * @baseRem;
          border-radius: 50%;
          background-color: red;
          opacity: 0.3;
          position: absolute;
          left: -.15rem * @baseRem;
          margin-left: -.3rem * @baseRem;
          z-index: 999;
        }
        &:after {
          content: '';
          height: @circleHeight - 0.06rem * @baseRem;
          width: @circleWidth - 0.06rem * @baseRem;
          border-radius: 50%;
          background-color: #cacaca;
          position: absolute;
          left: -0.08rem * @baseRem;
          top: .13rem * @baseRem;
          margin-left: -.3rem * @baseRem;
          z-index: 999;
        }
        &:last-child:before {
          content: '';
          height: 85%;
          width: 0.05rem * @baseRem;
          background-color: #FFF;
          position: absolute;
          left: -0.05rem * @baseRem;
          bottom: -0.02rem * @baseRem;
          margin-left: -.3rem * @baseRem;
          z-index: 999;
        }
        &-text {
          margin: 0 0 .02rem * @baseRem 0;
          color: #5d5d5d;
          font-size: .2rem * @baseRem;
        }
        &-time {
          margin: .1rem * @baseRem 0 .1rem * @baseRem 0;
          color: #5d5d5d;
          font-size: .2rem * @baseRem;
        }
      }
    }
  }
}
</style>
