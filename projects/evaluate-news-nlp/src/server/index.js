// Require hidden api key
const dotenv = require("dotenv");
dotenv.config();
const API_KEY = process.env.API_KEY;

const path = require("path");
const mockAPIResponse = require("./mockAPI");
const fetch = require("node-fetch");

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.text());

const cors = require("cors");
app.use(cors());

app.use(express.static("dist"));

//

const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key=";

//Get Route
app.get("/", (req, res) => {
  res.sendFile("dist/index.html");
});

app.get("/test", (req, res) => {
  res.send(mockAPIResponse);
});

//Post Route
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

