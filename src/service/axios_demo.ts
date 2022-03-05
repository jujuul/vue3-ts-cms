import axios from 'axios'

axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res)
})

// new Promise<string>((resolve) => {
//   resolve('123')
// }).then((res) => {
//   console.log(res.length)
// })
