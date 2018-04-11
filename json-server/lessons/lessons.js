const lessonFactory = require('./../factories/lessonFactory')

const lessonData = lessonFactory.create(10)

const lessons = (request, response) => {
  response.jsonp({ data: lessonData })
}

module.exports = lessons
