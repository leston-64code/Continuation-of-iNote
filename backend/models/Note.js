const  mongoose=require("mongoose")

const noteschema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"mydata"

    },
    title:{
        type:"String",
        required:true
    },
    description:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        default:"General"
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

const note=mongoose.model("entrynotes",noteschema)
module.exports=note