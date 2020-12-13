// setup empty JS object to act as endpoint for all routes
let projectData = [];

const fetch = require("node-fetch");

// boilerplate server code
const path = require('path');
const express = require('express'); // require express to run server and routes
app = express(); // start up an instance of app
const bodyParser = require('body-parser'); // dependencies
app.use(bodyParser.json()); // middleware
const cors = require('cors'); // cors for cross origin allowance
const { request } = require('http');
app.use(cors());

// initialize the main project folder
app.use(express.static("dist"));

// setup server
const port = 8000;
const server = app.listen(port, listening);
function listening() {
    console.log('server running');
    console.log(`running on localhost: ${port}`);
}

// get route
app.get('/', function (req,res) {
    res.sendFile('dist/index.html')
});

// post route
app.post("/postData", mainServer);

function mainServer (req, res) {

  res.send(projectData);
};





