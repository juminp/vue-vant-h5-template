import axios from 'axios'
import { Toast } from 'vant'
// import qs from 'qs'
axios.defaults.timeout = 12000 // 12s 超时
// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      // config.data = qs.stringify(config.data)
    }
    return config
  },
  error => {
    // 请求错误时
    Toast(error.message)
    return Promise.reject(error)
  },
)
// http response 拦截器
axios.interceptors.response.use(
  res => {
    return res.data
  },
  error => {
    // console.log(error.config, logParams)
    Toast(error.message)
    return Promise.reject(error)
  },
)
export default axios
