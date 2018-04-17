let api = [{
  params: 'isCheck',
  instructions: '是否选择',
  type: 'Boolean',
  optional: '-',
  default: 'false'
},{
  params: 'val',
  instructions: '控制组件显示',
  type: 'Boolean',
  optional: '-',
  default: 'false'
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
}]

module.exports = api