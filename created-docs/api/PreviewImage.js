let api = [{
  params: 'imgArr',
  instructions: '图片列表',
  type: 'Array',
  optional: '-',
  default: '[]'
}, {
  params: 'currentIndex',
  instructions: '初始的图片index',
  type: 'Number',
  optional: '非负整数',
  default: '0'
}, {
  params: 'currScale',
  instructions: '缩放倍数',
  type: 'Number',
  optional: '最大不要超过3',
  default: '2'
}, {
  params: 'targetSwipeBoundaryValue',
  instructions: '决定是否swipe触发边界值',
  type: 'Number',
  optional: '-',
  default: '130'
}, {
  params: 'animationTime',
  instructions: '动画时间',
  type: 'Number',
  optional: '-',
  default: '300'
}]

module.exports = api
