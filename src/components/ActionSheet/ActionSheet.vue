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
          this.opts.map(v => {
            return _c('div', {
              style: {
                color: v.color
              },
              class: {
                'im-action-sheet-box-item': true
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
                  'im-action-sheet-box-item': true,
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

  .action-sheet() {

  }
  
  .@{prefixClass} {
    &-action-sheet {
      .mask();
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      &-box {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #FFF;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        &-item {
          font-size: .37rem * @baseRem;
          padding: .27rem * @baseRem 0;
          border-top: 1px solid #ccc;
          width: 100%;
          text-align: center;
          &.cancel {
            border-top: 12px solid #efefef;
          }
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