// const dotenv = require('dotenv');
// dotenv.config();
// const API_KEY = process.env.API_KEY;
// const baseUrl = 'https://api.meaningcloud.com/sentiment-2.1?key=';

// const path = require('path');
// const express = require('express');
// const mockAPIResponse = require('./mockAPI.js');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const fetch = require('node-fetch');

// const app = express();

// app.use(express.static('dist'));
// app.use(bodyParser.text());
// app.use(cors());

// console.log(__dirname)

// app.get('/', (req, res) => {
//     res.sendFile('dist/index.html')    
// });

// app.get('/test', (req, res) => {
//     res.send('mockAPIResponse');
// });

// // designates what port the app will listen to for incoming requests
// app.listen(8081, function () {
//     console.log('Example app listening on port 8081!')
// })

// app.get('/test', function (req, res) {
//     res.send(mockAPIResponse)
// })

// app.post('/article', callAPI);

// async function callAPI (req, res) {
//     console.log(`Request is ${req.body}`);
//     const resp = await fetch(`${baseUrl}${API_KEY}&lang=auto&url=${req.body}`);

//     try {
//         const data = await resp.json()
//         if (data.status.code === 0) {
//             data.message = 'That´s ok';
//             res.send(data);
//         } else {
//             res.send({ message: 'Try again'})
//         }
        
//     } catch (error) {
//         console.log(error);
//     }
// }

const dotenv = require("dotenv");
dotenv.config();
const API_KEY = process.env.API_KEY;

const path = require("path");
const mockAPIResponse = require("./mockAPI");
const fetch = require("node-fetch");

const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key=";

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.text());

const cors = require("cors");
app.use(cors());

app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.sendFile("dist/index.html");
});

app.get("/test", (req, res) => {
  res.send(mockAPIResponse);
});

app.post("/article", async (req, res) => {
  const resp = await fetch(`${baseUrl}${API_KEY}&lang=auto&url=${req.body}`);

  try {
    const data = await resp.json();
    res.send(data);
  } catch (err) {
    console.log("error", err);
  }
});

app.listen(8081, () => {
  console.log(`app running at http://localhost:8081`);
});

