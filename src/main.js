// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'lib-flexible/flexible'

import 'normalize.css'

import './font_alibaba/iconfont.css'

// import './font_alibaba_demo/iconfont.css'

import { ConfirmPlugin } from './components/Confirm'
import { ToastPlugin } from './components/Toast'
import { ActionSheetPlugin } from './components/ActionSheet'
import { TipPlugin } from './components/Tip'
import { PreviewImagePlugin } from './components/PreviewImage'

import { Tab } from './components/Tab'
import { Rater } from './components/Rater'
import { Radio, RadioItem } from './components/Radio'
import { CheckBox, CheckBoxItem } from './components/CheckBox'
import { TimeLine, TimeLineItem } from './components/TimeLine'
import { Swiper, SwiperItem } from './components/Swiper'
import { Step } from './components/Step'
import { Switch } from './components/Switch'
import { Marquee } from './components/Marquee'
import { IndexList } from './components/IndexList'
import { Progress } from './components/Progress'
import { SwiperOut } from './components/SwiperOut'
import { Picker, PickerItem } from './components/Picker'
import { CountUp } from './components/CountUp'
import { CityPicker } from './components/CityPicker'
import { DatePicker } from './components/DatePicker'

Vue.component(`${Tab.name}`, Tab)
Vue.component(`${Rater.name}`, Rater)
Vue.component(`${Radio.name}`, Radio)
Vue.component(`${RadioItem.name}`, RadioItem)
Vue.component(`${CheckBox.name}`, CheckBox)
Vue.component(`${CheckBoxItem.name}`, CheckBoxItem)
Vue.component(`${Swiper.name}`, Swiper)
Vue.component(`${SwiperItem.name}`, SwiperItem)
Vue.component(`${Step.name}`, Step)
Vue.component(`${TimeLine.name}`, TimeLine)
Vue.component(`${TimeLineItem.name}`, TimeLineItem)
Vue.component(`${Switch.name}`, Switch)
Vue.component(`${Marquee.name}`, Marquee)
Vue.component(`${IndexList.name}`, IndexList)
Vue.component(`${Progress.name}`, Progress)
// Vue.component(`${PreviewImage.name}`, PreviewImage)
Vue.component(`${SwiperOut.name}`, SwiperOut)
Vue.component(`${Picker.name}`, Picker)
Vue.component(`${PickerItem.name}`, PickerItem)
Vue.component(`${CountUp.name}`, CountUp)
Vue.component(`${CityPicker.name}`, CityPicker)
Vue.component(`${DatePicker.name}`, DatePicker)

Vue.use(ConfirmPlugin)
Vue.use(ToastPlugin)
Vue.use(ActionSheetPlugin)
Vue.use(TipPlugin)
Vue.use(PreviewImagePlugin)

Vue.config.productionTip = false

console.log('demo version：' + require('../package.json').version)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
