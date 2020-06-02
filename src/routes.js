const express = require('express');
const bodyParser = require('body-parser');
const CalculoController = require('../controllers/CalculoController');


// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const routes = express.Router();


routes.post('/calculo/index', jsonParser, CalculoController.index);

routes.get('/teste', (req, res) => { 
    return res.json({
        test: "teste chamada API",
    })
}); 


module.exports = routes;