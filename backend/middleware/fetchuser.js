const jwt=require("jsonwebtoken")

const seckey="thisisit"


const fetchuser=(req,res,next)=>{

    const  token=req.header("auth-token")
    
    // console.log(token)
if(!token){
    return res.status(400).json({error:"Token not found"})
}

const verifier=jwt.verify(token,seckey)
if(!verifier){
   return  res.status(400).json({error:"Did not match"})
}



// console.log(verifier)
// console.log(verifier.user.id)
// console.log(verifier.user)
// console.log(user)
req.car=verifier.user
console.log(req.car)
next()



}
module.exports=fetchuser