require('dotenv').config()
const app = require('./src/app')
const mongoose = require('mongoose')


function connectToDB(){
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("Connected to Database successfully ");
        
    })
}
connectToDB()



app.listen(3000,()=>{
    console.log("server runing on port 3000");
    
})