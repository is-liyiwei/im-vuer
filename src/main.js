
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import store from './vuex'


import { ConfirmPlugin } from './components/Confirm'
import { ToastPlugin } from './components/Toast'
import { ActionSheetPlugin } from './components/ActionSheet'
import { TipPlugin } from './components/Tip'

import './font_alibaba/iconfont.css'

import { Tab } from './components/Tab'
import { Step } from './components/Step'
import { CountUp } from './components/CountUp'
import { Marquee } from './components/Marquee'
import { Rater } from './components/Rater'
import { Switch } from './components/Switch'
import { CheckBox } from './components/CheckBox'
import { SwiperOut } from './components/SwiperOut'
import { Progress } from './components/Progress'
import { Radio, RadioItem } from './components/Radio'
import { TimeLine, TimeLineItem } from './components/TimeLine'
import { Swiper, SwiperItem } from './components/Swiper'
import { IndexList } from './components/IndexList'
import { Picker } from './components/Picker'
import { DatePicker } from './components/DatePicker'
import { PullRefresh } from './components/PullRefresh'
import { Layer } from './components/Layer'


const n = 'im-'

const _n = 'i'  // 用某些内置的html标签，Vue会发出警告，只能换个名字，但是内部还是用<im-xxx></im-xxx>

Vue.component(`${n}${Tab.name}`, Tab)
Vue.component(`${n}${Step.name}`, Step)
Vue.component(`${n}${CountUp.name}`, CountUp)
Vue.component(`${n}${Marquee.name}`, Marquee)
Vue.component(`${n}${Rater.name}`, Rater)
Vue.component(`${n}${CheckBox.name}`, CheckBox)
Vue.component(`${n}${SwiperOut.name}`, SwiperOut)
Vue.component(`${n}${TimeLine.name}`, TimeLine)
Vue.component(`${n}${TimeLineItem.name}`, TimeLineItem)
Vue.component(`${n}${Radio.name}`, Radio)
Vue.component(`${n}${RadioItem.name}`, RadioItem)
Vue.component(`${n}${Swiper.name}`, Swiper)
Vue.component(`${n}${SwiperItem.name}`, SwiperItem)
Vue.component(`${n}${IndexList.name}`, IndexList)
Vue.component(`${n}${Picker.name}`, Picker)
Vue.component(`${n}${DatePicker.name}`, DatePicker)
Vue.component(`${n}${PullRefresh.name}`, PullRefresh)
Vue.component(`${n}${Layer.name}`, Layer)


Vue.component(`${_n}${Progress.name}`, Progress)
Vue.component(`${_n}${Switch.name}`, Switch)


Vue.use(ConfirmPlugin);
Vue.use(ToastPlugin);
Vue.use(ActionSheetPlugin);
Vue.use(TipPlugin);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
