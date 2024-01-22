// ROUTE-LEVEL-MIDDLEWARE

const express = require('express');
const app = express();
const route=express.Router();
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
 
//  app.use(reqFilter); //we don't use this here 
app.get('/users',(req,res)=>{
    res.send("heelooo")
})
app.get('/',(req,res)=>{
    res.send("welcome to home page")
})
app.get('/login',reqFilter,(req,res)=>{
    res.send("welcome to home page")
})

app.listen(4000);

// part 2
const express = require('express');
const app = express();
const route=express.Router();
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

  route.use(reqFilter);
//  app.use(reqFilter); //we don't use this here 
app.get('/users',(req,res)=>{
    res.send("heelooo")
})
app.get('/',(req,res)=>{
    res.send("welcome to home page")
})
app.get('/login',(req,res)=>{
    res.send("welcome to login page")
})
route.get('/contact',(req,res)=>{
    res.send("welcome to contact page")
})
app.use('/',route)

