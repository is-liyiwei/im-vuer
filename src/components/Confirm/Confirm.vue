<script>
export default {
  name: 'im-confirm',
  render: function (_c) {
    return _c(
      'div',
      {
        class: {
          'im-confirm': true
        },
        on: {
          click: event => {
            event.stopPropagation()
            this.closeConfirm()
          }
        }
      },
      [
        _c('div', {}, [
          _c('div', {
            class: {
              title: true
            },
            domProps: {
              innerHTML: this.title
            }
          }),
          _c('div', {
            class: {
              content: true
            },
            domProps: {
              innerHTML: this.content
            }
          }),
          _c(
            'div',
            {
              class: {
                btns: true
              }
            },
            [
              this.opts.map(v => {
                return _c('button', {
                  style: {
                    color: v.color
                  },
                  class: {
                    'btns-item': true
                  },
                  domProps: {
                    innerHTML: v.txt
                  },
                  on: {
                    click: event => {
                      event.stopPropagation()
                      this.closeConfirm(v.cb)
                    }
                  }
                })
              }),
              (() => {
                if (+this.opts.length === 2) {
                  return _c('div', {
                    class: {
                      'btns-line': true
                    }
                  })
                }
              })()
            ]
          )
        ])
      ]
    )
  },
  props: {
    title: {
      type: String,
      default: '标题'
    },
    content: {
      type: String,
      default: '这是一段提示'
    },
    styleFor: {
      type: String,
      default: 'ios',
      validator: function (value) {
        return +['ios', 'android'].indexOf(value) !== -1
      }
    },
    opts: {
      type: Array,
      default () {
        return []
      }
    },
    complete: {
      type: Function,
      default: () => {

      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../less/base.less";
@import "../../less/dialog.less";

.@{prefixClass} {
  &-confirm {
    .mask(rgba(0, 0, 0, 0.4), @base-zindex * 2000);
    .box() {
      display: flex;
      flex-direction: column;
      background-color: #fff;
      border-radius: 0.08px * @baseRem;
    }

    .title() {
      font-size: 0.37px * @baseRem;
      font-weight: bold;
      color: #333;
    }

    .btns() {
      display: flex;
      margin-top: 0.3px * @baseRem;
      position: relative;
    }

    .line() {
      position: absolute;
      width: 1px;
      height: 100%;
      background-color: #ccc;
    }

    .button() {
      font-size: 0.35px * @baseRem;
      display: block;
      background-color: #fff;
      border: none;
      outline: none;
    }

    .content() {
      font-size: 0.35px * @baseRem;
      color: #5d5d5d;
      text-align: center;
    }
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    &-box-ios {
      justify-content: center;
      align-items: center;
      width: 90%;
      .box();
      .title {
        .title();
        padding: 0.3px * @baseRem 0;
      }
      .content {
        padding: 0.1px * @baseRem 1px * @baseRem;
        .content();
      }
      .btns {
        .btns();
        justify-content: space-around;
        width: 100%;
        border-top: 1px solid #ccc;
        button {
          padding: 0.2px * @baseRem 0.6px * @baseRem;
          margin: 0.1px * @baseRem 0;
          font-weight: bold;
          .button();
        }
        &-line {
          .line();
        }
      }
    }
    &-box-android {
      width: 80%;
      .box();
      .title {
        .title();
        padding: 0.4px * @baseRem 0;
        margin-left: 0.4px * @baseRem;
      }
      .content {
        padding: 0 0.5px * @baseRem;
        margin: 0.3px * @baseRem 0;
        .content();
      }
      .btns {
        .btns();
        justify-content: flex-end;
        width: 100%;
        padding: 0 0.2px * @baseRem;
        button {
          padding: 0.5px * @baseRem 0.3px * @baseRem;
          .button();
        }
        &-line {
          .line();
          display: none;
        }
      }
    }
  }
}

.confirm-fadeIn {
  animation: vuer-confirm-fade-in 0.3s cubic-bezier(0.21, 0.75, 0.33, 0.79) 0s 1 forwards;
}

.confirm-fadeOut {
  animation: vuer-confirm-fade-out 0.2s cubic-bezier(0.21, 0.75, 0.33, 0.79) 0s 1 forwards;
}
</style>
