// Application MIDDLEWARES

const express = require('express');
const app = express();
const reqFilter=(req,res,next)=>{
    if(!req.query.age){
      res.send("please provide age");
    }
    else if(req.query.age<18){
        res.send("you cant access this page")
    }
    else{
        next();
    }
 }
 
 app.use(reqFilter);
app.get('/users',(req,res)=>{
    res.send("heelooo")
})
app.get('/',(req,res)=>{
    res.send("welcome to home page")
})

app.listen(5000);

