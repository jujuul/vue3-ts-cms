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
  method: 'GET'
})
