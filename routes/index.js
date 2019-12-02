const user = require('./user');
const home = require('./home');
const exam = require('./exam');

module.exports = (app) => {
    app.use(user);
    app.use(home);
    app.use(exam);
};
