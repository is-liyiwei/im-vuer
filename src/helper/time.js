export const parseTime = (time, cFormat) => {
  if (arguments.length === 0) {
    return null
  }

  if ((time + '').length === 10) {
    time = +time * 1000
  }

  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    date = new Date(parseInt(time))
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return timeStr
}

// let parseTime_test_1 = +Date.now();
// let parseTime_test_2 = +Date.now();
// let parseTime_test_3 = +Date.now();

// console.log(parseTime(parseTime_test_1, '{y}-{m}-{d} {h}:{i}:{s} 星期{a}'))
// console.log(parseTime(parseTime_test_2, '{y}-{m}-{d} 周{a}'))
// console.log(parseTime(parseTime_test_3))

// -> 2018-04-25 16:11:04 星期三
// -> 2018-04-25 周三
// -> 2018-04-25 16:11:04
