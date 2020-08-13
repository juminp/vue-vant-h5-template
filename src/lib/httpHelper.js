// import errorReport from './log/errorReport.js'
import _ from 'lodash'

// TODO: 并发接口错误日志和请求时间等监控
export function httpRequestOne(httpServer) {
  return new Promise((resolve, reject) => {
    httpServer
      .then(res => {
        resolve(res)
      })
      .catch(error => {
        // TODO: 收集日志
        console.log(error)
        reject(error)
      })
  })
}

export function httpRequest(promises) {
  if (Array.isArray(promises)) {
    // return httpRequestParallel(promises)
  } else {
    return httpRequestOne(promises)
  }
}

/**
 * 多个请求并发处理
 * @param httpServers 数组，每项为promise
 * @return {Promise<any[]>}
 */
export function httpRequestParallel(httpServers) {
  const _hs = []
  // 传递给错误处理方法
  _.map(httpServers, hs => {
    _hs.push(httpRequest(hs))
  })
  return Promise.all(_hs)
}
