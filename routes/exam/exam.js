const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/exam', (req, res) => {
    res.render('exam/exam.html')
});

module.exports = router;