import axios from '../lib/axios'

const headers = token => {
  return {
    'App-token': token,
  }
}
const headers = (contentType = 'application/x-www-form-urlencoded') => {
  return {
    'Content-Type': contentType,
  }
}

export const getList = (token, params) => {
  return axios.post(`/api/xxx`, params, {
    headers: headers(token),
  })
}