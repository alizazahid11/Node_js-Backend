//UPDATE DATA IN MONGODB
//UPDATE DATA IN MONGODB//UPDATE DATA IN MONGODB
const updatedata=async()=>{
let data=await dbconnect();
//for updating many things 
// let res=await data.updateMany( 
//     {name:"xyz"},{$set:{name:"iphon 30",price:50}
// }
// )
//for updating just one thing
let res=await data.updateOne( 
    {name:"hh"},{$set:{name:"iphon 90"}
}
)
console.warn(res);
}
updatedata();