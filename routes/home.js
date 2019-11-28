const express = require('express');
const config = require('config-lite')(__dirname);

const router = express.Router();

router.get('/', async (req, res) => {
    res.sendFile(`${config.VIEW_DIR}home.html`);
});

module.exports = router;