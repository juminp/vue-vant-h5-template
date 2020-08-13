import './registerServiceWorker'

import { Dialog, Loading, Toast, Notify, ImagePreview, Lazyload  } from 'vant'
import Vconsole from 'vconsole'
import Vue from 'vue'
import 'vant/lib/index.css';
import './assets/css/scss/reset.scss'
import './assets/css/scss/flex.scss'
import './assets/css/scss/function.scss'
// import './assets/css/icon/iconfont.css'

import App from './App.vue'
import * as filters from './filters'
import plugins from './plugins'
import router from './router/index'
import store from './store/index'
import '@/permission' // permission control

if (process.env.NODE_ENV !== 'production') {
  // new Vconsole()
}
// new Vconsole()
// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

console.log(process.env.NODE_ENV)
// 弹框全局引入
Vue.use(Dialog)
Vue.use(Toast)
Vue.use(Notify)
Vue.use(Loading)
Vue.use(plugins)
Vue.use(ImagePreview)
Vue.use(Lazyload)
// Vue.use(Vant)

Vue.config.productionTip = false

//全局返回事件，由于微信的机制，页面刷新会导致没有前一页，所以特殊处理
Vue.prototype.routerBack = function (){
  // router.go(-1);
  window.history.go(-1)
  console.log('routerBack')
  // if(window.history.length == 1){
  //   router.replace({name:'home_tabs'})
  // }else{
  //   router.back(-1);
  // }
}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
