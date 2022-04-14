const express=require("express")
const fetchuser=require("../middleware/fetchuser")
const Note=require("../models/Note")
const { body, validationResult } = require('express-validator');
const note = require("../models/Note");
const { findByIdAndUpdate } = require("../models/Note");


const router=express.Router()

// get a note
router.post("/hello",fetchuser, async(req,res)=>{
    const superman=req.car.id
    console.log(superman)
    const noter= await Note.find({superman})
    // console.log(noter)
    res.json(noter)
})

// Add  a note
router.post("/addnote",fetchuser,[
    body("title","Please title is required").isLength({min:3}),
    body("description","Please provide description").isLength({min:5})
],async (req,res)=>{
    
    // const {title,description,tag}=req.body
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const newNote= new Note({
        
        description:req.body.description,
        title:req.body.title,
        tag:req.body.tag,
        user:req.car.id
    })

    const saver= await newNote.save()
    res.json(saver)

   


})


// update an existing note
router.put("/update/:id",fetchuser,async(req,res)=>{
    const {title,description,tag}=req.body

    
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // }

    const nayawala={}
    if(title){nayawala.title=title}
    if(description){nayawala.description=description}
    if(tag){nayawala.tag=tag}



    let note= await Note.findById(req.params.id)
    if(!note){
        res.status(400).json({error:"Note not found"})
    }

    if(note.user.toString() !==req.car.id){
        res.status(400).json({error:"You are hacker"})
        
    }
    console.log(note.user.toString())
    console.log(req.car.id)

    note= await Note.findByIdAndUpdate(req.params.id,{$set:nayawala},{new:true})
    res.json({note})
    // res.send(note)
    // console.log(note)


})



// Delete a note using delete
router.delete("/delete/:id",fetchuser,async(req,res)=>{
    const {title,description,tag}=req.body

    
   



    let note= await Note.findById(req.params.id)
    if(!note){
        return res.status(400).json({error:"Note not found"})
    }

    if(note.user.toString() !==req.car.id){
        return res.status(400).json({error:"Note allowed"})
        
    }
    console.log(note.user.toString())
    console.log(req.car.id)

    note= await Note.findByIdAndDelete(req.params.id)
    res.json({note})
    // res.send(note)
    // console.log(note)


})



module.exports=router