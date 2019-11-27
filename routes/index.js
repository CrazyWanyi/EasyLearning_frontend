const userLogin = require('./user/userLogin');
const userRegister = require('./user/userRegister');
const userSwitchClass = require('./user/userSwitchClass');
const userHome = require('./home');

module.exports = (app) => {
    app.use(userLogin);
    app.use(userRegister);
    app.use(userSwitchClass);
    app.use(userHome);
};
