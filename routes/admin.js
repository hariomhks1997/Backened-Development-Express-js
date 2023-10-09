const path = require('path');

const express = require('express');

const controllersRoute=require("../controllers/products")

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', controllersRoute.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', controllersRoute.postAddProduct);

module.exports = router;
