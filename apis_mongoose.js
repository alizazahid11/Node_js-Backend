const express=require('express');
require('./config');
const product=require('./product');
const app=express();
app.use(express.json())
//POST METHOD 
app.post('/create',async(req,res)=>{
    let data= new product(req.body);
    let result=await data.save();
    console.log(result)
    res.send(result)
})
//GET METHOD
app.get('/list',async(req,res)=>{
    let data=await product.find();
    res.send(data);
})
//DELETE METHOD
app.delete('/delete/:_id',async(req,res)=>{ //:id is to get parameter
//    console.log(req.params)
let data=await product.deleteOne(req.params);
    res.send(data);
})
//PUT METHOD
app.put('/update/:_id',async(req,res)=>{ //:id is to get parameter
    //    console.log(req.params)
    let data=await product.updateOne(
        req.params,
        {$set:req.body}
        );
        res.send(data);
    })
app.listen(5000);