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
let projectData = [];

const fetch = require("node-fetch");

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
app = express();
//Dependencies//
const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
//app.use(bodyParser.urlencoded({ extended: false }));
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


// setup API credentials
const geonamesBase = 'http://api.geonames.org/searchJSON?q=';
const geonamesUser = `&username=${process.env.geonames_apiKey}&maxRows=1`;

app.get('/', function (req,res) {
    res.sendFile('dist/index.html')
});

// post route
// app.post('/postData', apiGeo);

// async function apiGeo(req, res) {
//     const city = req.body.destCity;
//     const urlGeo = `${geonamesBase}${city}${geonamesUser}`;
//     console.log(`the URL is ${urlGeo}`);
    // const response = await fetch(urlGeo);
    // console.log = (`Result: ${response}`);
    // const respGeo = await response.json();

    // const long = respGeo.geonames[0].lng;
    // const lat = respGeo.geonames[0].lat;
    // const country = respGeo.geonames[0].countryName;
    // const pop = respGeo.geonames[0].population;

    // const theCity = {long, lat, country, pop}
    // console.log(theCity);

    // // res.send(respGeo);
    // try {
    //     const response = await fetch(urlGeo)
    //     if (!response.ok) {
    //         console.log(`Error. Response status ${response.status}`)
    //         res.send(null);
    //     }
    //     const responseJSON = await response.json()
    //     res.send(responseJSON)

    // } catch (error) {
    //     console.log(`Wrong connection with server: ${error}`)
    //     res.send(null)
    // }
//}


app.post("/postData", async (req, res) => {
    let endpoint = 'http://api.geonames.org/searchJSON?q=Madrid&username=gonzalo_alcina';
    console.log(endpoint);
    console.log(JSON.stringify(req.body));
    const resp = await fetch(endpoint, {method: "POST"});
    try {
      const data = await resp.json();
      res.send(data);
    } catch (err) {
      console.log("error", err);
    }
  });




