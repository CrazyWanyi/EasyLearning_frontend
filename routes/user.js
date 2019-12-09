const express = require('express');
const config = require('config-lite')(__dirname);

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

router.get('/modifyInfo', (req, res) => {
    res.sendFile(`${config.VIEW_DIR}user/userInfo.html`);
});

module.exports = router;