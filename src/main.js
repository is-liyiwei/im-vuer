
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
import { CityPicker } from './components/CityPicker'
import { DatePicker } from './components/DatePicker'
import { PullRefresh } from './components/PullRefresh'
import { Picker, PickerItem } from './components/Picker'

Vue.component(`${Tab.name}`, Tab)
Vue.component(`${Step.name}`, Step)
Vue.component(`${CountUp.name}`, CountUp)
Vue.component(`${Marquee.name}`, Marquee)
Vue.component(`${Rater.name}`, Rater)
Vue.component(`${CheckBox.name}`, CheckBox)
Vue.component(`${SwiperOut.name}`, SwiperOut)
Vue.component(`${TimeLine.name}`, TimeLine)
Vue.component(`${TimeLineItem.name}`, TimeLineItem)
Vue.component(`${Radio.name}`, Radio)
Vue.component(`${RadioItem.name}`, RadioItem)
Vue.component(`${Swiper.name}`, Swiper)
Vue.component(`${SwiperItem.name}`, SwiperItem)
Vue.component(`${IndexList.name}`, IndexList)
Vue.component(`${CityPicker.name}`, CityPicker)
Vue.component(`${DatePicker.name}`, DatePicker)
Vue.component(`${PullRefresh.name}`, PullRefresh)
Vue.component(`${Picker.name}`, Picker)
Vue.component(`${PickerItem.name}`, PickerItem)


Vue.component(`${Progress.name}`, Progress)
Vue.component(`${Switch.name}`, Switch)


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
