const express = require('express');
const bodyParser = require('body-parser');
const DividaController = require('../src/controllers/DividaController');


// create application/json parser
var jsonParser = bodyParser.json()

const routes = express.Router();

routes.get('/list', DividaController.list);
routes.post('/calc', jsonParser, DividaController.calc);
routes.get('/teste', (req, res) => { 
    return res.json({
        test: "teste chamada API",
    })
}); 


module.exports = routes;