const user = require('./user');
const home = require('./home');
const exam = require('./exam');
const student = require('./student');
const broadcast = require('./broadcast');
const gradebook = require('./gradebook');
const system = require('./system');

module.exports = (app) => {
    app.use(user);
    app.use(home);
    app.use(exam);
    app.use(student);
    app.use(broadcast);
    app.use(gradebook);
    app.use(system);
};
