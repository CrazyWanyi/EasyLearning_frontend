const express = require('express');
const axios = require('axios');
axios.defaults.withCredentials = true;

const router = express.Router();

router.get('/register', (req, res) => {
    res.render('user/userRegister.html')
});

router.post('/register', async (request, response) => {
    let body = request.body;
    await axios({
        method: 'POST',
        url: "http://localhost:8080/api/user/register",
        data: body
    }).then((res) => {
        let data = res.data;
        response.header(res.headers);
        response.status(200).json(data);
    }).catch((err) => {
        console.log(err.data);
    })
});

module.exports = router;