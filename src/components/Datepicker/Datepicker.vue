<template>
  <div class="im-date-picker" v-if="value" @click.stop="cancel">

		<div class="im-date-picker-box">

  		<div class="im-date-picker-box-value" :style="{ backgroundColor: headerColor}">
        <span :class="{ 'im-txt-in': setAnimate }">{{todayText}}</span>
      </div>

  		<div class="im-date-picker-box-ctrl">
  			<svg viewBox="0 0 24 24" class="im-date-picker-box-ctrl-prev arrow" @click.stop="_prev">
  				<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
  			</svg>
  			<div class="im-date-picker-box-ctrl-date">{{oHeadDate}}</div>
  			<svg viewBox="0 0 24 24" class="im-date-picker-box-ctrl-next arrow" @click.stop="_next">
  				<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
  			</svg>
  		</div>

      <table class="im-date-picker-box-title">
        <tr>
          <th>日</th>
          <th>一</th>
          <th>二</th>
          <th>三</th>
          <th>四</th>
          <th>五</th>
          <th>六</th>
        </tr>
        <tr class="im-date-picker-box-content" v-for="(v, k) in allDate">
          <td 
          v-for="(vv, kk) in v" 
          :style="currentItem == (7 * k + kk) ? currentDate : vv.disabled ? '' : currentDateNot " 
          :class="[vv.disabled ? 'im-out' : 'im-in', 'im-date-picker-box-content-item']"
          @click.stop="tapItem(7 * k + kk)">{{vv.date}}</td>
        </tr>
      </table>

  		<div class="im-date-picker-box-btns">
  			<div class="im-date-picker-box-btns-item" :style="{ color: cancelBtn }" @click.stop="cancel">取消</div>
  			<div class="im-date-picker-box-btns-item" :style="{ color: confirmBtn }" @click.stop="confirm">确定</div>
  		</div>
      
    </div>

  </div>
</template>

