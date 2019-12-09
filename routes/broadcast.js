const express = require('express');
const config = require('config-lite')(__dirname);

const router = express.Router();

router.get('/broadcast', (req, res) => {
    res.sendFile(`${config.VIEW_DIR}broadcast/broadcastMain.html`);
});

router.get('/broadcast_send', (req, res) => {
    res.sendFile(`${config.VIEW_DIR}broadcast/broadcastSend.html`);
});
module.exports = router;