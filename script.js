// Declare the installed frameworks
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

let note = [{ id: 1, body: 'We have a text' }, { id: 2, body: 'This is a second text' }];

// Call the express and body-parser
let app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static('public'));
// Installed the ejs and created a file inside the views
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Set up a route for the App
router.get('/', function(req, res) {
    res.render('notes', {
        note: note
    });
});

// App.post option
app.post("/addNotes", function(req, res) {
    const userNote = {};

    userNote.id = Math.random() * 100;
    userNote.body = req.body.newNote;

    note.push(userNote);

    res.redirect('/');
});

// Handling the delete request
app.post('/deleteNote/:id', function(req, res) {
    console.log(req.params.id);

    const deleteNotes = note.filter(item => item.id != req.params.id);
    note = deleteNotes;

    return res.redirect('/');
});

app.listen(5000, function() {
    console.log("Notes App server is running at port 5000")
});