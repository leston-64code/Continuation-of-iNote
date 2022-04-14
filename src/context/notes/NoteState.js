import React, { useState } from "react";
import noteContext from "./noteContext";



const NoteState = (props) => {
    const host = "http://localhost:5050"
    const Hardnotes = []
    const [notes, setnotes] = useState(Hardnotes)


    // getnotes
    const getnote = async () => {

        // API call 
        const response = await fetch(`${host}/api/notes/hello`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1MjY1NzFlZWVkYWNhNDdmMDlhNTRkIn0sImlhdCI6MTY0OTU4MDk4MH0.90E5VEk4AVagF0Q3RNIiB2J9ZZSde-S5FhSZY-C4Tzo"

            },

            

        });
        const json=await response.json()
       console.log(json)
       setnotes(json)
    }
       

    // addnotes

    const addnote = async (title, description, tag) => {

        // API call 
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1MjY1NzFlZWVkYWNhNDdmMDlhNTRkIn0sImlhdCI6MTY0OTU4MDk4MH0.90E5VEk4AVagF0Q3RNIiB2J9ZZSde-S5FhSZY-C4Tzo"

            },

            body: JSON.stringify({ title, description, tag })

        });
        // const json = response.json()



        console.log("Adding a note")
        const newnote = {
            "_id": "6255998abf544a4355068833",
            "user": "62526571eeedaca47f09a54d",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2022-04-12T14:48:06.868Z",
            "__v": 0
        }
        setnotes(notes.concat(newnote))
    }

    // edit notes
    const editnote = async (id, title, description, tag) => {
        // API call

        const response = await fetch(`${host}/api/notes/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1MjY1NzFlZWVkYWNhNDdmMDlhNTRkIn0sImlhdCI6MTY0OTU4MDk4MH0.90E5VEk4AVagF0Q3RNIiB2J9ZZSde-S5FhSZY-C4Tzo"

            },

            body: JSON.stringify({ title, description, tag })

        });
        const json = response.json()

            let newnotes=JSON.parse(JSON.stringify(notes))
        // Logic to edit in client
        for (let index = 0; index < newnotes.length; index++) {
            const elementer = newnotes[index];

            if (elementer._id === id) {
                newnotes[index].title = title
                newnotes[index].description = description
                newnotes[index].tag = tag
                break
            }
        }
        console.log(newnotes)
        setnotes(newnotes)
    }


    // delete note
    const deletenote =async  (id) => {
        // ADD note
        const response = await fetch(`${host}/api/notes/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjI1MjY1NzFlZWVkYWNhNDdmMDlhNTRkIn0sImlhdCI6MTY0OTU4MDk4MH0.90E5VEk4AVagF0Q3RNIiB2J9ZZSde-S5FhSZY-C4Tzo"

            },

           

        });
       const json=response.json()
       console.log(json)

        //Logic to delete note
        console.log("Deleting note with id " + id)
        const verytnewnote = notes.filter((notewhichyougetfromid) => { return notewhichyougetfromid._id !== id })
        setnotes(verytnewnote)

    }


    return (
        <noteContext.Provider value={{ notes, setnotes, addnote, deletenote, editnote,getnote }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState