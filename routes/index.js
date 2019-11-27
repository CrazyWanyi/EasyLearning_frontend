const userLogin = require('./user/userLogin');
const userRegister = require('./user/userRegister');
const userHome = require('./home');

module.exports = (app) => {
    app.use(userLogin);
    app.use(userRegister);
    app.use(userHome);
};
