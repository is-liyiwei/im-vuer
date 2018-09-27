/* istanbul ignore next */

import Vue from 'vue'

// 判断是不是服务器端渲染
const isServer = Vue.prototype.$isServer
// 特殊字符匹配 :-_
const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g // eslint-disable-line
// 对mozilla进行特殊判断，即firefox
const MOZ_HACK_REGEXP = /^moz([A-Z])/ // eslint-disable-line
// 判断ie的版本号
const ieVersion = isServer ? 0 : Number(document.documentMode)

/**
 * 去除开头或者结尾的空白字符
 * @param string 要处理的字符串
 * @returns {string} 处理后的字符串
 */
/* istanbul ignore next */
const trim = function (string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}

/**
 * 将:-_等变成驼峰式，如foo-bar变成fooBar
 * @param name 要处理的字符串
 * @returns {*} 处理后的字符串
 */
/* istanbul ignore next */
const camelCase = function (name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter
  }).replace(MOZ_HACK_REGEXP, 'Moz$1')
}

/**
 * 添加事件监听
 * @param element 要监听的元素
 * @param event 要监听的事件
 * @param handler 要执行的函数
 */
/* istanbul ignore next */
export const on = (function () {
  if (!isServer && document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler)
      }
    }
  }
})()

/**
 * 移除事件监听
 * @param element 监听的元素
 * @param event 监听的事件
 * @param handler 执行的函数
 */
/* istanbul ignore next */
export const off = (function () {
  if (!isServer && document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false)
      }
    }
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler)
      }
    }
  }
})()

/**
 * 绑定一次性事件监听
 * @param el 要监听的元素
 * @param event 要监听的事件
 * @param fn 回调函数
 */
/* istanbul ignore next */
export const once = function (el, event, fn) {
  var listener = function () {
    if (fn) {
      fn.apply(this, arguments)
    }
    off(el, event, listener)
  }
  on(el, event, listener)
}

/**
 * 判断是否包含某类
 * @param el 要检测的元素
 * @param cls 要检测的类名
 * @returns {boolean}
 */
/* istanbul ignore next */
export function hasClass (el, cls) {
  if (!el || !cls) return false
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.')
  if (el.classList) {
    return el.classList.contains(cls)
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
  }
};

/**
 * 给元素添加某些类
 * @param el 要处理的元素
 * @param cls 要添加的类
 */
/* istanbul ignore next */
export function addClass (el, cls) {
  if (!el) return
  var curClass = el.className
  var classes = (cls || '').split(' ')

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.add(clsName)
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName
    }
  }
  if (!el.classList) {
    el.className = curClass
  }
};

/**
 * 给元素移除某些类
 * @param el 要处理的元素
 * @param cls 要移除的类
 */
/* istanbul ignore next */
export function removeClass (el, cls) {
  if (!el || !cls) return
  var classes = cls.split(' ')
  var curClass = ' ' + el.className + ' '

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i]
    if (!clsName) continue

    if (el.classList) {
      el.classList.remove(clsName)
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ')
    }
  }
  if (!el.classList) {
    el.className = trim(curClass)
  }
};

/**
 * 获取样式，分IE9一下和其他两种方式处理
 * @type {Function}
 * @param element 要获取样式的元素
 * @param styleName 要获取的样式名
 */
/* istanbul ignore next */
export const getStyle = ieVersion < 9 ? function (element, styleName) {
  if (isServer) return
  if (!element || !styleName) return null
  styleName = camelCase(styleName)
  if (styleName === 'float') {
    styleName = 'styleFloat'
  }
  try {
    switch (styleName) {
      case 'opacity':
        try {
          return element.filters.item('alpha').opacity / 100
        } catch (e) {
          return 1.0
        }
      default:
        return (element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null)
    }
  } catch (e) {
    return element.style[styleName]
  }
} : function (element, styleName) {
  if (isServer) return
  if (!element || !styleName) return null
  styleName = camelCase(styleName)
  if (styleName === 'float') {
    styleName = 'cssFloat'
  }
  try {
    var computed = document.defaultView.getComputedStyle(element, '')
    return element.style[styleName] || computed ? computed[styleName] : null
  } catch (e) {
    return element.style[styleName]
  }
}

/**
 * 设置元素的样式
 * @param element 要设置的元素
 * @param styleName 要设置的样式
 * @param value 要设置的值
 */
/* istanbul ignore next */
export function setStyle (element, styleName, value) {
  if (!element || !styleName) return
  // 这个好像还可以传入obj，像jQuery那样.css({})的操作方法
  if (typeof styleName === 'object') {
    for (var prop in styleName) {
      if (styleName.hasOwnProperty(prop)) {
        setStyle(element, prop, styleName[prop])
      }
    }
  } else {
    styleName = camelCase(styleName)
    if (styleName === 'opacity' && ieVersion < 9) {
      element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')'
    } else {
      element.style[styleName] = value
    }
  }
};
