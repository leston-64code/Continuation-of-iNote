import React, { useState } from "react";
import noteContext from "./noteContext";



const NoteState=(props)=>{
    const Hardnotes=[
        {
          "_id": "6255998abf544a4355068833",
          "user": "62526571eeedaca47f09a54d",
          "title": "My name is Leston Aaron Salis",
          "description": "this is first note",
          "tag": "General",
          "date": "2022-04-12T14:48:06.868Z",
          "__v": 0
        },
        {
          "_id": "6255c13bdfda50e70424a9b7",
          "user": "62526571eeedaca47f09a54d",
          "title": "Monday",
          "description": "Start learning chat application",
          "tag": "study",
          "date": "2022-04-12T18:12:10.648Z",
          "__v": 0
        },
        {
          "_id": "625663de1f4647babb3ac2fd",
          "user": "62526571eeedaca47f09a54d",
          "title": "dsads",
          "description": "asdfasdf",
          "tag": "asdfa",
          "date": "2022-04-13T05:46:47.820Z",
          "__v": 0
        },
        {
          "_id": "6256a71b1276013986ffa6d6",
          "user": "62526571eeedaca47f09a54d",
          "title": "story line",
          "description": "one there was a king who was very good guy",
          "tag": "General",
          "date": "2022-04-13T10:33:25.760Z",
          "__v": 0
        },
        {
          "_id": "6256a7361276013986ffa6d8",
          "user": "62526571eeedaca47f09a54d",
          "title": "grand theft auto",
          "description": "gta were one of the best games of all times",
          "tag": "General",
          "date": "2022-04-13T10:33:25.760Z",
          "__v": 0
        },
        {
          "_id": "6256a7411276013986ffa6db",
          "user": "62526571eeedaca47f09a54d",
          "title": "grand theft auto",
          "description": "gta were one of the best games of all times",
          "tag": "General",
          "date": "2022-04-13T10:33:25.760Z",
          "__v": 0
        },
        {
          "_id": "6256a7411276013986ffa6dd",
          "user": "62526571eeedaca47f09a54d",
          "title": "grand theft auto",
          "description": "gta were one of the best games of all times",
          "tag": "General",
          "date": "2022-04-13T10:33:25.760Z",
          "__v": 0
        },
        {
          "_id": "6256a7651276013986ffa6e0",
          "user": "62526571eeedaca47f09a54d",
          "title": "vice city",
          "description": "i had completer vice city when I was in 10 th std",
          "tag": "General",
          "date": "2022-04-13T10:33:25.760Z",
          "__v": 0
        },
        {
          "_id": "6256a7651276013986ffa6e2",
          "user": "62526571eeedaca47f09a54d",
          "title": "vice city",
          "description": "i had completer vice city when I was in 10 th std",
          "tag": "General",
          "date": "2022-04-13T10:33:25.760Z",
          "__v": 0
        },
        {
          "_id": "6256a7651276013986ffa6e4",
          "user": "62526571eeedaca47f09a54d",
          "title": "vice city",
          "description": "i had completer vice city when I was in 10 th std",
          "tag": "General",
          "date": "2022-04-13T10:33:25.760Z",
          "__v": 0
        },
        {
          "_id": "6256a7651276013986ffa6e6",
          "user": "62526571eeedaca47f09a54d",
          "title": "vice city",
          "description": "i had completer vice city when I was in 10 th std",
          "tag": "General",
          "date": "2022-04-13T10:33:25.760Z",
          "__v": 0
        },
        {
          "_id": "6256a7661276013986ffa6e8",
          "user": "62526571eeedaca47f09a54d",
          "title": "vice city",
          "description": "i had completer vice city when I was in 10 th std",
          "tag": "General",
          "date": "2022-04-13T10:33:25.760Z",
          "__v": 0
        }
      ]

      const [notes,setnotes]=useState(Hardnotes)
    
    return (
        <noteContext.Provider value={{notes,setnotes}}>
            {props.children} 
        </noteContext.Provider>
    )
}

export default NoteState