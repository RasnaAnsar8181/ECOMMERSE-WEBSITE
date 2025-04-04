const mongoose = require('mongoose')
const cl = require('cli-color')

const connectDB = async()=>{
    try {
        const connect = await mongoose.connect('mongodb://localhost:27017/Customers',{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log(cl.black.bgYellow("DB connected"))
    } catch (error) {
        console.log("DB error",error)
    }
}

module.exports = connectDB;