let api = [{
  params: 'dataList',
  instructions: '数据列表',
  type: 'Array',
  optional: '参考demo',
  default: '-'
},{
  params: '@handleClick',
  instructions: '点击每一项事件',
  type: 'Function',
  optional: '返回item数据',
  default: '-'
}]

module.exports = api