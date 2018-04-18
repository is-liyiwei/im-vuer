let api = [{
  params: 'list',
  instructions: '数据列表',
  type: 'Array',
  optional: '参考demo',
  default: '-'
},{
  params: 'labelColor',
  instructions: '标签背景颜色',
  type: 'String',
  optional: '-',
  default: '#00BFFF'
},{
  params: 'labelTextColor',
  instructions: '标签文本颜色',
  type: 'String',
  optional: '-',
  default: '#fff'
},{
  params: 'textColorActive',
  instructions: '选中文本颜色',
  type: 'String',
  optional: '-',
  default: '#00BFFF'
},{
  params: 'textColorDefault',
  instructions: '默认文本颜色',
  type: 'String',
  optional: '-',
  default: '#000'
},{
  params: 'lineColor',
  instructions: '底部线条颜色',
  type: 'String',
  optional: '-',
  default: '#00BFFF'
},{
  params: 'lineThickness',
  instructions: '底部线条高度(宽度)',
  type: 'String',
  optional: '-',
  default: '2px'
},{
  params: 'activeCurrIndex',
  instructions: '当前选中索引值',
  type: 'Number, String',
  optional: '-',
  default: '0'
},{
  params: '@on-tab',
  instructions: '点击事件',
  type: 'Function',
  optional: '返回索引值',
  default: '-'
}]

module.exports = api