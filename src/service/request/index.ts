import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { ZXRequestConfig, ZXRequestInterceptors } from './types'

class ZXRequest {
  instance: AxiosInstance
  interceptors?: ZXRequestInterceptors

  constructor(config: ZXRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 从config中取出的是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('全局实例请求拦截')
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        console.log('全局实例响应拦截')
        return res
      },
      (err) => {
        return err
      }
    )
  }
  request(config: ZXRequestConfig): void {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }

    this.instance.request(config).then((res) => {
      console.log(res)
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res)
      }
      return res
    })
  }
  // get() {}
}

export default ZXRequest
