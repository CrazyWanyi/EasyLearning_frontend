const path = require('path');
const router = require('./routes');
const bodyParser = require('body-parser');
const express = require('express');
const config = require('config-lite')(__dirname);
const commonMiddleware = require('./middleware/common');

const app = express();

app.use('/static/', express.static(path.join(__dirname, './static/')));

app.engine('html', require('express-art-template'));
app.set('views', path.join(__dirname, './view'), );

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

router(app);

app.use(commonMiddleware.handleNotFound);

app.listen(config.PORT, () => {
    console.log('HTTP server is running on http://localhost:3000')
});
