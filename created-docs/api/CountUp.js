let api = [{
  params: 'start',
  instructions: '是否开始',
  type: 'Boolean',
  optional: '-',
  default: 'false'
},{
  params: 'startVal',
  instructions: '开始值',
  type: 'Number',
  optional: '-',
  default: '0'
},{
  params: 'endVal',
  instructions: '结束值',
  type: 'Number',
  optional: '-',
  default: '100'
},{
  params: 'decimals',
  instructions: '保留小数位',
  type: 'Number',
  optional: '-',
  default: '0'
},{
  params: 'duration',
  instructions: '动画时间',
  type: 'Number',
  optional: '-',
  default: '2'
},{
  params: 'txtColor',
  instructions: '文本颜色',
  type: 'String',
  optional: '-',
  default: '#00bfff'
},{
  params: 'fz',
  instructions: '文本大小',
  type: 'String',
  optional: '-',
  default: '.37rem'
}]

module.exports = api