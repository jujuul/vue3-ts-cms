// service统一出口
import ZXRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
const zxRequest = new ZXRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      // const token = ''
      // if (token) {
      //   config.headers.Authorization = `Bearer ${token}`
      // }

      console.log('请求成功的拦截')
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      console.log('响应成功的拦截')

      const data = res.data
      if (data.returnCode === '-1001') {
        console.log('请求失败,错误')
      } else {
        return data
      }

      return res
    },
    responseInterceptorCatch: (err) => {
      if (err.response.status === 404) {
        console.log('404')
      }
      return err
    }
  }
})
export default zxRequest
