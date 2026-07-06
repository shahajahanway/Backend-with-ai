/**
 * server ko create karna 
 * server ko config karna
 */

const express = require("express")


const app = express()
app.use(express.json())
const notes = []

/*
Post /notes */
app.post('/notes',(req,res)=>{
    notes.push(req.body)
    res.status(201).json({
        message:"Note created successfully"
    })
    
})

/*
Get  /notes */
app.get('/notes',(req,res)=>{
    res.status(200).json({
        notes:notes
        
    })
})
/**
 * Delete /notes/:index
 */
app.delete('/notes/:index', (req,res)=>{
    notes.splice(parseInt(req.params.index), 1)

    res.status(200).json({
        message:"note deleted successfully"
    })
})

/**
 * PATCH /notes/:index
 * 
 */
app.patch("/notes/:index",(req,res)=>{
    const index = parseInt(req.params.index)
    notes[index] = { ...notes[index], ...req.body }
    res.status(200).json({
        message:"note update successfully",
        note: notes[index]
    })
})

module.exports = app