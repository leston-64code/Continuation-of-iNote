import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [credentials, setcredentials] = useState({ email:"", password:"" })
    let history=useNavigate()



    const handelsubmit = async (e) => {
        e.preventDefault()

        const response = await fetch("http://localhost:5050/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({ email:credentials.email, password:credentials.password })
        })
        // console.log(response)
        const json =  await response.json()
        console.log(json)
        if(json.success){
            localStorage.setItem("token",json.authtoken1)
            history("/")

        }else{
            alert("invalid credentials")
        }

    
    }
    const onchange = (e) => {
            setcredentials({ ...credentials, [e.target.name]: e.target.value })
    
        }
   
    return (
        <div className='container'>
            <form onSubmit={handelsubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" onChange={onchange} value={credentials.email} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" value={credentials.password} onChange={onchange} className="form-control" name="password" id="password" />
                </div>

                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>

        </div>
    )
}

export default Login
