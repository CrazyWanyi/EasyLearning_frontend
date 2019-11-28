const express = require('express');
const axios = require('axios');
axios.defaults.withCredentials = true;

const router = express.Router();

router.get('/login', (req, res) => {
    res.render('user/userLogin.html')
});

module.exports = router;
