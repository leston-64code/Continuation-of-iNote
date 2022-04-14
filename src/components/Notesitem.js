import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

function Notesitem(props) {
    // const {title,description}=props
    const {propdatanote,updatenote}=props
    const context=useContext(noteContext)
    const {deletenote}=context
    
    
    return (
        <div className='col-md-3 my-3'>

            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">{propdatanote.title}</h5>
                    <p className="card-text">{propdatanote.description}</p>
                    <i className="fa-solid fa-trash-can mx-2" onClick={()=>{deletenote(propdatanote._id)
                    }} ></i>
                    <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updatenote(propdatanote)}}></i>
                    {/* <p>{props.keyr}</p> */}
                </div>
            </div>



        </div>
    )
}

export default Notesitem
