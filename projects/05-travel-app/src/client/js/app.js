//require hidden key
const dotenv = require("dotenv");
dotenv.config();

// fetch for functions
const fetch = require('node-fetch');

const info = {};

// store data from UI with event listeners and variables
const submitBtn = document.getElementById('generate');
const cityFrom = document.getElementById('from');
const cityTo = document.getElementById('to');
const dateDep = document.getElementById('date-departure');

// api keys info
const geoUrlBase = 'http://api.geonames.org/searchJSON?q=';
const geoApi = process.env.GEO_APIKEY;
const weatherUrlBase = 'https://api.weatherbit.io/v2.0/forecast/daily?lat=';
const weatherUrlHist = 'https://api.weatherbit.io/v2.0/history/daily?lat=';
const weatherApi = process.env.WEATHER_APIKEY;
const pixabayUrlBase = 'https://pixabay.com/api/?key=';
const pixabayApi = process.env.PIXABAY_APIKEY;

// event listener to start the app
submitBtn.addEventListener('click', theUserTrip);

// main function with the trip process, starts in functions.js (postData route)
function theUserTrip(e) {
    e.preventDefault();
    console.log('hello developer');
};

// geonames function
async function geoCity (to) {
    const resp = await fetch(geoUrlBase + to + '&maxRows=10&' + geoApi);
    try {
        return await resp.json();
    } catch (error) {
        console.log('error', error);
    }
};

// getWeather function
async function weather () {

};

async function image () {

}


// post data to server function
async function postRoute (info) {

};

// update UI function
async function updateUI () {

};

export {
    theUserTrip
}



