const userFactory = require('./../factories/userFactory')

const meData = {
  data: {
    id: 3,
    name: 'MIKANE',
    email: 'mikane-dambo@gmail.com',
    created_at: '2018-03-26 22:36:58',
    updated_at: '2018-03-31 14:07:33'
  }
}

const userData = {
  data: {
    id: 11,
    name: 'diwcbiwcb',
    email: 'jncjnwcnk@gmail.com',
    created_at: '2017-11-16 23:06:51',
    updated_at: '2018-02-05 06:18:49'
  }
}

const me = (request, response) => {
  response.jsonp(meData)
}

const user = (request, response) => {
  response.jsonp(userData)
}

const users = (request, response) => {
  response.jsonp({ data: userFactory.create(10) })
}

module.exports = {
  me: me,
  user: user,
  users: users
}
