const axios = require('axios')

const uri = 'http://lesson-manager.dev/api/lessons/search?search_word=理工学実験'

axios.get(uri).then(res => {
  console.log(res.data)
}).catch(err => {
  console.log(err)
})
