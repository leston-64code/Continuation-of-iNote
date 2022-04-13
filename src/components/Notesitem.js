import React from 'react'

function Notesitem(props) {
    // const {title,description}=props
    return (
        <div className='col-md-3 my-3'>

            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <i className="fa-solid fa-trash-can mx-2"></i>
                    <i className="fa-solid fa-pen-to-square mx-2"></i>
                </div>
            </div>



        </div>
    )
}

export default Notesitem
