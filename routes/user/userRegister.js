const express = require('express');

const router = express.Router();

router.get('/register', (req, res) => {
    res.render('user/userRegister.html')
});

module.exports = router;