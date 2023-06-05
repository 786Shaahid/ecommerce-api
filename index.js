const express=require('express');
const env=require("dotenv").config();
const mongoose=require('./config/mongoose');
const app=express();
const port= 5000 || process.env.PORT_NO ;

app.use(express.json());

 




// router
app.use("/products",require('./routes/route'));

app.listen(port,(err)=>{
    if(err){console.log("Error in connecting the server on port:",port); return;}
     console.log("Server is connected successfully on port :",port);
})