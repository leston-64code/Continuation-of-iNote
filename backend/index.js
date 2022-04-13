const express=require("express")
const connectdata=require("./db")
const router=require("./routes/auth")
var cors = require('cors')


const app=express()

app.use(cors())
app.use(express.json())
app.use("/api/auth",require("./routes/auth"))
app.use("/api/notes",require("./routes/notes"))




app.get("/",(req,res)=>{
    res.send("Welcome to home page buddy")
})


app.listen(5050,()=>{
    console.log("We are listening at port 5050")
})


connectdata()