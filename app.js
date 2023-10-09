const express = require('express');
const bodyParser = require('body-parser');
const path=require("path");
const errorcontrollerRoute=require("./controllers/error")

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const loginRoutes=require('./routes/login');
const messageRoutes=require("./routes/message");
const contactusRoutes=require("./routes/contactus");
const sucessRoutes=require("./routes/sucess")

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin', adminRoutes);
 app.use(contactusRoutes)
app.use(shopRoutes);
app.use(loginRoutes);
app.use(messageRoutes)
app.use(sucessRoutes)


app.use(errorcontrollerRoute.get404);

app.listen(3000);
 