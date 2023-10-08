const express=require('express')
const router=express.Router()


router.get('/login', (req, res, next) => {
    res.send(`<form onsubmit="localStorage.setItem('username',document.getElementById('username').value)" action="/message" method="POST">

	<input id="username" name="username" type="text" name="title"></input>

	<button type="submit">add</button>

</form>`);
  });
  
  router.post('/message', (req, res, next) => {
    
    //localStorage.setItem("message",req.body)
   res.redirect('/message');
   //console.log(req.body.username);
   
  });
  
  module.exports = router;