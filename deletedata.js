//DELETE DATA IN MONGODB
const dbconnect = require('./mongodb');
const deletedata=async()=>{
    let data=await dbconnect();
    //if you want to delete single result
    // let res=await data.deleteOne({name:"iphone" })
     let res=await data.deleteMany({name:"realme" })
    console.log(res)
}
deletedata();