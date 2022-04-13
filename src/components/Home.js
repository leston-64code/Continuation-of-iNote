
import {React } from 'react'
// import noteContext from '../context/notes/noteContext'
import Notes from './Notes'



export default function Home() {
  
    
  return (
    <>
    <div className="container">
        <h1>Add notes</h1>
    <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" className="btn btn-primary">Add note</button>
</form>
    </div>
    <div className="container">
      <Notes/>
    </div>
   
    </>
  )
}
