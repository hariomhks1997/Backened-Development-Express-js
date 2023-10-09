const path = require('path');

const express = require('express');

const controllersRoute=require("../controllers/products")

const router = express.Router();

router.get('/', controllersRoute.getProducts);

module.exports = router;
