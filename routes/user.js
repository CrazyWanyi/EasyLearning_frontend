const express = require('express');

const router = express.Router();

router.get('/login', (req, res) => {
    res.render('user/userLogin.html')
});

router.get('/register', (req, res) => {
    res.render('user/userRegister.html')
});

router.get('/switchClass', (req, res) => {
    res.render('user/userSwitchClass.html')
});

router.get('/joinClass', (req, res) => {
    res.render('user/userJoinClass.html')
});

module.exports = router;