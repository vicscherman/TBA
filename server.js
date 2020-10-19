const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// will share any static html files with the browser
app.use( express.static('public') );
// accept incoming POST requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const dbFile = './app/db.json';

let noteList = [];

// Endpoints =================================================
app.post('/api/notes', function(req, res){
    console.log(req.body)
    let newNote = req.body;
    newNote.id = Date.now()
    console.log(newNote)
    noteList.push(newNote)
    res.send({message: 'created item'})
})
// for app.post: newNote.id = uuid.v4() // use a random unique id.

app.get('/api/notes', function (req, res){
    res.send(noteList)
});

app.delete('/api/notes/:nodeID', function(req, res){
    const nodeID = req.params.nodeID;
    console.log(nodeID)
    for(let i=0; i<noteList.length; i++){
        if( nodeID === noteList[i].id){
        noteList.splice(i,1);
        res.send({message: 'deleted item'})
        break
        }
    }
})
// Listener ==================================================
app.listen(PORT, function() {
    console.log(`Serving notes on PORT ${PORT}`)
})
