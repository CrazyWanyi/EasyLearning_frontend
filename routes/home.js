const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/', async (req, response) => {
    await axios({
        method: 'GET',
        url: "http://localhost:8080/api/user/home",
        headers: req.headers
    }).then((res) => {
        if (res.data.status === 401) {
            response.redirect("/login");
            return;
        }
        response.setHeader("Content-Type", "text/html;charset=utf-8");
        response.render('home.html', {
            user: res.data.data
        });
    }).catch((err) => {
        console.log(err.data);
    })
});

module.exports = router;