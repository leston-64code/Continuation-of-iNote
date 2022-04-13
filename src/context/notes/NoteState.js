import React, { useState } from "react";
import noteContext from "./noteContext";



const NoteState=(props)=>{
    const s1={
        "name":"Harry",
        "class":"5b"
    }
    // const [state,setState]=useState(s1)
    // const update=()=>{
    //     setTimeout(()=>{
    //         setState({
    //             "name":"Leston",
    //             "class":"10b"

    //         })


    //     },1000)
    // }
    return (
        <noteContext.Provider value={s1}>
            {props.children} 
        </noteContext.Provider>
    )
}

export default NoteState