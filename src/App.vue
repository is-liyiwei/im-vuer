<template>
  <div style="height: 100%;">
    <div class="header">
      <span class="back-icon" @click="backPage">&lt;</span>
      <span>{{title}}</span>
      <span></span>
    </div>
    <transition :name="transitionName">
      <router-view class="rt-view"></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName: 'slide-right'
    }
  },
  computed: {
    title () {
      return this.$route.name
    }
  },
  methods: {
    backPage () {
      if (this.$route.path === '/') {
        return
      }
      this.$router.back()
    }
  },
  watch: {
    '$route' (to, from) {
      let isBack = this.$router.isBack
      if (isBack) {
        this.transitionName = 'slide-left'
        this.$router.isBack = false
      } else {
        this.transitionName = 'slide-right'
        this.$router.isBack = true
      }
    }
  }
}
</script>
<style lang="less">

.header {
  height: 80px;
  background-color: rgb(0, 191, 255);
  color: #FFF;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 42px;
  padding: 10px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  span {
    flex: 1;
    text-align: center;
  }
  .back-icon {
    font-size: 48px;
  }
}

*{
  -webkit-tap-highlight-color:transparent;
}

.rt-view {
  position: absolute;
  width: 100%;
  transition: all .3s cubic-bezier(.55,0,.1,1);
  margin-top: 100px;
}

.slide-left-enter, .slide-right-leave-active {
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.slide-left-leave-active, .slide-right-enter {
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}

</style>
