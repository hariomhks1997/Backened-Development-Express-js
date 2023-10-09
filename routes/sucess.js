const path = require('path');

const express = require('express');

const controllersRoute=require("../controllers/products")

const router = express.Router();

router.get('/sucess', controllersRoute.getsucess);

module.exports = router;
