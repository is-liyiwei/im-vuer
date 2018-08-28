<template>
  <div class="dialog-button">
    <h5>Confirm for ios ↓</h5>
    <button @click="openConfirm1('ios')">ios style 1</button>
    <button @click="openConfirm2('ios')">ios style 2</button>
    <button @click="openConfirm3('ios')">ios style 3</button>
    <button @click="openConfirm4('ios')">ios style 4</button>
    <h5>Confirm for android ↓</h5>
    <button @click="openConfirm1('android')">android style 1</button>
    <button @click="openConfirm2('android')">android style 2</button>
    <button @click="openConfirm3('android')">android style 3</button>
    <button @click="openConfirm4('android')">android style 4</button>
    <h5>Toast ↓</h5>
    <button @click="openToast1('top')">toast top</button>
    <button @click="openToast1('center')">toast center</button>
    <button @click="openToast1('bottom')">toast bottom</button>
    <h5>ActionSheet for ios ↓</h5>
    <button @click="openActionSheet1('ios')">ActionSheet of multiple</button>
    <button @click="openActionSheet2('ios')">ActionSheet of with cancel</button>
    <button @click="openActionSheet3('ios')">ActionSheet of default</button>
    <h5>ActionSheet for android ↓</h5>
    <button @click="openActionSheet1('android')">ActionSheet of multiple</button>
    <button @click="openActionSheet2('android')">ActionSheet of with cancel</button>
    <button @click="openActionSheet3('android')">ActionSheet of default</button>
    <h5>Tip ↓</h5>
    <button @click="openTip1('loading')">Tip of default</button>
    <button @click="openTip1('success')">Tip of success</button>
    <button @click="openTip1('warn')">Tip of warn</button>
    <button @click="openTip1('error')">Tip of error</button>
    <button @click="openTip2()">Tip of user template</button>
  </div>
</template>

<script>

let mixin = {
  methods: {
    setFlag () {
      this.flag = true
      setTimeout(() => {
        this.flag = false
      }, 1800)
    }
  }
}

export default {
  name: 'm-dialog',
  data () {
    return {
      flag: false
    }
  },
  mounted () {

  },
  mixins: [mixin],
  methods: {
    openConfirm1 (styleFor) {
      this.$confirm({
        title: '自定义标题',
        content: '总要在雨天逃避某段从前，但雨点偏偏促使这样遇见',
        styleFor: styleFor,
        opts: [{
          txt: '取消',
          color: '#f00',
          cb: () => {
            console.log(1)
          }
        }, {
          txt: '确定',
          color: '#00bFFF',
          cb: () => {
            console.log(2)
          }
        }],
        complete: () => {
          console.log('complete')
        }
      })
    },
    openConfirm2 (styleFor) {
      this.$confirm({
        title: '自定义标题',
        content: '总要在雨天逃避某段从前，但雨点偏偏促使这样遇见',
        styleFor: styleFor,
        opts: [{
          txt: '确定',
          color: '#f00',
          cb: () => {
            console.log(2)
          }
        }]
      })
    },
    openConfirm3 (styleFor) {
      this.$confirm({
        title: '自定义标题',
        content: '总要在雨天逃避某段从前，但雨点偏偏促使这样遇见',
        styleFor: styleFor,
        opts: [{
          txt: '取消',
          color: '#5d5d5d',
          cb: () => {
            console.log(1)
          }
        }, {
          txt: '确定',
          color: '#00bFFF',
          cb: () => {
            console.log(2)
          }
        }]
      })
    },
    openConfirm4 (styleFor) {
      // 默认是ios
      this.$confirm({
        styleFor: styleFor
      })
    },
    openToast1 (position) {
      if (this.flag) {
        return
      }
      this.setFlag()
      this.$toast({
        content: '登录成功',
        position: position,
        time: 1500
      })
    },
    openActionSheet1 (styleFor) {
      this.$actionSheet({
        styleFor,
        opts: [{
          txt: '回复',
          cb: () => {
            console.log(1)
          }
        }, {
          txt: '转发',
          color: '#f00',
          cb: () => {
            console.log(2)
          }
        }, {
          txt: '打印',
          color: '#009688',
          cb: () => {
            console.log(3)
          }
        }, {
          txt: '评论',
          color: '#673ab7',
          cb: () => {
            console.log(4)
          }
        }],
        hasCancel: true,
        complete: () => {
          console.log('actionSheet complete')
        }
      })
    },
    openActionSheet2 (styleFor) {
      this.$actionSheet({
        styleFor,
        opts: [{
          txt: '拍照',
          cb: () => {
            console.log(1)
          }
        }, {
          txt: '从本地选择',
          color: '#f00',
          cb: () => {
            console.log(2)
          }
        }],
        hasCancel: true
      })
    },
    openActionSheet3 (styleFor) {
      this.$actionSheet({
        styleFor,
        opts: [{
          txt: '默认是没有取消按钮',
          cb: () => {
            console.log(1)
          }
        }, {
          txt: '我是红色',
          color: '#f00',
          cb: () => {
            console.log(2)
          }
        }]
      })
    },
    openTip1 (iconStatus) {
      if (this.flag) {
        return
      }
      this.setFlag()
      this.$tip({
        txt: iconStatus,
        icon: iconStatus,
        time: 1800
      })
    },
    openTip2 () {
      if (this.flag) {
        return
      }
      this.setFlag()
      this.$tip({
        txt: '自定义',
        time: 1800,
        tpl: `
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 140 64" fill="#fff">
          <path 
          d="M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z">
            <animate attributeName="fill" 
            begin="0" 
            dur="2s" 
            values="red;yellow;#00bfff;#FFF;pink;" 
            calcMode="linear" 
            repeatCount="indefinite"/>
          </path>
        </svg>`
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dialog-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.dialog-button button {
  font-size: 32px;
  background-color: #00bfff;
  border: none;
  outline:none;
  text-align: center;
  display: block;
  width: 90%;
  margin: 1px 0;
  height: 80px;
  color: #fff;
  margin: 20px;
  border-radius: 10px;
}

h5 {
  margin: 10px;
  font-size: 30px;
  color: #3d3d3d;
}
</style>
