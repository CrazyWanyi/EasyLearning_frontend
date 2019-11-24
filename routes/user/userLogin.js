const express = require('express')

const router = express.Router()

router.get('/login', (req, res) => {
    res.render('userLogin.html')
})

module.exports = router
