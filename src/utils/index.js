export const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

export const formatDate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return [year, month, day].map(formatNumber).join('-')
}

export const formatTime = date => {
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [hour, minute, second].map(formatNumber).join(':')
}

export const formatDateMinute = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()

  const datestr = [year, month, day].map(formatNumber).join('-')
  const timestr = [hour, minute].map(formatNumber).join(':')

  return datestr + ' ' + timestr
}

export const formatDateTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const datestr = [year, month, day].map(formatNumber).join('-')
  const timestr = [hour, minute, second].map(formatNumber).join(':')

  return datestr + ' ' + timestr
}

export const getDateTime = dateTime => {
  // 返回示例： 9月28日 11:24
  const date = dateTime ? new Date(dateTime) : new Date()
  const month = date.getMonth() + 1
  let hours = date.getHours()
  let minute = date.getMinutes()
  hours = hours < 10 ? '0' + hours : hours
  minute = minute < 10 ? '0' + minute : minute

  return `${month}月${date.getDate()}日 ${hours}:${minute}`
}

export const getBirthDayFromIdCard = idCard => {
  let birthday = ''

  if (idCard !== null && idCard !== '') {
    if (idCard.length === 15) {
      birthday = '19' + idCard.substr(6, 6)
    } else if (idCard.length === 18) {
      birthday = idCard.substr(6, 8)
    }

    birthday = birthday.replace(/(.{4})(.{2})/, '$1/$2/')
  }

  return birthday
}

/**
 * 判断数据是否存在
 */
export const _isExit = val => {
  return val !== null && val !== undefined && val !== '' && val !== -1 && val !== 0
}

/**
 * 比较两个数据间大小
 */
export const _compare = (val1, val2) => {
  if (!_isExit(val1) && !_isExit(val2)) {
    return 1
  }

  if (_isExit(val1) && !_isExit(val2)) {
    return 2
  }

  if (!_isExit(val1) && _isExit(val2)) {
    return 3
  }

  if (_isExit(val1) && _isExit(val2)) {
    const num1 = typeof val1 === 'number' ? val1 : parseInt(val1, 10)
    const num2 = typeof val2 === 'number' ? val2 : parseInt(val2, 10)

    if (parseInt(num1) < parseInt(num2)) {
      return 4
    } else if (parseInt(num1) === parseInt(num2)) {
      return 5
    } else {
      return 6
    }
  }
}

/**
 * 生成 uuid
 */
export const uuid = (len, radix) => {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
  const uuid = []
  let i
  radix = radix || chars.length

  if (len) {
    // Compact form
    for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)]
  } else {
    // rfc4122, version 4 form
    let r

    // rfc4122 requires these characters
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
    uuid[14] = '4'

    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16)
        uuid[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r]
      }
    }
  }
  return uuid.join('')
}

/**
 * 获取最近7个工作日（除周一周二外）
 */

/**
 * 获取除周一周二外的时间
 * 10月9日（周二）
 */
export const getDay = day => {
  const today = new Date()
  const targetDayMilliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day
  const weekDesc = {
    0: '周天',
    1: '周一',
    2: '周二',
    3: '周三',
    4: '周四',
    5: '周五',
    6: '周六',
  }

  today.setTime(targetDayMilliseconds)

  const formatToday = formatDate(today)
  const tMonth = today.getMonth() + 1
  const tDay = today.getDate()
  let tWeek = today.getDay()

  if (tWeek === 1 || tWeek === 2) {
    return ''
  } else {
    const obj = {}
    tWeek = day === 0 ? '今天' : weekDesc[tWeek]
    obj['time'] = formatToday
    obj['value'] = `${tMonth}月${tDay}日（${tWeek}）`
    obj['checked'] = false
    return obj
  }
}
export const getSevenDay = () => {
  const days = []
  let text = ''
  let i = 0

  while (days.length < 7) {
    text = getDay(i)
    if (text) {
      days.push(text)
    }
    i++
  }

  days.push({
    time: '其他',
    value: '其他',
  })
  return days
}
// H5 跳转小程序
export const navigatorToMp = (path, cb) => {
  const { wx } = window
  if (wx && wx.miniProgram && path) {
    // 以下是跳转到tabbar，目前只支持reLaunch方法
    wx.miniProgram.redirectTo({
      url: path,
      success: () => {},
      fail: err => {
        cb && cb(err)
      },
    })
  }
}

export const smoothScrollTop = () => {
  const currentScroll = document.documentElement.scrollTop || document.body.scrollTop
  if (currentScroll > 0) {
    window.requestAnimationFrame(smoothScrollTop)
    window.scrollTo(0, currentScroll - currentScroll / 5)
  }
}

export const getUuid = () => {
  const s = []
  const hexDigits = '0123456789abcdef'
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '-'

  const uuid = s.join('')
  return uuid
}

export function transferDate(dateTimeStamp) {
  const getDate = () => new Date()
  const minute = 1000 * 60
  const hour = minute * 60
  const day = hour * 24
  // const halfamonth = day * 15
  const month = day * 30
  const now = getDate().getTime()
  const year = getDate().getFullYear()
  const diffValue = now - dateTimeStamp
  if (diffValue < 0) {
    return
  }

  const oYear = getDate(dateTimeStamp).getFullYear()
  const oMounth = getDate(dateTimeStamp).getMonth() + 1
  const oDay = getDate(dateTimeStamp).getDate()
  // const monthC = diffValue / month
  const weekC = diffValue / (7 * day)
  const dayC = diffValue / day
  const hourC = diffValue / hour
  const minC = diffValue / minute
  let result = ''

  if (oYear < year) {
    result = parseInt(oYear) + '年' + parseInt(oMounth) + '月' + parseInt(oDay) + '日'
  } else if (weekC >= 1 && oYear === year) {
    result = parseInt(oMounth) + '月' + parseInt(oDay) + '日'
  } else if (dayC >= 1) {
    result = '' + parseInt(dayC) + '天前'
  } else if (hourC >= 1) {
    result = '' + parseInt(hourC) + '小时前'
  } else if (minC >= 1) {
    result = '' + parseInt(minC) + '分钟前'
  } else {
    result = '刚刚'
  }

  return result
}

const systemWidthPrecent = document.documentElement.clientWidth / 750
export function rpx(v) {
  return parseInt(systemWidthPrecent * v)
}

// 滑动到底部
export function onReachBottom(fn) {
  // 这样就不用去除事件回调了
  window.onscroll = function() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    const windowHeight = document.documentElement.clientHeight || document.body.clientHeight
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight

    if (Number(scrollTop + windowHeight) === Number(scrollHeight)) {
      console.log('scrollbottom')
      if (typeof fn === 'function') {
        fn()
      }
    }
  }
}

// module.exports = {
//   getSevenDay: getSevenDay,
//   uuid: uuid,
//   _isExit: _isExit,
//   _compare,
//   getDateTime: getDateTime,
//   getBirthDayFromIdCard: getBirthDayFromIdCard,
//   formatDateTime: formatDateTime,
//   formatDate: formatDate,
//   formatTime: formatTime
// }
