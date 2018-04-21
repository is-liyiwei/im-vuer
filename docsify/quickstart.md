## 开始

> 安装

```shell
npm install im-vuer -S
```

> 在src目录下的 `index.html` 引入rem布局js

```js
<script>!function(e){function t(a){if(i[a])return i[a].exports;var n=i[a]={exports:{},id:a,loaded:!1};return e[a].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=window;t["default"]=i.flex=function(normal,e,t){var a=e||100,n=t||1,r=i.document,o=navigator.userAgent,d=o.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),l=o.match(/U3\/((\d+|\.){5,})/i),c=l&&parseInt(l[1].split(".").join(""),10)>=80,p=navigator.appVersion.match(/(iphone|ipad|ipod)/gi),s=i.devicePixelRatio||1;p||d&&d[1]>534||c||(s=1);var u=normal?1:1/s,m=r.querySelector('meta[name="viewport"]');m||(m=r.createElement("meta"),m.setAttribute("name","viewport"),r.head.appendChild(m)),m.setAttribute("content","width=device-width,user-scalable=no,initial-scale="+u+",maximum-scale="+u+",minimum-scale="+u),r.documentElement.style.fontSize=normal?"50px": a/2*s*n+"px"},e.exports=t["default"]}]); flex(false,100, 1);</script>
```

## 项目中使用

> `main.js`

```js
import { ConfirmPlugin } from 'im-vuer'
import { ToastPlugin } from 'im-vuer'
import { ActionSheetPlugin } from 'im-vuer'
import { TipPlugin } from 'im-vuer'

import { Tab } from 'im-vuer'
import { Step } from 'im-vuer'
import { CountUp } from 'im-vuer'
import { Marquee } from 'im-vuer'
import { Rater } from 'im-vuer'
import { Switch } from 'im-vuer'
import { CheckBox, CheckBoxItem } from 'im-vuer'
import { SwiperOut } from 'im-vuer'
import { Progress } from 'im-vuer'
import { Radio, RadioItem } from 'im-vuer'
import { TimeLine, TimeLineItem } from 'im-vuer'
import { Swiper, SwiperItem } from 'im-vuer'
import { IndexList } from 'im-vuer'
import { CityPicker } from 'im-vuer'
import { DatePicker } from 'im-vuer'
import { PullRefresh } from 'im-vuer'
import { Picker, PickerItem } from 'im-vuer'

import 'im-vuer/dist/im-vuer.css'

Vue.component(`${Tab.name}`, Tab)
Vue.component(`${Step.name}`, Step)
Vue.component(`${CountUp.name}`, CountUp)
Vue.component(`${Marquee.name}`, Marquee)
Vue.component(`${Rater.name}`, Rater)
Vue.component(`${CheckBox.name}`, CheckBox)
Vue.component(`${CheckBoxItem.name}`, CheckBoxItem)
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
```

## 单文件项目中使用

> `index.html`

参考dist目录下的index.html文件

[https://github.com/is-liyiwei/im-vuer/blob/master/dist/index.html](https://github.com/is-liyiwei/im-vuer/blob/master/dist/index.html)