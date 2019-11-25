const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/main', (req, res) => {
    res.render('main.html')
});

module.exports = router;