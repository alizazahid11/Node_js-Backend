//making simple Api 
//-------------------------------------------------///
// const http = require('http');
// const data=require('./data')
// http.createServer((req, res) => {
//     res.writeHead(200,{'Content-Type':'application\json'});
//     res.write(JSON.stringify(data))
//     res.end();
// }).listen(4000);
//-------------------------------------------------///

//IP FROM COMMAND LINE
//-------------------------------------------------///
// const fs=require('fs');
// const input=process.argv;
// if (input[2]=='add'){
//     fs.writeFileSync(input[3],input[4])
// }
// else if(input[2]=='remove'){
//     fs.unlinkSync(input[3]);
// }
// else{
//     console.log('invalid input')
// }
//-------------------------------------------------///

//show file list
//-------------------------------------------------///
// const fs=require('fs');
// const path=require('path');
// const directory_path=path.join(__dirname,'files');
// for(i=0;i<5;i++){
//     fs.writeFileSync(directory_path+"/hello"+i+".txt","hello")
// }
// fs.readdir(directory_path,(err,files)=>{
//     console.log(files)
// })
//-------------------------------------------------//

//CRUD
//-------------------------------------------------//
// const fs=require('fs');
// const path=require('path');
// const directory_path=path.join(__dirname,'crud');
// const filepath=`${directory_path} hello.txt`;
// // fs.writeFileSync(filepath,"hello");
// //for reading a file
// fs.readFile(filepath,'utf-8',(err,item)=>{
//     console.log(item)
// })
// //update a file
// fs.appendFile(filepath,'and fipl',(err)=>{
//     if(!err) console.log('file updateed')
// })
// //rename file 
// fs.rename(filepath,`${directory_path} fruit.txt`,(err)=>{
//     if(!err) console.log('file name updateed')
// })
// //del file
// fs.unlinkSync(`${directory_path}  fruit.txt`)

//-------------------------------------------------//

//EXPRESS JS INTRO
//-------------------------------------------------//
// const express=require('express');
// const app=express();
// app.get('',(req,res)=>{
//     res.send("hello")
// })
// app.get('/about',(req,res)=>{
//     res.send("aliza here"+req.query.name)//applying filter so name will conactenate here
// })
// app.get('/contact',(req,res)=>{
//     res.send("number")
// })
// app.get('/app',(req,res)=>{
//     res.send("app.com")
// })
// app.listen(5000);
//-------------------------------------------------//

//RENDER HTML AND JSON
//-------------------------------------------------//
// const express=require('express');
// const app=express();
// app.get('',(req,res)=>{
//     res.send(`<h1>welcome</h1> <a href='/about'>Go to about page</a>`)
// })
// app.get('/about',(req,res)=>{
//     res.send(`<input type="text" placeholder="username" value="${req.query.name}"/>`)//to get value from query parameters
// })
// app.get('/contact',(req,res)=>{
//     res.send("number")
// })
// app.get('/app',(req,res)=>{ //showing json data
//     res.send([
//         {
//             name:"aliza",
//             email:"jkjkjk"
//         },
//         {
//             name:"zahid",
//             email:"kdskdks"
//         }
//     ])
// })
// app.listen(5000);
//-------------------------------------------------//

//Make Html pages
//-------------------------------------------------//
// const express=require('express');
//  const app=express();
//  const path=require('path');
//  const publicpath=path.join(__dirname,'public');
//  app.use(express.static(publicpath));
//  app.listen(5000);
 //-------------------------------------------------//

//REMOVE EXTENSION FROM URL
//-------------------------------------------------//

// const express=require('express');
//  const app=express();
//  const path=require('path');
//  const publicpath=path.join(__dirname,'public');
// //  app.use(express.static(publicpath));// TO REMOVE EXTENSION DON'T USE THIS
// app.get('',(req,res)=>{
//     res.sendFile(`${publicpath}/index.html`)
// })
// app.get('/about',(req,res)=>{ //name can be anyy 
//     res.sendFile(`${publicpath}/about.html`)
// })
// app.get('*',(req,res)=>{ //name can be anyy 
//     res.sendFile(`${publicpath}/404page.html`)
// })
//  app.listen(5000);
//-------------------------------------------------//

//TEMPLATE ENGINE
//-------------------------------------------------//
// const express = require('express');
// const app = express();

// app.set('view engine', 'ejs');

// app.get('/profile', (_, res) => {
//     const user={
//         name:'aliza zahid',
//         email:"xyz",
//         city:'khi',
//         skills:["cpp","js","nodejs"]
//     }
//     res.render('profile',{user});  // Assuming your EJS file is named 'profile.ejs'
// });
// app.get('/login',(_,res)=>{
//     res.render('login')
// })
// app.listen(5000);
//-------------------------------------------------//



