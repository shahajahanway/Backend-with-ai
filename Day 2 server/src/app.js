const express = require("express")

const app = express()

app.use(express.json())

app.get('/hello',(req,res)=>{
    res.send("hello world")
})
app.get('/about',(req,res)=>{
    res.send("This is About page")
})
app.get('/home',(req,res)=>{
    res.send("This is Home page");
    
})

module.exports = app