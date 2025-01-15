const express = require("express");
const app = express();
const port = 8000;

let notes = [
    {
        note: "My new Note",
        autor: "Max Mustermann",
        date: "2025-01-15"
      }
];

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get('/notes', (req, res) => {
    console.log('Fetching notes:', notes); 
    res.json(notes);
})
  
app.get('/:id', (req, res) => res.send(`Note ${req.params.id}`));
app.get("/notes", (req, res) => {
    res.json("notes");
});


app.post("/notes", (req, res) => {
    res.json("notes");
});

app.post('/', (req, res) => res.send('Creating a new note'));

app.put("/notes", (req, res) => {
    res.json("notes");
});

app.put('/:id', (req, res) => res.send(`Updating note ${req.params.id}`));

app.delete("/notes", (req, res) => {    
    res.json("notes");
});

app.delete('/:id', (req, res) => res.send(`Deleting note ${req.params.id}`));

