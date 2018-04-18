let api = [{
  params: 'scrollStatus',
  instructions: '滚动方向',
  type: 'String',
  optional: 'up, down',
  default: 'up'
},{
  params: 'duration',
  instructions: '动画时长',
  type: '[Number, String]',
  optional: '',
  default: '300'
},{
  params: 'interval',
  instructions: '动画间隔时长',
  type: '[Number, String]',
  optional: '',
  default: '3000'
}]

module.exports = api