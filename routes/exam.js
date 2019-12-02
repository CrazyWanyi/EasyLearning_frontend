const express = require('express');
const config = require('config-lite')(__dirname);

const router = express.Router();

router.get('/exam', (req, res) => {
    res.sendFile(`${config.VIEW_DIR}exam/examMain.html`);
});

module.exports = router;