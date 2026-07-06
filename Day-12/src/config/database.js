const mongoose= require('mongoose')

function connectToDB(){
    mongoose.connect(process.env.MONGO_UR)
    .then(()=>{
        console.log("connected to DB");
        
    })
}

module.exports= connectToDB