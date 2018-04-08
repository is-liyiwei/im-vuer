<script>

  let _makeHtml = function (icon) {
    if (icon != 'loading') {
      return `<i class="iconfont icon-${icon}"></i>`
    } else {
      return '<svg width="96" viewBox="0 0 64 64" class="spinner" style="fill: rgb(255, 255, 255); stroke: rgb(255, 255, 255);"><g stroke-width="4" stroke-linecap="round"><line y1="17" y2="29" transform="translate(32,32) rotate(180)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(210)"><animate attributeName="stroke-opacity" dur="750ms" values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(240)"><animate attributeName="stroke-opacity" dur="750ms" values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(270)"><animate attributeName="stroke-opacity" dur="750ms" values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(300)"><animate attributeName="stroke-opacity" dur="750ms" values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(330)"><animate attributeName="stroke-opacity" dur="750ms" values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(0)"><animate attributeName="stroke-opacity" dur="750ms" values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(30)"><animate attributeName="stroke-opacity" dur="750ms" values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(60)"><animate attributeName="stroke-opacity" dur="750ms" values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(90)"><animate attributeName="stroke-opacity" dur="750ms" values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(120)"><animate attributeName="stroke-opacity" dur="750ms" values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85" repeatCount="indefinite"></animate></line><line y1="17" y2="29" transform="translate(32,32) rotate(150)"><animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1" repeatCount="indefinite"></animate></line></g></svg>'
    }
  }

  export default {
    name: 'tip',
    render: function(_c) {
      return _c('div', {
        class: {
          'im-tip': true
        }
      },
      [
        _c('div', {
          class: {
            'im-tip-box': true
          }
        },
        [
          _c('div', {
            class: {
              'im-tip-box-icon': true
            }
          },
          [
            ( () => {
              if (this.tpl) {
                return _c('div', {
                  domProps: {
                    innerHTML: this.tpl
                  }
                })
              } else {
                if (this.icon != 'loading') {
                  return _c('div', {
                    domProps: {
                      innerHTML: _makeHtml(this.icon)
                    }
                  })
                } else {
                  return _c('div', {
                    domProps: {
                      innerHTML: _makeHtml(this.icon)
                    }
                  })
                }
              }
            })(),
            ( () => {
              if (this.txt) {
                return _c('div', {
                  class: {
                    'im-tip-box-txt': true
                  },
                  domProps: {
                    innerHTML: this.txt
                  }
                })
              }
            })()
          ])
        ])
      ])
    },
    props: {
      txt: {
        type: String,
        default: 'hello world'
      },
      icon: {
        type: String,
        default: 'loading'
      },
      tpl: {
        type: String
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import '../../less/base.less';
  @import '../../less/dialog.less';

  .@{prefixClass} {
    &-tip {
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      &-box {
        position: fixed;
        top: 49%;
        left: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        -webkit-transform: translate3d(-50%, -50%, 0);
        transform: translate3d(-50%, -50%, 0);
        font-size: .7rem * @baseRem;
        width: 2.6rem * @baseRem;
        height: 2.7rem * @baseRem;
        background-color: rgba(0, 0, 0, .6);
        border-radius: .15rem * @baseRem;
        &-txt {
          color: #FFF;
          font-size: .5rem * @baseRem;
          margin: .15rem * @baseRem 0 0 0;
          letter-spacing: 2px;
        }
        &-icon {
          color: #FFF;
          position: relative;
          width: 100%;
          text-align: center;
        }
      }
    }
  }

  .tip-fadeIn {
    animation: vuer-tip_toast-fade-in .3s cubic-bezier(.21, .75, .33, .79) 0s 1 forwards;
  }
  
  .tip-fadeOut {
    animation: vuer-tip_toast-fade-out .2s cubic-bezier(.21, .75, .33, .79) 0s 1 forwards;
  }
</style>