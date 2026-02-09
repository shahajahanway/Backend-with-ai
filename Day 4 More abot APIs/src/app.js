// Create the server
// Configure the server

const express = require('express')

const app = express() // Server is created

app.use(express.json())

const notes = []

// Home route
app.get("/", (_req, res) => {
    res.send("Home page")
})

/*
Create a new note

POST /notes
Request body: { ...noteData }
*/
app.post("/notes", (req, res) => {
    console.log(req.body)
    notes.push(req.body)
    console.log(notes)
    res.send("Note created successfully")
})

/*
Get all notes

GET /notes
*/
app.get("/notes", (_req, res) => {
    res.send(notes)
})

/*
Delete a note by index

DELETE /notes/:index
Example: DELETE /notes/3
*/
app.delete("/notes/:index", (req, res) => {
    delete notes[req.params.index]
    res.send("Note deleted successfully")
})

/*
Update a note by index

PATCH /notes/:index
Request body: { ...updatedNoteData }
*/
app.patch("/notes/:index", (req, res) => {
    notes[req.params.index] = req.body
    res.send("Note updated successfully")
})

module.exports = app