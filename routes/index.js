const userLogin = require('./user/userLogin');
const userRegister = require('./user/userRegister');
const mainPage = require('./main/main');

module.exports = (app) => {
    app.use(userLogin);
    app.use(userRegister);
    app.use(mainPage);
};
