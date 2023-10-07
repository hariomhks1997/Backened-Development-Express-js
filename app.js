const express=require('express');
const app=express();
app.use("/",(req, res, next)=>{
    console.log("this always runs"); 
   next()
    
})
app.use("/add-product",(req, res, next)=>{
    console.log("in another middleware"); 
    res.send("<h1>Add product</h1>")
    
})
app.use("/",(req, res, next)=>{
    console.log("in another middleware"); 
    res.send("<h1>hello from express</h1>")
    
})


app.listen(3000);