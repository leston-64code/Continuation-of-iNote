import {React,useContext} from 'react'
import noteContext from '../context/notes/noteContext'
import Notesitem from './Notesitem'


function Notes() {
    const context=useContext(noteContext)
    console.log(context)
//   console.log(context.notes)
  return (
    <div>
       <div className="container row">
      <h1>Your notes</h1>
      {context.notes.map((individualnote)=>{
        // return individualnote.title,individualnote.description
        return <Notesitem key={individualnote._id} title={individualnote.title} description={individualnote.description}/>
      })}
      
    </div>
    </div>
  )
}

export default Notes
