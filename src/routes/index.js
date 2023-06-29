const express = require('express');
const shoppingsRouter = require('./shoppings.router');

function routerApi(app) {
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/shoppings', shoppingsRouter);
    
}

module.exports = routerApi;