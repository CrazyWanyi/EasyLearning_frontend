const express = require('express');
const config = require('config-lite')(__dirname);

const router = express.Router();

router.get('/announcement', (req, res) => {
    res.sendFile(`${config.VIEW_DIR}system/announcement.html`);
});

module.exports = router;