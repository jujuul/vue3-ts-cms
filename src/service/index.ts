// service统一出口
import ZXRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
const zxRequest = new ZXRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('请求成功的拦截')
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      console.log('响应成功的拦截')
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})
export default zxRequest
