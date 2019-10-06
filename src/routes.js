const express = require('express')
const routes = express.Router();
const ProductContoller = require("./controllers/ProductController");

routes.get('/products', ProductContoller.index);
routes.get('/products/:id', ProductContoller.show);
routes.post('/products', ProductContoller.store);
routes.put('/products/:id', ProductContoller.update);
routes.delete('/products/:id', ProductContoller.destroy);


module.exports = routes;