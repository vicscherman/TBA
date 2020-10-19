//declare installed frameworks
const express = require ('express') ;
const bodyParser = require('body-parser');

let note =[]


// call the express and Body parser
const app = express();
app.use(bodyParser.urlencoded({
extended: true
}));
//serving static files
app.use(express.static('public'));
//installed the ejs and create a file inside the views package
app.set('view engine' , 'ejs');

//set up the route for the app, using app.get first
app.get('/', function (req, res){
    res.render('notes',{
        note: note
    });
});

app.get('/', function (req,res){
    res.json(path.join(__dirname, "public/index.html"));
});

//now setting up app.post
app.post("/addNotes", function (req, res){
    //assigning Note id to the notes using math.random
    const userNote = {};
    userNote.id = Math.random() *100;
    userNote.body = req.body.newNote
    note.push(userNote);
    //the redirect to root directory
    res.redirect('/');
});

    //the delete  request

 app.post('/deletenote/:id', function (req, res){
    console.log(req.params.id);
    const deleteNotes = note.filter(item => item.id != req.params.id)
    note = deleteNotes;
    return res.redirect('/');
});
















//setting our server port
var PORT = process.env.PORT || 5000;
app.listen(PORT, function()
{console.log("note server is running")
});