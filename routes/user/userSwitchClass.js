const express = require('express');
const axios = require('axios');
axios.defaults.withCredentials = true;

const router = express.Router();

router.get('/switchClass', (req, res) => {
    res.render('user/userSwitchClass.html')
});

module.exports = router;