import { createApp } from 'vue'
import { globalRegister } from './global'
import zxRequest from './service'
import App from './App.vue'
import router from './router'
import store from './store'
const app = createApp(App)
// registerApp(app)
app.use(globalRegister)
app.use(store).use(router).mount('#app')

zxRequest.request({
  url: '/home/multidata',
  method: 'GET',
  interceptors: {
    requestInterceptor: (config) => {
      console.log('请求级请求拦截器')
      return config
    },
    responseInterceptor: (res) => {
      console.log('请求级响应拦截器')
      return res
    }
  }
  // showLoading: false
})

zxRequest.request({
  url: '/home/multidata',
  method: 'GET'
})
