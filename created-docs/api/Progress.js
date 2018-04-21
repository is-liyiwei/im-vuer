let api = [{
  params: 'progressWidth',
  instructions: '进度条进度',
  type: 'Number, String',
  optional: '0-100',
  default: '0'
},{
  params: 'progressHeight',
  instructions: '进度条高度(宽度)',
  type: 'Number, String',
  optional: '-',
  default: '2'
},{
  params: 'progressColor',
  instructions: '进度条颜色',
  type: 'String',
  optional: '-',
  default: '#00bfff'
},{
  params: 'color',
  instructions: '进度条默认背景颜色',
  type: 'String',
  optional: '-',
  default: '#5d5d5d'
},{
  params: 'startText',
  instructions: '默认左边开始文本',
  type: 'String',
  optional: '-',
  default: '-'
},{
  params: 'endText',
  instructions: '默认右边结束文本',
  type: 'String',
  optional: '-',
  default: '-'
},{
  params: 'inTop',
  instructions: '顶部进度条',
  type: 'Boolean',
  optional: '-',
  default: 'false'
}]

module.exports = api