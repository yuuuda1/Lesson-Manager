let baseURL = process.env.DEV_HOST

window.axios = require('axios')

window.axios.defaults.baseURL = baseURL
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
