## Our Project

Our task here was to create an application that can write, save and delete notes. It uses an express backend.

## Our dependencies

The program requires the express node dependency in order to serve data between our front and back end. We use
*  npm install express

In order to have the right node modules installed.

## Our Server API Routes

Get route:

Our get route will use express and the get command from ('/api/notes') The response to this command will send our "noteList" which is initially an empty array.


```

app.get('/api/notes', function (req, res){
    res.send(noteList)

```


Post Route

Our Post route will post the new note, save it on the request body, and return the note to the client.  We define newNote as the request body, and give it a unique ID using Date.now command. This will assign the current time in milliseconds to the ID, so each request will have a unique ID.

We then push the request body (the note itself) to our empty notelist array.
Our routes expect a send command, so we use that to finish it off.

```

app.post('/api/notes', function(req, res){
    console.log(req.body)
    let newNote = req.body;
    newNote.id = Date.now
    console.log(newNote)
    noteList.push(newNote)
    res.send({message: 'created item'})

```

Delete Route

Our delete should receive a query paramter containing the ID of the note to delete. We need to use a for loop to go through all saved notes, and match the requested note ID with one in our database, then delete it. We declare our node ID as being the requested nodeID and log it for debugging purposes.

Then we run a for loop that is equal to the number of notes currently stored.
If our node ID (the ID of the note requested for deletion) finds a match in our database, we run a splice command, which deletes the note. We then send this back and break.


``` 

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

```

## Installation

This project needs node and express installed. To install express use

``` 
npm install express

```

## Usage

This project can be accessed by either running the server locally using

```

node server.js

``
and viewing the locally hosted project at

```

localhost:3000

```

It can also be accessed at https://pure-brook-42302.herokuapp.com/notes.html



