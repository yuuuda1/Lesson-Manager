const lessonFactory = require('./../factories/lessonFactory')

const myTimeTableData = {
  data: {
    id: 2,
    lessons: lessonFactory.create(2),
    user_id: 4
  }
}

const timeTableData = {
  data: {
    id: 3,
    lessons: lessonFactory.create(2),
    user_id: 5
  }
}

const myTimeTable = (request, response) => {
  response.jsonp(myTimeTableData)
}

const timeTable = (request, response) => {
  response.jsonp(timeTableData)
}

module.exports = {
  myTimeTable: myTimeTable,
  timeTable: timeTable
}
