
const express=require('express')
const fs=require("fs")
//const data=require('./data');
const router=express.Router()


router.get('/message', (req, res, next) => {
    fs.readFile('username.txt',{encoding:"utf-8"},(err,data)=>{
        if(err){
           console.log(err)
           data="no chat exists"
        }
        res.send(`${data}<form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST">

	<input id="message" name="message" type="text" placeholder="message">
    <input type="hidden" name="username" id="username" ></input>

	<button type="submit">Send</button>

</form>`)
  }); 
     })
     
   
  
  router.post('/', (req, res, next) => {
    console.log(`${req.body.username}:${req.body.message}`)
    fs.writeFile("username.txt",`${req.body.username}:${req.body.message}`,{flag:'a'},(err)=>
    err?console.log(err):res.redirect('/message'))
    
   
   
    
    
   
  });
  
  module.exports = router;