const router = require('express').Router()

module.exports = router

const timeTable = require('./../timetables/timetables')

router.get('/api/timetables', timeTable.myTimeTable)
router.get('/api/timetables/:id', timeTable.timeTable)
