const express = require('express');
const logger = require('morgan');
const errorHandler = require('errorhandler');
const bodyParser = require('body-parser');

let store = {};
store.accounts = [];

let app = express();
app.use(bodyParser.json());
app.use(logger(dev));
app.use(errorHandler);

app.get('/accounts', (req, res) => {
    res.status(200).send(store.accounts)
});

