const axios = require('axios')

const uri = 'http://lesson-manager.example/oauth/token'

axios.post(uri, {

    client_id: 2,
    client_secret: 'dMpISxPH9Dho9OTmoZm59cgrlSaiwHwIPlkhywNK',
    username: 'shoMMKS@gmail.com',
    password: 'ampmampm',
    grant_type: 'password',
    scope: '*'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err.message)
})
