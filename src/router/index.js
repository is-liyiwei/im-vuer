import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/demo/Home.vue'
import Tab from '@/demo/Tab.vue'
import TimeLine from '@/demo/TimeLine.vue'
import Step from '@/demo/Step.vue'
import CountUp from '@/demo/CountUp.vue'
import Marquee from '@/demo/Marquee.vue'
import Rater from '@/demo/Rater.vue'
import Switch from '@/demo/Switch.vue'
import CheckBox from '@/demo/CheckBox.vue'
import Radio from '@/demo/Radio.vue'
import Progress from '@/demo/Progress.vue'
import IndexList from '@/demo/IndexList.vue'
import Picker from '@/demo/Picker.vue'
import Swiper from '@/demo/Swiper.vue'
import SwiperOut from '@/demo/SwiperOut.vue'
import DatePicker from '@/demo/DatePicker.vue'
import SwiperBox from '@/demo/SwiperBox.vue'
import Dialog from '@/demo/Dialog.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/tab',
      name: 'tab',
      component: Tab
    },{
      path: '/timeLine',
      name: 'timeLine',
      component: TimeLine
    },{
      path: '/step',
      name: 'step',
      component: Step
    },{
      path: '/marquee',
      name: 'marquee',
      component: Marquee
    },{
      path: '/countUp',
      name: 'countUp',
      component: CountUp
    },{
      path: '/rater',
      name: 'rater',
      component: Rater
    },{
      path: '/switch',
      name: 'switch',
      component: Switch
    },{
      path: '/checkBox',
      name: 'checkBox',
      component: CheckBox
    },{
      path: '/swiperOut',
      name: 'swiperOut',
      component: SwiperOut
    },{
      path: '/radio',
      name: 'radio',
      component: Radio
    },{
      path: '/swiper',
      name: 'swiper',
      component: Swiper
    },{
      path: '/progress',
      name: 'progress',
      component: Progress
    },{
      path: '/indexList',
      name: 'indexList',
      component: IndexList
    },{
      path: '/picker',
      name: 'picker',
      component: Picker
    },{
      path: '/datePicker',
      name: 'datePicker',
      component: DatePicker
    },{
      path: '/swiperBox',
      name: 'swiperBox',
      component: SwiperBox
    },{
      path: '/dialog',
      name: 'dialog',
      component: Dialog
    }
  ]
})
