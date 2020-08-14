import lodash from './lodash'
import moment from './moment'
// import wxSdk from './wxSdk' // 使用 cdn 引入
export default {
  install(Vue) {
    moment(Vue)
    lodash(Vue)
    // wxSdk(Vue)
  },
}
