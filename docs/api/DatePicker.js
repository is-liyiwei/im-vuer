let api = [{
  params: 'headerColor',
  instructions: '头部颜色',
  type: 'String',
  optional: '-',
  default: '#00bfff'
},{
  params: 'itemColor',
  instructions: '每一项颜色',
  type: 'String',
  optional: '-',
  default: '#00bfff'
},{
  params: 'cancelBtn',
  instructions: '取消按钮颜色',
  type: 'String',
  optional: '-',
  default: '#000000'
},{
  params: 'confirmBtn',
  instructions: '确定按钮颜色',
  type: 'String',
  optional: '-',
  default: '#00bfff'
},{
  params: 'v-model',
  instructions: '控制组件显示',
  type: 'Boolean',
  optional: '-',
  default: 'false'
},{
  params: '@confirm',
  instructions: '确定按钮事件',
  type: 'Function',
  optional: '-',
  default: '-'
}]

module.exports = api