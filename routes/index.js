const userLogin = require('./user/userLogin')

module.exports = (app) => {
    app.use(userLogin)
}
