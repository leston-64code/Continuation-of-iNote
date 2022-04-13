import { React, useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext'




function Addnote() {
    const context = useContext(noteContext)
    const { addnote } = context
    const [note, setnote] = useState({ title: "", description: "", tag: "" })

    const onchange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value })

    }

    const onclick = (e) => {
        e.preventDefault()
        addnote(note.title, note.description, note.tag)
    }


    return (

        <div className="container">
            <h1>Add notes</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" onChange={onchange} id="title" name="title" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" onChange={onchange} id="description" name="description" />
                </div>

                <button type="submit" onClick={onclick} className="btn btn-primary">Add note</button>
            </form>
        </div>


    )
}

export default Addnote
