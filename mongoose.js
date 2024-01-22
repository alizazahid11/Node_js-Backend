const mongoose=require('mongoose');
const main=async()=>{
    await mongoose.connect('mongodb://localhost:27017/e-comm');
    const prodschema=new mongoose.Schema({
        name:String,
        price:Number,
        brand:String
    })
    const prodmodel=mongoose.model('products',prodschema);
    let data=new prodmodel({name:"al",price:1000,brand:"nokie"});
    let result=await data.save()
   console.log(result)
}
main()