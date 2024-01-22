const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/e-comm');

const prodschema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    age: Number
});
//INSEERT
const main=async()=>{
  
    const prodmodel=mongoose.model('products',prodschema);
    let data=new prodmodel({name:"al",price:1000,brand:"nokie"});
    let result=await data.save()
   console.log(result)
}
//UPDATE
const updateindb = async () => {

    const prodmodel=mongoose.model('products',prodschema);
    // Update the document
   let result = await prodmodel.updateOne(
        { name: 'usama' },
        { $set: { name:"aliza",age:80} }
    );
    console.log(result);
};
//DELETE
const deleteindn=async()=>{
    const prodmodel=mongoose.model('products',prodschema);
    let result=await prodmodel.deleteOne({name:"al"})
    console.log(result)
}
//FIND
const findindn=async()=>{
    const prodmodel=mongoose.model('products',prodschema);
    // let result=await prodmodel.find() // for finding every record
    let result=await prodmodel.find({name:"aliza"}) //for finding single record
    console.log(result)
}
findindn();
