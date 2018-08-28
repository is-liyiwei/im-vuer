<script>
export default {
  name: 'im-toast',
  render: function (_c) {
    return _c('div', {
      class: {
        'im-toast': true,
        'toast-fadeIn': true,
        top: this.position === 'top',
        bottom: this.position === 'bottom',
        center: this.position === 'center'
      },
      domProps: {
        innerHTML: this.content
      }
    })
  },
  props: {
    content: {
      type: String,
      default: 'hello world'
    },
    position: {
      type: String,
      default: 'bottom'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "../../less/base.less";
@import "../../less/dialog.less";

.toast() {
  color: #fff;
  padding: 0 0.4px * @baseRem;
  left: 50%;
  -webkit-transform: translate3d(-50%, 0, 0);
  transform: translate3d(-50%, 0, 0);
  font-size: 0.3px * @baseRem;
  border-radius: 0.08px * @baseRem;
}

.@{prefixClass} {
  &-toast {
    position: fixed;
    height: 0.9px * @baseRem;
    letter-spacing: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.7);
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    &.top {
      font-size: 0.3px * @baseRem;
      color: #fff;
      top: 0;
      width: 100%;
      z-index: 9993;
      animation: vuer-toast-slide-in 0.3s cubic-bezier(0.21, 0.75, 0.33, 0.79)
        0s 1 forwards;
    }
    &.bottom {
      .toast();
      bottom: 10%;
      max-width: 50%;
      z-index: 9993;
      /*animation: vuer-toast-fade-in .3s cubic-bezier(.21, .75, .33, .79) 0s 1 forwards;*/
    }
    &.center {
      .toast();
      top: 50%;
      width: 70%;
      z-index: 9993;
      /*animation: vuer-toast-fade-in .3s cubic-bezier(.21, .75, .33, .79) 0s 1 forwards;*/
    }
  }
}

.toast-fadeIn {
  animation: vuer-tip_toast-fade-in 0.3s cubic-bezier(0.21, 0.75, 0.33, 0.79) 0s 1 forwards;
}

.toast-fadeOut {
  animation: vuer-tip_toast-fade-out 0.2s cubic-bezier(0.21, 0.75, 0.33, 0.79) 0s 1 forwards;
}
</style>
