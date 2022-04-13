const mongoose=require("mongoose")

const myschema= new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
    },
    password:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

const User=  mongoose.model("mydata",myschema)

module.exports=User