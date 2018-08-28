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

@circleHeight: 0.2px * @baseRem;
@circleWidth: 0.2px * @baseRem;

.@{prefixClass} {
  &-timeline {
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    &-box {
      font-size: .26px * @baseRem;
      margin: .3px * @baseRem 0 0 .2px * @baseRem;
      border-left: .01px * @baseRem solid #9c9c9c;
      &-item {
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #e1e1e3;
        margin: .3px * @baseRem 0 0 0;
        padding-bottom: .3px * @baseRem;
        line-height: .38px * @baseRem;
        margin-left: .3px * @baseRem;
        padding-top: 0;
        position: relative;
        &:first-child:after {
          content: '';
          height: @circleHeight;
          width: @circleWidth;
          border-radius: 50%;
          background-color: red;
          position: absolute;
          left: -0.1px * @baseRem;
          top: .05px * @baseRem;
          margin-left: -.3px * @baseRem;
          z-index: 999;
        }
        &:first-child:before {
          content: '';
          height: @circleHeight + 0.1px * @baseRem;
          width: @circleWidth + 0.1px * @baseRem;
          border-radius: 50%;
          background-color: red;
          opacity: 0.3;
          position: absolute;
          left: -.15px * @baseRem;
          margin-left: -.3px * @baseRem;
          z-index: 999;
        }
        &:after {
          content: '';
          height: @circleHeight - 0.06px * @baseRem;
          width: @circleWidth - 0.06px * @baseRem;
          border-radius: 50%;
          background-color: #cacaca;
          position: absolute;
          left: -0.08px * @baseRem;
          top: .13px * @baseRem;
          margin-left: -.3px * @baseRem;
          z-index: 999;
        }
        &:last-child:before {
          content: '';
          height: 85%;
          width: 0.07px * @baseRem;
          background-color: #FFF;
          position: absolute;
          left: -0.05px * @baseRem;
          bottom: -0.02px * @baseRem;
          margin-left: -.3px * @baseRem;
          z-index: 999;
        }
        &-text {
          margin: 0 0 .02px * @baseRem 0;
          color: #5d5d5d;
          font-size: .2px * @baseRem;
        }
        &-time {
          margin: .1px * @baseRem 0 .1px * @baseRem 0;
          color: #5d5d5d;
          font-size: .2px * @baseRem;
        }
      }
    }
  }
}
</style>
