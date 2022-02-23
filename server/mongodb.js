const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/usersDB"



 
const connectToMongo = ()=>{
    mongoose.connect(mongoURI, {useNewUrlParser: true} , ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;