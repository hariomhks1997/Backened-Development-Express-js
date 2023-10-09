const products = [];
const rootDir = require('../util/path');
const path = require('path');

exports.getAddProduct = (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
}
exports.postAddProduct = (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
}

exports.getProducts = (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
}
exports.getcontactus=(req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
}
exports.postcontactus=(req, res, next) => {
  console.log(req.body);
  res.redirect('/sucess');
}
exports.getsucess=(req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'sucess.html'));
}