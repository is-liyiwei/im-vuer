## Quick Start

### Install
```shell
npm install im-vuer -S
```

### Import in your project

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

> In `*.vue`

```js

```