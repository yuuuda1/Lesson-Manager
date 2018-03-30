// const baseURL = 'http://lesson-manager.example'
const baseURL = 'http://localhost:8089'
// let baseURL = process.env.DEV_HOST

window.axios = require('axios')

window.axios.defaults.baseURL = baseURL
// window.axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
window.axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
