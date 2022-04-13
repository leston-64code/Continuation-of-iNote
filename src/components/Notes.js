import {React,useContext, useEffect} from 'react'
import noteContext from '../context/notes/noteContext'
import Addnote from './Addnote'
import Notesitem from './Notesitem'


function Notes() {
    const context=useContext(noteContext)
    const {notes,getnote}=context
    // console.log(context)
//   console.log(context.notes)
useEffect(()=>{
  getnote()
},[])
  return (
    <div>
        <Addnote/>
       <div className="container row">
      <h1>Your notes</h1>
      {notes.map((individualnote)=>{
        // return individualnote.title,individualnote.description
        // return <Notesitem key={individualnote._id}  keyr={individualnote._id} title={individualnote.title} description={individualnote.description}/>
        return <Notesitem  key={individualnote._id} propdatanote={individualnote}/>
      })}
      
    </div>
    </div>
  )
}

export default Notes
