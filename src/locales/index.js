import {IntlProvider, addLocaleData, intlShape} from 'react-intl'
// import ReactIntl from 'react-intl'
// const ReactIntl = require('react-intl')

function setLocale(lang) {
  if (lang !== undefined && !/^([a-z]{2})-([A-Z]{2})$/.test(lang)) {
    // for reset when lang === undefined
    throw new Error('setLocale lang format error')
  }
  if (getLocale() !== lang) {
    window.localStorage.setItem('umi_locale', lang || '')
    window.location.reload()
  }
}

function getLocale() {
  return window.g_lang
}

let intl 
const intlApi = {}

const arr = [
  'formatMessage', 
  'formatHTMLMessage', 
  'formatDate',
  'formatTime',
  'formatRelative',
  'formatNumber',
  'formatPlural',
  'now',
  'onError',
]
arr.forEach(methodName => {
  intlApi[methodName] = function() {
    if (intl && intl[methodName]) {
      // _setIntlObject has been called
      return intl[methodName].call(intl, ...arguments)
    } else if (console && console.warn) {
      console.warn(
        `[umi-plugin-locale] ${methodName} not initialized yet, you should use it after react app mounted.`,
      )
    }
    return null
  }
})

// react-intl 没有直接暴露 formatMessage 这个方法
// 只能注入到 props 中，所以通过在最外层包一个组件然后组件内调用这个方法来把 intl 这个对象暴露到这里来
// TODO 查找有没有更好的办法
function setIntlObject(theIntl) {
  // umi 系统 API，不对外暴露
  intl = theIntl
}

const {formatMessage} = intlApi

// console.log('...intlApi', intlApi)
export {
  // ...ReactIntl,
  // ...intlApi,
  IntlProvider, 
  addLocaleData, 
  intlShape,
  formatMessage,
  setLocale,
  getLocale,
  setIntlObject,
}

// module.exports = {
//   // ...ReactIntl,
//   IntlProvider, 
//   addLocaleData, 
//   intlShape,
//   ...intlApi,
//   setLocale,
//   getLocale,
//   setIntlObject,
// }