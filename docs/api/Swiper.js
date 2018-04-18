let api = [{
  params: 'speed',
  instructions: '动画速度',
  type: 'Number, String',
  optional: '-',
  default: '350'
},{
  params: 'loop',
  instructions: '是否循环',
  type: 'Boolean',
  optional: '-',
  default: 'true'
},{
  params: 'autoPlay',
  instructions: '自动播放时间间隔',
  type: 'Number, String',
  optional: '为0时不自动播放',
  default: '3000'
},{
  params: 'idx',
  instructions: '当前图片索引',
  type: 'Number, String',
  optional: '-',
  default: '0'
},{
  params: 'dotColor',
  instructions: '点颜色',
  type: 'String',
  optional: '为0时不自动播放',
  default: '#fff'
},{
  params: 'dotActiveColor',
  instructions: '点选中颜色',
  type: 'String',
  optional: '为0时不自动播放',
  default: '#f00'
},{
  params: 'isTabView',
  instructions: '是否配合tab组件使用',
  type: 'Boolean',
  optional: '详情看demo',
  default: 'false'
},{
  params: '@on-swiper',
  instructions: '滑动事件',
  type: 'Function',
  optional: '返回1或-1代表正反向',
  default: '-'
},{
  params: '@tap-swiper',
  instructions: '点击事件',
  type: 'Function',
  optional: '返回索引值',
  default: '-'
}]

module.exports = api