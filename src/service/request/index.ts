import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { ZXRequestConfig, ZXRequestInterceptors } from './types'

import { ElLoading } from 'element-plus'

const DEFAULT_LOADING = true

class ZXRequest {
  instance: AxiosInstance
  interceptors?: ZXRequestInterceptors
  loading?: any
  showLoading?: boolean
  // loading?: IloadingInstance

  constructor(config: ZXRequestConfig) {
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
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
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据...',
            background: 'rgba(0,0,0,0.5)'
          })
        }
        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        console.log('全局实例响应拦截')
        setTimeout(() => {
          this.loading?.close()
        }, 1000)
        return res.data
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

    if (config.showLoading === false) {
      this.showLoading = config.showLoading
    }

    this.instance
      .request(config)
      .then((res) => {
        console.log(res)
        if (config.interceptors?.responseInterceptor) {
          res = config.interceptors.responseInterceptor(res)
        }
        // 再将showloading设置为true，不然会影响下一次请求
        this.showLoading = DEFAULT_LOADING
        return res
      })
      .catch((err) => {
        this.showLoading = DEFAULT_LOADING
        return err
      })
  }
  // get() {}
}

export default ZXRequest
