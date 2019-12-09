const express = require('express');
const config = require('config-lite')(__dirname);

const router = express.Router();

router.get('/gradebook', (req, res) => {
    res.sendFile(`${config.VIEW_DIR}gradebook/gradeList.html`);
});

module.exports = router;