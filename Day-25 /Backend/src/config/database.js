const mongoose = require("mongoose")

async function connectToDatabase(){
    await mongoose.connect(process.env.MONGO_URL),
    console.log("Connected to Database");
}

module.exports = connectToDatabase