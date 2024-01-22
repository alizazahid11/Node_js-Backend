//READ DATA FROM MONGODB TO NODEJS
const dbconnect=require('./mongodb')
const main=async ()=>{
    try{
    let data=await dbconnect();/// Wait for the connection to be established
    data =await data.find().toArray();
    console.warn(data);}
    catch (error) {
        console.error('Error:', error);
    }
}
main();
//-------------------------------------------------//