const express = require("express");

const app = express();
app.use(express.json())

const notes = [];

app.post("/notes", (req, res) => {
  console.log(req.body);

  res.send("note created Bhai");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
