const express = require('express'),
    path = require('path');

const app = express();
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/static', express.static(path.join(__dirname, 'node_modules')));
app.listen(3000);

module.exports = app;