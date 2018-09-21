let api = [{
  params: 'list',
  instructions: '数据列表',
  type: 'Array',
  optional: '参考demo',
  default: '-'
},{
  params: 'current',
  instructions: '控制active项',
  type: 'Number, String',
  optional: '',
  default: '0'
},{
  params: 'activeColor',
  instructions: '控制active颜色',
  type: 'String',
  optional: '',
  default: '#00bFFF'
}]

module.exports = api