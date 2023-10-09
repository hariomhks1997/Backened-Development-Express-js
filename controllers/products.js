const products = [];
const rootDir = require('../util/path');
const path = require('path');
const fs=require("fs")

exports.getAddProduct = (req, res, next) => {
  
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
}
exports.postAddProduct = (req, res, next) => {
 //console.log(req.body);
 
  fs.writeFileSync("username.txt",`${req.body.title}:${req.body.title}`,{flag:'a'},(err)=>
  err?console.log(err):res.redirect('/'))
  res.redirect('/');
}

exports.getProducts = (req, res, next) => {
  fs.readFile('username.txt',{encoding:"utf-8"},(err,data)=>{
    if(err){
       console.log(err)
       data="no chat exists"
    }
   console.log(data)
}); 
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