const mongoose=require('mongoose');
const url=`mongodb+srv://shahidraza02qwert:${process.env.MONGOOSE_PASSWORD}@cluster0.mqrfg6o.mongodb.net/${process.env.DATABASE_NAME}`;

mongoose.connect(url);
const db=mongoose.connection;
db.on('error',()=>{
    console.log("Error in connecting MO")
});
db.once('open',()=>{
    console.log('Successfull connected to mongoDB !');
})
module.exports=db;