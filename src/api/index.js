import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1"8080/'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  return Promise.reject(error)
})
