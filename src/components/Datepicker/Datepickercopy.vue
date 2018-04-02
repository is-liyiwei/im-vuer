<template>
  <div class="im-date-picker">

		<div class="im-date-picker-box">

		<div class="im-date-picker-box-value">
			2018-04-02 星期一
		</div>

		<div class="im-date-picker-box-ctrl">
			<svg viewBox="0 0 24 24" class="im-date-picker-box-ctrl-prev arrow">
				<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
			</svg>
			<div class="im-date-picker-box-ctrl-date">2018 四月</div>
			<svg viewBox="0 0 24 24" class="im-date-picker-box-ctrl-next arrow">
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

			<span class="im-date-picker-box-content-item prev">25</span>
			<span class="im-date-picker-box-content-item prev">26</span>
			<span class="im-date-picker-box-content-item prev">27</span>
			<span class="im-date-picker-box-content-item prev">28</span>
			<span class="im-date-picker-box-content-item prev">29</span>
			<span class="im-date-picker-box-content-item prev">30</span>
			<span class="im-date-picker-box-content-item prev">31</span>
			<span class="im-date-picker-box-content-item now">1</span>
			<span class="im-date-picker-box-content-item now current">2</span>
			<span class="im-date-picker-box-content-item now">3</span>
			<span class="im-date-picker-box-content-item now">4</span>
			<span class="im-date-picker-box-content-item now">5</span>
			<span class="im-date-picker-box-content-item now">6</span>
			<span class="im-date-picker-box-content-item now">7</span>
			<span class="im-date-picker-box-content-item now">8</span>
			<span class="im-date-picker-box-content-item now">9</span>
			<span class="im-date-picker-box-content-item now">10</span>
			<span class="im-date-picker-box-content-item now">11</span>
			<span class="im-date-picker-box-content-item now">12</span>
			<span class="im-date-picker-box-content-item now">13</span>
			<span class="im-date-picker-box-content-item now">14</span>
			<span class="im-date-picker-box-content-item now">15</span>
			<span class="im-date-picker-box-content-item now">16</span>
			<span class="im-date-picker-box-content-item now">17</span>
			<span class="im-date-picker-box-content-item now">18</span>
			<span class="im-date-picker-box-content-item now">19</span>
			<span class="im-date-picker-box-content-item now">20</span>
			<span class="im-date-picker-box-content-item now">21</span>
			<span class="im-date-picker-box-content-item now">22</span>
			<span class="im-date-picker-box-content-item now">23</span>
			<span class="im-date-picker-box-content-item now">24</span>
			<span class="im-date-picker-box-content-item now">25</span>
			<span class="im-date-picker-box-content-item now">26</span>
			<span class="im-date-picker-box-content-item now">27</span>
			<span class="im-date-picker-box-content-item now">28</span>
			<span class="im-date-picker-box-content-item now">29</span>
			<span class="im-date-picker-box-content-item now">30</span>
			<span class="im-date-picker-box-content-item next">1</span>
			<span class="im-date-picker-box-content-item next">2</span>
			<span class="im-date-picker-box-content-item next">3</span>
			<span class="im-date-picker-box-content-item next">4</span>
			<span class="im-date-picker-box-content-item next">5</span>

		</div>

		<div class="im-date-picker-box-btns">
			<div class="im-date-picker-box-btns-item">取消</div>
			<div class="im-date-picker-box-btns-item">确定</div>
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
      oHeadDate: null
    }
  },
  components: {

  },
  created: function () {
    console.log(this.now);
    this.fillDate(this.now.year, this.now.month);
  },
  methods: {
  	fillDate (year, month) {
  		//本月份第一天是星期几-为显示上个月的天数做铺垫
      var first_day = new Date(year, month, 1).getDay();
      //如果刚好是星期天，则空出一行（显示上个月的天数）
      first_day = first_day == 0 ? 7 : first_day;
      //本月份最后一天是几号
      var final_date = new Date(year, month + 1, 0).getDate(),
      //上个月的最后一天是几号
      last_date = new Date(year, month, 0).getDate(),
      //剩余的格子数--即排在末尾的格子数
      surplus = 42 - first_day - final_date;
      /*设置表头的日历*/
      this.oHeadDate = year + '年' + (month + 1) + '月';
      /*填充日历执行*/
      console.log(year)
      console.log(month)
      console.log(first_day)
      console.log(final_date)
      console.log(last_date)
      console.log(surplus)
      console.log(last_date - (first_day - 1))
      console.log(this.oHeadDate)
  	},
  	// 下个月
		next: function () {

		},
		// 上个月
		prev: function () {

		},
		// 下一年
		nextYear: function () {

		},
		// 上一年
		prevYear: function () {

		},
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
  	width: 80%;
  	height: 70%;
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
    	box-shadow: 0 19px 60px rgba(0,0,0,.298039), 0 15px 20px rgba(0,0,0,.219608);
    	&-value {
    		padding: .6rem .2rem;
    		background-color: #00bfff;
    		width: 100%;
    		font-size: .6rem;
    		font-weight: bold;
    		color: #FFF;
    	}
    	&-ctrl {
    		display: flex;
    		font-size: .3rem;
    		justify-content: space-between;
    		align-items: center;
    		width: 100%;
    		padding: .1rem .3rem;
    		&-date {
    			padding: 0 .2rem;
    		}
    		.arrow {
    			width: .4rem;
    			height: .4rem;
    		}
    	}
    	&-title {
    		font-size: .3rem;
    		display: flex;
    		width: 100%;
    		justify-content: space-around;
    		padding: .2rem;
    	}
    	&-content {
    		font-size: .2rem;
    		display: flex;
    		flex-wrap: wrap;
    		padding: 0 .2rem;
    		justify-content: space-between;
    		&-item {
    			padding: .2rem 0;
    			width: 13%;
    			text-align: center;
    			font-size: .3rem;
    		}
    	}
    	&-btns {
    		width: 100%;
    		padding: .3rem;
    		display: flex;
    		justify-content: flex-end;
    		font-size: .3rem;
    		&-item {
    			padding: .2rem;
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
