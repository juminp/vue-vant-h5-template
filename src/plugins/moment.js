import moment from 'moment'

export default Vue => {
  // mount the axios to Vue
  Object.defineProperties(Vue, {
    moment: {
      get: () => moment,
    },
  })
  // mount the axios to Vue component instance
  Object.defineProperties(Vue.prototype, {
    $moment: {
      get: () => moment,
    },
  })
}
