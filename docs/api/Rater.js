let api = [{
  params: 'v-model',
  instructions: '当前值',
  type: '-',
  optional: '-',
  default: '-'
},{
  params: 'min',
  instructions: '最小值',
  type: 'Number',
  optional: '-',
  default: '0'
},{
  params: 'max',
  instructions: '最大值',
  type: 'Number',
  optional: '-',
  default: '5'
},{
  params: 'disabled',
  instructions: '是否禁用',
  type: 'Boolean',
  optional: '-',
  default: 'false'
},{
  params: 'star',
  instructions: 'html模板',
  type: 'String',
  optional: '-',
  default: '★'
},{
  params: 'activeColor',
  instructions: '选中颜色',
  type: 'String',
  optional: '-',
  default: '#00bfff'
},{
  params: 'margin',
  instructions: '边距',
  type: 'String',
  optional: '-',
  default: '0.2rem'
},{
  params: 'fontSize',
  instructions: '大小',
  type: 'String',
  optional: '-',
  default: '0.4rem'
},{
  params: 'offColor',
  instructions: '没选中颜色',
  type: 'String',
  optional: '-',
  default: '#ccc'
}]

module.exports = api