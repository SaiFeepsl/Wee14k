const express = require('express') //install express: Terminal >npm install express --save
const app = express()
const port = 8080
 
//Define Variables
var id = 737867;
var status = "989 788";
var number = "362277 129232 708219 003392 826066"; ;
var rember = "020974 920401 344527 315090 141817";
 
//Set &amp; Call EJS
app.set('view engine','ejs')
 
//Back-End NodeJS Display
app.get("/hello",(req,res) =>{
    res.send("ฉลากกินเเบ่งรัฐบาล")
}) 
 
//New Font-End EJS Show HTML Display
app.get("/",(req,res) =>{
    res.render('index', {userid : id, status : status})
})
 
//Open Server
app.listen(port,() => {
    console.log("Server is Listening on port: ", port)
})