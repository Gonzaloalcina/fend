// setup empty JS object to act as endpoint for all routes
let tripData = {};

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
app.post("/postData", function (req, res){
  tripData['cityTo'] = req.body.cityTo;
  tripData['cityFrom'] = req.body.cityFrom;
  tripData['cond'] = req.body.cond;
  tripData['dateDep'] = req.body.dateDep;
  tripData['temp'] = req.body.temp;
  tripData['img'] = req.body.img;
  tripData['newsTitle'] = req.body.newsTitle;
  tripData['newsDesc'] = req.body.newsDesc;
  tripData['newsImg'] = req.body.newsImg;
  tripData['newsUrl'] = req.body.newsUrl;
  tripData['eventName'] = req.body.eventName;
  tripData['eventTickets'] = req.body.eventTickets;
  tripData['eventDate'] = req.body.eventDate;
  tripData['eventImg'] = req.body.eventImg;
  tripData['eventVenue'] = req.body.eventVenue;

  res.send(tripData);
});





