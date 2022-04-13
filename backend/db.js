const mongoose=require("mongoose")

const mongoURI="mongodb://localhost:27017/helloworld?readPreference=primary&appname=MongoDB%20Compass&ssl=false"

const connectdata=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to mongo database")
    })
}


module.exports=connectdata