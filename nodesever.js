const express = require('express') //install express: Terminal >npm install express --save
const app = express()
const port = 8080
 
//Define Variables
var id = 65140322;
var status = "Single";
 
//Set &amp; Call EJS
app.set('view engine','ejs')
//Back-End NodeJS Display
app.get("/hello",(req,res) =>{
    res.send("Hello NodeJS Test!")
}) 
 
//New Font-End EJS Show HTML Display
app.get("/",(req,res) =>{
    res.render('index', {userid : id, status : status})
})
 
//Open Server
app.listen(port,() => {
    console.log("Server is Listening on port: ", port)
})