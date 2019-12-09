const express = require('express');
const config = require('config-lite')(__dirname);

const router = express.Router();

router.get('/exam_list', (req, res) => {
    res.sendFile(`${config.VIEW_DIR}exam/examList.html`);
});

router.get('/exam', (req, res) => {
    res.sendFile(`${config.VIEW_DIR}exam/examMain.html`);
});

router.get('/exam_end', (req, res) => {
    res.sendFile(`${config.VIEW_DIR}exam/examEnd.html`);
});

module.exports = router;