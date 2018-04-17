let api = [{
  params: 'data',
  instructions: '数据列表',
  type: 'Array',
  optional: '-',
  default: '[]'
},{
  params: 'showStatus',
  instructions: '控制组件显示',
  type: 'Boolean',
  optional: '-',
  default: 'false'
},{
  params: 'bgColor',
  instructions: '背景颜色',
  type: 'String',
  optional: '-',
  default: '#00bfff'
},{
  params: 'cancelBtnColor',
  instructions: '取消文字颜色',
  type: 'String',
  optional: '',
  default: '#fff'
},{
  params: 'confirmBtnColor',
  instructions: '确定文字颜色',
  type: 'String',
  optional: '',
  default: '#fff'
},{
  params: '@cancelBtn',
  instructions: '取消按钮事件',
  type: 'Function',
  optional: '-',
  default: '-'
},{
  params: '@confirmBtn',
  instructions: '确定按钮事件',
  type: 'Function',
  optional: '-',
  default: '-'
}]

module.exports = api