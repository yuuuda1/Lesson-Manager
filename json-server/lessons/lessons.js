const lessonFactory = require('./../factories/lessonFactory')

let lessonData = lessonFactory.create(10)

const lessons = (request, response) => {
  response.jsonp(lessonData)

}

module.exports = lessons
