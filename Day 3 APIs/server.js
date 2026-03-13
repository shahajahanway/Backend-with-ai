const express = require("express")

const app = express()

app.get('/',(req,res)=>{
    res.send("Hello world")


})
app.get('/about',(req,res)=>{
    res.send("This is About page")
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
    
})
