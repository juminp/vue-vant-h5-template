// 节流阀
export const throttleBetter = function(
  delay,
  cb,
  opt = {
    isDebounce: false,
    isExecNow: false,
  },
) {
  // 定义定时器，上一次执行函数的时间
  let timer,
    lastExecTime = 0,
    canceled = false

  // 如果要先执行一次回调
  if (opt.isExecNow) {
    cb.call(self)
    opt.isExecNow = false
  }

  function clear() {
    clearTimeout(timer)
  }

  function cancel() {
    clear()
    timer = undefined
    canceled = true
  }

  function wrapper() {
    if (canceled) {
      return
    }

    const self = this
    const args = arguments || []
    const pastTime = Date.now() - lastExecTime

    function exec() {
      lastExecTime = Date.now()
      console.log('exec')
      cb.call(self, ...args)
    }

    // 先清除定时器
    clear()

    // 防抖函数是当最后一次操作停止delay时间后，再执行cb
    // 如此便可以实现debounce
    if (opt.isDebounce) {
      timer = setTimeout(exec, delay)
      return
    }

    if (pastTime >= delay) {
      exec()
    } else {
      timer = setTimeout(exec, delay - pastTime)
    }
  }

  wrapper.cancel = cancel

  return wrapper
}
