<script>
  export default {
    name: 'im-action-sheet',
    render: function(_c) {
      return _c('div', {
        class: {
          'im-action-sheet': true
        },
        on: {
          click: (event) => {
            event.stopPropagation();
            this.closeActionSheet();
          }
        }
      },
      [
        _c('div', {
          class: {
            'im-action-sheet-box': true
          }
        },
        [
          this.opts.map((v, idx) => {
            return _c('div', {
              style: {
                color: v.color
              },
              class: {
                'im-action-sheet-box-item': true,
                'last-item': idx == this.opts.length - 1  // 这里添加一个判断，详细理由见下面的css注释
              },
              domProps: {
                innerHTML: v.txt
              },
              on: {
                click: (event) => {
                  event.stopPropagation();
                  this.closeActionSheet(v.cb());
                }
              }
            })
          }),
          (() => {
            if (this.hasCancel) {
              return _c('div', {
                style: {
                  
                },
                class: {
                  'cancel': true
                },
                domProps: {
                  innerHTML: '取消'
                },
                on: {
                  click: (event) => {
                    event.stopPropagation();
                    this.closeActionSheet();
                  }
                }
              })
            }
          })()
        ])
      ])
    },
    props: {
      hasCancel: {
        type: Boolean,
        default: false
      },
      styleFor: {
        type: String,
        default: 'ios',
        validator: function(value) {
          return ['ios', 'android'].indexOf(value) != -1
        }
      },
      opts: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import '../../less/base.less';
  @import '../../less/dialog.less';

  .@{prefixClass} {
    &-action-sheet {
      .mask();
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .ios {
        margin: 20px;
        border-radius: .12rem;
        color: #00bFFF;
        .cancel {
          margin-top: 12px;
          border-radius: .12rem;
        }
      }
      .ios .im-action-sheet-box-item:first-child {
        border-top-left-radius: .12rem;
        border-top-right-radius: .12rem;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
      }
      .last-item {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: .12rem;
        border-bottom-left-radius: .12rem;
      }
      /*下面这个类选择器没有效果，只好用上面的方法，然后上面的render方法也添加一个判断*/
      /*这个问题参考demo是在目录created-docs/nth-last-of-type.html，但是这里却显示错误，暂时不知道原因*/
      /*.ios .im-action-sheet-box-item:nth-last-of-type(1) {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: .2rem;
        border-bottom-left-radius: .2rem;
      }*/
      .android {
        color: #00bFFF;
        .cancel {
          border-top: .12rem solid #efefef;
        }
      }
      .cancel {
        background-color: #FFF;
        font-size: .37rem * @baseRem;
        padding: .27rem * @baseRem 0;
        border-top: 1px solid #ccc;
        width: 100%;
        text-align: center;
      }
      &-box {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        &-item {
          background-color: #FFF;
          font-size: .37rem * @baseRem;
          padding: .27rem * @baseRem 0;
          border-top: 1px solid #ccc;
          width: 100%;
          text-align: center;
        }
      }
    }
  }

  .action-sheet-fadeIn {
    animation: vuer-action-sheet-slide-in .3s cubic-bezier(.21, .75, .33, .79) 0s 1 forwards;
  }
  
  .action-sheet-fadeOut {
    animation: vuer-action-sheet-slide-out .2s cubic-bezier(.21, .75, .33, .79) 0s 1 forwards;
  }

</style>