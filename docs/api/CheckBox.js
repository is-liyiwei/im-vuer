let api = [{
  params: 'isCheck',
  instructions: '是否选择',
  type: 'Boolean',
  optional: '-',
  default: 'false'
},{
  params: 'val',
  instructions: '文本',
  type: 'String',
  optional: '-',
  default: '-'
},{
  params: 'activeBgColor',
  instructions: '选中背景颜色',
  type: 'String',
  optional: '-',
  default: '#00BFFF'
},{
  params: 'activeColor',
  instructions: '选中图标颜色',
  type: 'String',
  optional: '-',
  default: '#FFFFFF'
},{
  params: 'circle',
  instructions: '是否圆形',
  type: 'Boolean',
  optional: '-',
  default: 'false'
}]

module.exports = api