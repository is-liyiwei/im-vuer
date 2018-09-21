let api = [{
  params: 'data',
  instructions: '数据列表',
  type: 'Array',
  optional: '-',
  default: '[]'
},{
  params: 'v-model',
  instructions: '控制组件显示',
  type: 'Boolean',
  optional: '-',
  default: 'false'
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