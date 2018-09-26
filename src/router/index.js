import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

Router.prototype.goBack = function () {
  this.isBack = false
  window.history.go(-1)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/demo/Home')
    }, {
      path: '/tab',
      name: 'Tab',
      component: () => import('@/demo/Tab')
    }, {
      path: '/rater',
      name: 'Rater',
      component: () => import('@/demo/Rater')
    }, {
      path: '/radio',
      name: 'Radio',
      component: () => import('@/demo/Radio')
    }, {
      path: '/checkBox',
      name: 'CheckBox',
      component: () => import('@/demo/CheckBox')
    }, {
      path: '/step',
      name: 'Step',
      component: () => import('@/demo/Step')
    }, {
      path: '/switch',
      name: 'Switch',
      component: () => import('@/demo/Switch')
    }, {
      path: '/swiper',
      name: 'Swiper',
      component: () => import('@/demo/Swiper')
    }, {
      path: '/timeLine',
      name: 'TimeLine',
      component: () => import('@/demo/TimeLine')
    }, {
      path: '/dialog',
      name: 'Dialog',
      component: () => import('@/demo/Dialog')
    }, {
      path: '/IndexList',
      name: 'IndexList',
      component: () => import('@/demo/IndexList')
    }, {
      path: '/marquee',
      name: 'Marquee',
      component: () => import('@/demo/Marquee')
    }, {
      path: '/progress',
      name: 'Progress',
      component: () => import('@/demo/Progress')
    }, {
      path: '/swiperout',
      name: 'Swiperout',
      component: () => import('@/demo/Swiperout')
    }, {
      path: '/picker',
      name: 'Picker',
      component: () => import('@/demo/Picker')
    }, {
      path: '/swiperBox',
      name: 'SwiperBox',
      component: () => import('@/demo/SwiperBox')
    }, {
      path: '/countUp',
      name: 'CountUp',
      component: () => import('@/demo/CountUp')
    }, {
      path: '/cityPicker',
      name: 'CityPicker',
      component: () => import('@/demo/CityPicker')
    }, {
      path: '/datepicker',
      name: 'Datepicker',
      component: () => import('@/demo/Datepicker')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    // 这里使用了模拟webview的div所以这个变得有点问题了，不准确
    if (savedPosition) {
      // return savedPosition
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(savedPosition)
        }, 100)
      })
    } else {
      return { x: 0, y: 0 }
    }
  }
})
