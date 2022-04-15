import { React, useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import noteContext from '../context/notes/noteContext'
import Addnote from './Addnote'
import Notesitem from './Notesitem'


function Notes() {
  const history=useNavigate()
  

  const context = useContext(noteContext)
  const { notes, getnote,editnote } = context
  
  const [note, setnote] = useState({ id:"",etitle: "", edescription: "", etag: "" })
  // console.log(context)
  //   console.log(context.notes)
  

  const updatenote = (currentnote) => {
    ref.current.click()
    setnote({ id:currentnote._id, etitle: currentnote.title, edescription: currentnote.description, etag: currentnote.tag })

  }
  const ref = useRef(null)
  const refclose = useRef(null)

  useEffect(() => {
    if(localStorage.getItem("token")){
      getnote()
      // eslint-disable-next-line
    }else{
        history("/login")
    }
   
  }, [])




  const onchange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value })

  }

  const onclick = (e) => {
    console.log("updating the note", note)
    editnote(note.id,note.etitle,note.edescription,note.etag)
    refclose.current.click()
    // e.preventDefault()
    // addnote(note.title, note.description, note.tag)
  }




  return (
    <div>
      <Addnote />

      <button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={ref}>
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" onChange={onchange} id="etitle" name="etitle" aria-describedby="emailHelp" value={note.etitle} />
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input type="text" className="form-control" onChange={onchange} id="edescription" name="edescription" value={note.edescription} />
                </div>

                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input type="text" className="form-control" onChange={onchange} id="etag" name="etag" value={note.etag} />
                </div>
              </form>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" ref={refclose}>Close</button>
              <button type="button" className="btn btn-primary" onClick={onclick}>Update note</button>
            </div>
          </div>
        </div>
      </div>

      <div className="container row">
        <h1>Your notes</h1>
        <div className="container">
        {notes.length===0 && "No notes to display"}
        </div>
        
        {notes.map((individualnote) => {
          // return individualnote.title,individualnote.description
          // return <Notesitem key={individualnote._id}  keyr={individualnote._id} title={individualnote.title} description={individualnote.description}/>
          return <Notesitem key={individualnote._id} updatenote={updatenote} propdatanote={individualnote} />
        })}

      </div>
    </div>
  )
}

export default Notes















