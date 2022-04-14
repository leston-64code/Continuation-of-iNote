import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

const Signup = () => {
  const [credentials, setcredentials] = useState({ name:"",email:"", password:"",cpassword:"" })
  
  const {name,email,password}=credentials
  let history=useNavigate()

    const handelsubmit = async (e) => {
        e.preventDefault()

        const response = await fetch("http://localhost:5050/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({ name,email,password })
        })
        // console.log(response)
        const json =  await response.json()
        console.log(json)
        
        if(json.success){
            localStorage.setItem("token",json.authtoken1)
            history("/")
        }else{
              alert("A user with this email already exists")
        }

        

    
    }
    const onchange = (e) => {
            setcredentials({ ...credentials, [e.target.name]: e.target.value })
    
        }
  return (
    <div className="container">
       <form onSubmit={handelsubmit}>
       <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" onChange={onchange} value={credentials.name} aria-describedby="emailHelp" />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" onChange={onchange} value={credentials.email} aria-describedby="emailHelp" />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" value={credentials.password} onChange={onchange} className="form-control" name="password" id="password" minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                    <input type="password" value={credentials.cpassword} onChange={onchange} className="form-control" name="cpassword" id="cpassword" minLength={5} required/>
                </div>

                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>

       
    </div>
  )
}

export default Signup
