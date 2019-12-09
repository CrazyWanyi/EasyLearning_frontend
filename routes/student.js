const express = require('express');
const config = require('config-lite')(__dirname);

const router = express.Router();

router.get('/student_list', (req, res) => {
    res.sendFile(`${config.VIEW_DIR}student/studentList.html`);
});

module.exports = router;