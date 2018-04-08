<script>
  export default {
    name: 'confirm',
    render: function(_c) {
      return _c('div', {
        class: {
          'im-confirm': true
        },
        on: {
          click: (event) => {
            event.stopPropagation();
            this.closeConfirm();
          }
        }
      }, [
        _c('div', {

        }, [
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
          _c('div', {
            class: {
              btns: true
            }
          }, [
            this.opts.map((v) => {
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
                  click: (event) => {
                    event.stopPropagation();
                    this.closeConfirm(v.cb());
                  }
                }
              })
            }),
            (() => {
              if(this.opts.length == 2) {
                return _c('div', {
                  class: {
                    'btns-line': true
                  }
                })
              }
            })()
          ])
        ])
      ])
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
        validator: function(value) {
          return ['ios', 'android'].indexOf(value) != -1
        }
      },
      opts: {
        type: Array,
        default() {
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
  
  .box() {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: .08rem * @baseRem;
  }
  
  .title() {
    font-size: .37rem * @baseRem;
    font-weight: bold;
    color: #333;
  }
  
  .btns() {
    display: flex;
    margin-top: .3rem * @baseRem;
    position: relative;
  }
  
  .line() {
    position: absolute;
    width: 1px;
    height: 100%;
    background-color: #ccc;
  }
  
  .button() {
    font-size: .35rem * @baseRem;
    display: block;
    background-color: #FFF;
    border: none;
    outline: none;
  }
  
  .content() {
    font-size: .35rem * @baseRem;
    color: #5d5d5d;
    text-align: center;
  }
  
  .@{prefixClass} {
    &-confirm {
      .mask(rgba(0, 0, 0, .4), @base-zindex * 2000);
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
          padding: .3rem * @baseRem 0;
        }
        .content {
          padding: .1rem * @baseRem 1rem * @baseRem;
          .content();
        }
        .btns {
          .btns();
          justify-content: space-around;
          width: 100%;
          border-top: 1px solid #ccc;
          button {
            padding: .3rem * @baseRem .6rem * @baseRem;
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
          padding: .4rem * @baseRem 0;
          margin-left: .4rem * @baseRem;
        }
        .content {
          padding: 0 .5rem * @baseRem;
          margin: .3rem * @baseRem 0;
          .content();
        }
        .btns {
          .btns();
          justify-content: flex-end;
          width: 100%;
          padding: 0 .2rem * @baseRem;
          button {
            padding: .5rem * @baseRem .3rem * @baseRem;
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
    animation: vuer-confirm-fade-in .3s cubic-bezier(.21, .75, .33, .79) 0s 1 forwards;
  }
  
  .confirm-fadeOut {
    animation: vuer-confirm-fade-out .2s cubic-bezier(.21, .75, .33, .79) 0s 1 forwards;
  }
</style>