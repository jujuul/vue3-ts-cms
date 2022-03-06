import type { AxiosRequestConfig } from 'axios'
export interface ZXRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: any) => any
  responseInterceptorCatch?: (error: any) => any
}

export interface ZXRequestConfig extends AxiosRequestConfig {
  interceptors?: ZXRequestInterceptors
  showLoading?: boolean
}
