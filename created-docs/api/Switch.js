let api = [{
  params: 'v-model',
  instructions: '当前值',
  type: 'Boolean',
  optional: '-',
  default: 'false'
},{
  params: 'onColor',
  instructions: '选中颜色',
  type: 'String',
  optional: '-',
  default: '#00bfff'
},{
  params: 'onBgColor',
  instructions: '选中背景颜色',
  type: 'String',
  optional: '-',
  default: '#00bfff'
},{
  params: 'styleFor',
  instructions: '样式风格',
  type: 'String',
  optional: 'ios, android',
  default: 'ios'
}]

module.exports = api