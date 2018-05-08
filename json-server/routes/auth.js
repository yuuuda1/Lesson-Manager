
const router    = require('express').Router()

module.exports = router

const oauth   = require('./../auth')

router.post('/oauth/token', oauth.authorize)
