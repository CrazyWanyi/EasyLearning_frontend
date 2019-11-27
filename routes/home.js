const express = require('express');
const axios = require('axios');

axios.defaults.withCredentials = true;

const router = express.Router();

router.get('/', async (req, response) => {
    await axios({
        method: 'GET',
        url: "http://localhost:8080/api/user/home",
        headers: req.headers
    }).then((res) => {
        response.header(res.headers);
        console.log(res.data)
        // res.render('home.html');
    }).catch((err) => {
        console.log(err.data);
    })
});

module.exports = router;