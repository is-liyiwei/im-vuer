<template>
  <div class="im-date-picker">

		<div class="im-date-picker-box">

		<div class="im-date-picker-box-value">{{todayText}}</div>

		<div class="im-date-picker-box-ctrl">
			<svg viewBox="0 0 24 24" class="im-date-picker-box-ctrl-prev arrow" @click="_prev">
				<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
			</svg>
			<div class="im-date-picker-box-ctrl-date">{{oHeadDate}}</div>
			<svg viewBox="0 0 24 24" class="im-date-picker-box-ctrl-next arrow" @click="_next">
				<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
			</svg>
		</div>

		<div class="im-date-picker-box-title">
			<span>日</span>
			<span>一</span>
			<span>二</span>
			<span>三</span>
			<span>四</span>
			<span>五</span>
			<span>六</span>
		</div>

		<div class="im-date-picker-box-content">

			<span class="im-date-picker-box-content-item prev" v-for="v in prevDate">{{v}}</span>

			<span 
      :style="today == (k + prevDate.length) ? currentDate : ''" 
      class="im-date-picker-box-content-item now" 
      v-for="(v, k) in nowDate"
      @click="tapItem(k + prevDate.length)">{{v}}</span>
      
      <span class="im-date-picker-box-content-item next" v-for="v in nextDate">{{v}}</span>

		</div>

		<div class="im-date-picker-box-btns">
			<div class="im-date-picker-box-btns-item" style="color: #000;" @click="cancel">取消</div>
			<div class="im-date-picker-box-btns-item" style="color: #00bfff" @click="confirm">确定</div>
		</div>

	</div>

  </div>
</template>

<script>
export default {
  name: 'date-picker',
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
      today: null,
      todayText: null,
      weekArr: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  created: function () {
    this._fillDate(this.now.year, this.now.month);
  },
  mounted () {
    this.$emit('input', this.todayText)
  },
  methods: {
  	_fillDate (year, month) {
      let first_day = new Date(year, month, 1).getDay();
      first_day = first_day == 0 ? 7 : first_day;
      let final_date = new Date(year, month + 1, 0).getDate();
      let last_date = new Date(year, month, 0).getDate();
      let surplus = 42 - first_day - final_date;
      this.oHeadDate = year + '年' + (month + 1) + '月';
      for (let i = 0; i < first_day; i++) {
          this.prevDate.push((last_date - (first_day - 1) + i));
      }
      for (let j = 0; j < final_date; j++) {
        this.nowDate.push((j + 1));
      }
      for (let k = 0; k < surplus; k++) {
        this.nextDate.push((k + 1));
      }
      if (year == new Date().getFullYear() && month == new Date().getMonth()) {
          this.today = first_day + new Date().getDate() - 1;
          this._setWeek(this.today);
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
		},
		_prev () {
      this.now.month--;
      if (this.now.month < 0) {
        this.now.month = 11;
        this.now.year--;
      }
      this._reset();
      this._fillDate(this.now.year, this.now.month);
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
    _setWeek (k) {
      let str = k + '日'
      while (k > 7) {
        k = k % 7;
      }
      this.todayText = this.oHeadDate + str + this.weekArr[~~k];
    },
    tapItem (k) {
      this.today = k;
      this._setWeek(k);
      console.log(k)
    },
    cancel () {

    },
    confirm () {
      this.$emit('input', this.todayText);
    }
  },
  computed: {
    currentDate () {
      return {
        backgroundColor: '#00bfff',
        color: '#FFF',
        borderRadius: '50%'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import '../../less/base.less';

.@{prefixClass} {
  &-date-picker {
  	position: fixed;
  	top: 50%;
  	left: 50%;
  	width: 6rem * @baseRem;
  	height: 9.5rem * @baseRem;
  	transform: translate3d(-50%, -50%, 0);
  	-webkit-transform: translate3d(-50%, -50%, 0);
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    &-box {
    	display: flex;
    	flex-direction: column;
    	align-items: center;
    	height: 100%;
    	box-shadow: 1px 19px 60px rgba(0,0,0,.3), 2px 15px 20px rgba(0,0,0,.2);
    	&-value {
    		padding: .6rem * @baseRem .2rem * @baseRem;
    		background-color: #00bfff;
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
    		display: flex;
    		width: 100%;
    		justify-content: space-around;
    		padding: .2rem * @baseRem;
    	}
    	&-content {
    		font-size: .2rem * @baseRem;
    		display: flex;
    		flex-wrap: wrap;
    		padding: 0 .2rem * @baseRem;
    		justify-content: space-between;
    		&-item {
    			padding: .2rem * @baseRem 0;
    			width: 13%;
    			text-align: center;
    			font-size: .3rem * @baseRem;
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

.now {
	color: #00bfff;
}

.prev, .next {
	color: #5d5d5d;
}
</style>
