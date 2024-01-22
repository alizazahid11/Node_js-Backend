const express=require('express');
const dbconnect=require('./mongodb');
const app=express();
const mongodb=require('mongodb')
app.use(express.json());//we converted data here  so data can be available from postman
//READ DATA
app.get('/',async(req,res)=>{
    let data=await dbconnect();
    data=await data.find().toArray();
 res.send(data)
})
//ENTERING DATA TO DATABASE
app.post('/',async(req,res)=>{
    let data=await dbconnect();
   let result=await data.insertOne(req.body); //req.body m wo aega jo postman ya react se nodejs m data send krty ho
    res.send(result)//jo api hme response dega
})
//UPDATE METHOD
app.put('/',async(req,res)=>{
    let data=await dbconnect();
    let result=await data.updateOne(
        {name:"abc"},{$set:req.body}
        )
    res.send({result:"updated"})
})
//DELETE METHOD
app.delete('/:id',async(req,res)=>{
    console.log(req.params.id);
    let data =await dbconnect();
    let result =await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    res.send(result);

})

app.listen(8000, () => {
    console.log('Server is running on port 3000');
});
