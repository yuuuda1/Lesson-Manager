const router = require('express').Router()

module.exports = router

const lessons = require('./../lessons/lessons')

router.get('/lessons', lessons)
