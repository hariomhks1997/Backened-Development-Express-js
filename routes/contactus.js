const express=require("express");
const path=require("path");
const router=express.Router();
const controllersRoute=require("../controllers/products")
router.get('/contactus',controllersRoute.getcontactus );

router.post('/sucess',controllersRoute.postcontactus );
  
module.exports = router;