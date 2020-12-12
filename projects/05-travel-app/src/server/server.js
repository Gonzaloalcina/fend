//Get route that returns the project data. Do I need this???
// app.get('/getData', (req, res)=>{
//     console.log('get data');
//     res.send(projectData);
// });

// Get route

//Post route receiving temp, date and user response
// app.post('/addData', (req, res)=>{
//     let data = req.body;
//     projectData["temp"] = data.temp;
//     projectData["feel"] = data.feel;
//     projectData["date"] = data.date;
//     res.send(projectData);
// });


// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
app = express();

//Dependencies//
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
const { request } = require('http');
app.use(cors());

// Initialize the main project folder
app.use(express.static("dist"));

// Setup Server
const port = 8000;
const server = app.listen(port, listening);

function listening() {
    console.log('server running');
    console.log(`running on localhost: ${port}`);
}

//Setup API credentials
const geonamesBase = 'http://.api.geonames.org/searchJSON?q=';
const geonamesUser = `&maxRows=1&fuzzy=0.6&username=${process.env.geonamesapiKey}`;

app.get('/', function (req,res) {
    res.sendFile('dist/index.html')
});



