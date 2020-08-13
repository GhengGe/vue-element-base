/**
 * ajax请求配置
 */
import axios from 'axios'
import apiURL from './api.js'
// import cookie from '../../static/js/cookie.js'

// axios默认配置
// 超时时间
axios.defaults.timeout = 10000
// 默认地址
axios.defaults.baseURL = apiURL
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 整理数据
// axios.defaults.transformRequest = function (data) {
//   data = JSON.stringify(data)
//   return data
// }

// 路由请求拦截
// http request 拦截器
// axios.interceptors.request.use(
//   config => {
//     console.log('请求拦截', config)
//     // config.data = JSON.stringify(config.data);
//     // config.headers['Content-Type'] = 'application/json;charset=UTF-8'
//     // 判断是否存在ticket，如果存在的话，则每个http header都加上ticket
//     // if (cookie.get('token')) {
//     //   // 用户每次操作，都将cookie设置成2小时
//     //   cookie.set('token', cookie.get('token'), 1 / 12 )
//     //   cookie.set('name',cookie.get('name'), 1 / 12)
//     //   config.headers.token = cookie.get('token')
//     //   config.headers.name = cookie.get('name')
//     // }
//     return config
//   },
//   error => {
//     return Promise.reject(error.response)
//   })

// // 路由响应拦截
// // http response 拦截器
// axios.interceptors.response.use(
//   response => {
//     console.log('请求拦截', response)
//     if (response.data.resultCode === '404') {
//       // 返回 错误代码-1 清除ticket信息并跳转到登录页面
//       // cookie.del("ticket")
//       // window.location.href='http://login.com'
//     } else {
//       return response
//     }
//   },
//   error => {
//     console.log(error.response)
//     // 返回接口返回的错误信息
//     return Promise.reject(error.response)
//   })
export default axios
