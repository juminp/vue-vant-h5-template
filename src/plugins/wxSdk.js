const wx = require('weixin-js-sdk')
export default Vue => {
  Object.defineProperties(Vue.prototype, {
    $wx: {
      get: () => wx
    }
  })
}
