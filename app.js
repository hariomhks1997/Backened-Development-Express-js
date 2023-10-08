const express = require('express');
const bodyParser = require('body-parser');
const path=require("path");

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


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,"views","404.html"));
});

app.listen(3000);
 