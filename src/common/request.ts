import axios from 'axios';
import { message } from 'antd';
const service = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  timeout: 5000
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (config.url !== 'login') {
      config.headers['Authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwiX2lkIjoiNWUxZWFkNDYwNzQ4ZDQ4OGIzMTY1ZWU3Iiwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsiX2lkIjoiaW5pdCIsIm5hbWUiOiJpbml0IiwicGFzc3dvcmQiOiJpbml0IiwiZW1haWwiOiJpbml0IiwiY3JlYXRlZEF0IjoiaW5pdCIsInVwZGF0ZWRBdCI6ImluaXQiLCJhdmF0YXIiOiJpbml0IiwiaW50cm9kdWN0aW9uIjoiaW5pdCJ9LCJzdGF0ZXMiOnsiaWdub3JlIjp7fSwiZGVmYXVsdCI6e30sImluaXQiOnsiX2lkIjp0cnVlLCJuYW1lIjp0cnVlLCJwYXNzd29yZCI6dHJ1ZSwiZW1haWwiOnRydWUsImNyZWF0ZWRBdCI6dHJ1ZSwidXBkYXRlZEF0Ijp0cnVlLCJhdmF0YXIiOnRydWUsImludHJvZHVjdGlvbiI6dHJ1ZX0sIm1vZGlmeSI6e30sInJlcXVpcmUiOnt9fSwic3RhdGVOYW1lcyI6WyJyZXF1aXJlIiwibW9kaWZ5IiwiaW5pdCIsImRlZmF1bHQiLCJpZ25vcmUiXX0sInBhdGhzVG9TY29wZXMiOnt9LCJjYWNoZWRSZXF1aXJlZCI6e30sIiRzZXRDYWxsZWQiOnt9LCJlbWl0dGVyIjp7Il9ldmVudHMiOnt9LCJfZXZlbnRzQ291bnQiOjAsIl9tYXhMaXN0ZW5lcnMiOjB9LCIkb3B0aW9ucyI6eyJza2lwSWQiOnRydWUsImlzTmV3IjpmYWxzZSwid2lsbEluaXQiOnRydWV9fSwiaXNOZXciOmZhbHNlLCJfZG9jIjp7Il9pZCI6IjVlMWVhZDQ2MDc0OGQ0ODhiMzE2NWVlNyIsIm5hbWUiOiJ5aW5oYW5nIiwicGFzc3dvcmQiOiIkMmIkMTAkbFFqd1dmSWRrY2IxVVFoWHkxd1RRdThFR3VEUzRkZVNkcHhCU1JNaUdlTDVPaGNNNU5nZEMiLCJlbWFpbCI6InloeW91cXVhbjMyMEBnbWFpbC5jb20iLCJjcmVhdGVkQXQiOiIyMDIwLTAxLTE1VDA2OjEyOjIyLjQ1OFoiLCJ1cGRhdGVkQXQiOiIyMDIwLTAxLTE2VDAzOjQzOjQ3LjQwNFoiLCJhdmF0YXIiOiIvVXNlcnMveWluaGFuZy9EZXNrdG9wL3N0dWR5X2V4cGVyaW1lbnQvZWdnL2FwcC9wdWJsaWMvYXZhdGFyLmpwZyIsImludHJvZHVjdGlvbiI6IuWwuee7l-WTiOWTiOWTiCJ9LCIkbG9jYWxzIjp7fSwiJGluaXQiOnRydWUsImlhdCI6MTU3OTQyNDk3OH0.dkeDdjopEhTZ-aQfrZASMKyP2AGhppoPNVFX_cCGlYU'
    }
    return config
  },
  err => {
    console.error(err)
    return Promise.reject(err)
  }
)

// response interceptor
service.interceptors.response.use(
  res => {
    if (res.status === 200) {
      return res.data
    } else {
      message.error(res.status + ' 错误：' + res.data.msg)
    }
  },

  error => {

    return Promise.reject(error)
  }
)

export default service
