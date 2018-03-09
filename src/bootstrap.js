let baseURL = 'http://lesson-manager.dev'
//let baseURL = 'http://localhost:8088'
//let baseURL = process.env.DEV_HOST

window.axios = require('axios')

window.axios.defaults.baseURL = baseURL
//window.axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
window.axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
