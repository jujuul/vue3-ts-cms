import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { ZXRequestConfig, ZXRequestInterceptors } from './types'

class ZXRequest {
  instance: AxiosInstance
  interceptors?: ZXRequestInterceptors

  constructor(config: ZXRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }
  request(config: ZXRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
      return res
    })
  }
  // get() {}
}

export default ZXRequest
