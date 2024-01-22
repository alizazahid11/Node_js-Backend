const mongoose=require('mongoose');
const prodschema=new mongoose.Schema({
    name:String,
    age:Number
});
module.exports=mongoose.model('products',prodschema)