<script>
export default {
  name: 'im-date-picker',
  data () {
    return {
      now: {
				year: new Date().getFullYear(),
				month: new Date().getMonth(),
				date: new Date().getDate()
      },
      oHeadDate: null,
      prevDate: [],
      nowDate: [],
      nextDate: [],
      allDate: [],
      todayText: null,
      weekArr: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
      weekArrIndex: 0,
      currentItem: null,
      setAnimate: false
    }
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    headerColor: {
      type: String,
      default: '#00bfff'
    },
    itemColor: {
      type: String,
      default: '#00bfff'
    },
    cancelBtn: {
      type: String,
      default: '#000000'
    },
    confirmBtn: {
      type: String,
      default: '#00bfff'
    }
  },
  created: function () {
    this._fillDate(this.now.year, this.now.month);
  },
  mounted () {
    this.$emit('confirm', this.todayText)
  },
  methods: {
  	_fillDate (year, month) {
      let first_day = new Date(year, month, 1).getDay() == 0 ? 7 : new Date(year, month, 1).getDay();
      let final_date = new Date(year, month + 1, 0).getDate();
      let last_date = new Date(year, month, 0).getDate();
      let surplus = 42 - first_day - final_date;
      this.oHeadDate = year + '年' + (month + 1) + '月';
      for (let i = 0; i < first_day; i++) {
        this.prevDate.push({
          date: (last_date - (first_day - 1) + i),
          disabled: true
        });
      }
      for (let j = 0; j < final_date; j++) {
        this.nowDate.push({
          date: (j + 1),
          disabled: false
        });
      }
      for (let k = 0; k < surplus; k++) {
        this.nextDate.push({
          date: (k + 1),
          disabled: true
        });
      }

      this.allDate = [];

      Array.prototype.push.apply(this.allDate, [...this.prevDate, ...this.nowDate, ...this.nextDate]);

      function sliceArray(array, size) {
          let result = [];
          let x = 0;
          let len = array.length
          for (; x < Math.ceil(len / size); x++) {
              let start = x * size;
              let end = start + size;
              result.push(array.slice(start, end));
          }
          return result;
      }

      this.allDate = sliceArray(this.allDate, 7);

      if (year == new Date().getFullYear() && month == new Date().getMonth()) {
        this.currentItem = first_day + new Date().getDate() - 1;
        this._setWeek(this.currentItem);
      }
  	},
		_next () {
      this.now.month++;
      if (this.now.month > 11) {
        this.now.month = 0;
        this.now.year++;
      }
      this._reset();
      this._fillDate(this.now.year, this.now.month);
      this.tapItem(1, true);
		},
		_prev () {
      this.now.month--;
      if (this.now.month < 0) {
        this.now.month = 11;
        this.now.year--;
      }
      this._reset();
      this._fillDate(this.now.year, this.now.month);
      this.tapItem(1, true);
		},
		_nextYear () {

		},
		_prevYear () {

		},
    _reset () {
      this.prevDate = [];
      this.nowDate = [];
      this.nextDate = [];
    },
    _setWeek (k, tapArrow = false) {

      let str = '';

      this.setAnimate = true;

      this.weekArrIndex = k;
      
      if (tapArrow) {
        str = k + '日';
        this.todayText = this.oHeadDate + str + this.weekArr[~~this.prevDate.length % 7];
      } else {
        this.weekArrIndex = k - this.prevDate.length;
        str = (this.weekArrIndex + 1) + '日';
        this.todayText = this.oHeadDate + str + this.weekArr[~~k % 7];
      }

      setTimeout( () => {
        this.setAnimate = false;
      }, 300)

    },
    tapItem (targetIndex, tapArrow = false) {

      if (tapArrow) {
        this.currentItem = tapArrow ? (targetIndex + this.prevDate.length - 1) : targetIndex;
        this._setWeek(targetIndex, tapArrow);
      } else {
        if (targetIndex < this.prevDate.length || targetIndex > this.prevDate.length + this.nowDate.length - 1) {
          return
        }
        this.currentItem = tapArrow ? (targetIndex + this.prevDate.length - 1) : targetIndex;
        this._setWeek(targetIndex, tapArrow);
      }

    },
    cancel () {
      this.$emit('input', false);
    },
    confirm () {
      this.$emit('confirm', this.todayText);
      this.$emit('input', false);
    }
  },
  computed: {
    currentDate () {
      return {
        backgroundColor: this.itemColor,
        color: '#FFF',
        borderRadius: '50%'
      }
    },
    currentDateNot () {
      return {
        color: this.itemColor
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../../less/base.less';

@keyframes vuer-txt-in {
    0% {
      opacity: 0;
    }
  }

.@{prefixClass} {
  &-date-picker {
    .mask();
    animation: vuer-txt-in 100ms linear 0s 1 forwards;
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    &-box {
    	position: fixed;
    	top: 50%;
    	left: 50%;
    	width: 6rem * @baseRem;
    	height: 9.5rem * @baseRem;
    	transform: translate3d(-50%, -50%, 0);
    	-webkit-transform: translate3d(-50%, -50%, 0);
      display: flex;
    	flex-direction: column;
    	align-items: center;
    	box-shadow: 1px 19px 60px rgba(0,0,0,.3), 2px 15px 20px rgba(0,0,0,.2);
      z-index: 1501;
      background-color: #FFF;
    	&-value {
    		padding: .6rem * @baseRem .2rem * @baseRem;
    		width: 100%;
    		font-size: .4rem * @baseRem;
    		font-weight: bold;
    		color: #FFF;
        letter-spacing: .07rem * @baseRem;
    	}
    	&-ctrl {
    		display: flex;
    		font-size: .3rem * @baseRem;
    		justify-content: space-between;
    		align-items: center;
    		width: 100%;
    		padding: .3rem * @baseRem .5rem * @baseRem;
    		&-date {
    			padding: 0 .2rem * @baseRem;
          letter-spacing: .04rem * @baseRem;
    		}
    		.arrow {
    			width: .4rem * @baseRem;
    			height: .4rem * @baseRem;
    		}
    	}
    	&-title {
        font-size: .3rem * @baseRem;
        width: 100%;
        padding: .2rem * @baseRem;
        text-align: center;
        color: #333;
    	}
    	&-content {
    		text-align: center;
        font-size: .3rem * @baseRem;
    		&-item {
    			padding: .2rem * @baseRem 0;
    		}
    	}
    	&-btns {
    		width: 100%;
    		padding: .3rem * @baseRem;
    		display: flex;
    		justify-content: flex-end;
    		font-size: .3rem * @baseRem;
    		&-item {
    			padding: .2rem * @baseRem;
    		}
    	}
    }
  }
}

.im-txt-in {
  animation: vuer-txt-in 300ms ease-in 0s 1 forwards;
}

.im-in {
  color: @base-color;
}

.im-out {
  color: #5d5d5d;
}

</style>
