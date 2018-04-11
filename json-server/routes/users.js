const router = require('express').Router()

module.exports = router

const user = require('./../users/users')

router.get('/api/users/me', user.me)
router.get('/api/users/search', user.users)
router.get('/api/users/profile/:id', user.user)
