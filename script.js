// Declare the installed frameworks
const express = require('express');
const bodyParser = require('body-parser');

// Call the express and body-parser
let app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

// Installed the ejs and created a file inside the views
app.set('view engine', 'ejs');

app.listen(5000, function() {
    console.log("Notes App server is running at port 5000")
});