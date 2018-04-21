let api = [{
  params: 'Confirm组件',
  instructions: '-',
  type: '-',
  optional: '-',
  default: '-'
},{
  params: 'title',
  instructions: '标题',
  type: 'String',
  optional: '-',
  default: '-'
},{
  params: 'content',
  instructions: '文本',
  type: 'String',
  optional: '-',
  default: '-'
},{
  params: 'styleFor',
  instructions: '样式',
  type: 'String',
  optional: 'ios, android',
  default: '-'
},{
  params: 'opts',
  instructions: '配置',
  type: 'Array',
  optional: '参考demo,最好不要超过3个配置项',
  default: 'ios'
},{
  params: 'Toast组件',
  instructions: '-',
  type: '-',
  optional: '-',
  default: '-'
},{
  params: 'content',
  instructions: '文本',
  type: 'String',
  optional: '-',
  default: '-'
},{
  params: 'position',
  instructions: '位置',
  type: 'String',
  optional: 'top, bottom, center',
  default: 'bottom'
},{
  params: 'time',
  instructions: '显示时间',
  type: 'Number',
  optional: '-',
  default: '3000'
},{
  params: 'ActionSheet组件',
  instructions: '-',
  type: '-',
  optional: '-',
  default: '-'
},{
  params: 'hasCancel',
  instructions: '是否有取消按钮',
  type: 'Boolean',
  optional: '-',
  default: 'false'
},{
  params: 'opts',
  instructions: '配置',
  type: 'Array',
  optional: '参考demo',
  default: ''
},{
  params: 'Tip组件',
  instructions: '-',
  type: '-',
  optional: '-',
  default: '-'
},{
  params: 'txt',
  instructions: '文本',
  type: 'String',
  optional: '-',
  default: '-'
},{
  params: 'icon',
  instructions: '图标',
  type: 'String',
  optional: 'loading, success, warn, error',
  default: 'loading'
},{
  params: 'tpl',
  instructions: '自定义模板',
  type: 'String',
  optional: '-',
  default: '-'
},{
  params: 'time',
  instructions: '显示时间',
  type: 'Number',
  optional: '-',
  default: '1800'
}]

module.exports = api